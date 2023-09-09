import React from "react";
import { renderToReadableStream } from "react-dom/server";
import Client from "./client";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export async function fetch(req: Request) {
  const url = new URL(req.url);
  const currentFile = new URL(import.meta.url);
  const buildPath = currentFile.pathname.replace(/\/src\/server\.tsx$/, "/build");
  const filePath = buildPath + url.pathname;
  const file = Bun.file(filePath);
  if (!(await file.exists())) {
    const sheet = new ServerStyleSheet();
    try {
      const jsx = sheet.collectStyles(
        <StyleSheetManager sheet={sheet.instance}>
          <Client />
        </StyleSheetManager>,
      );
      await renderToReadableStream(jsx);
      const styles = sheet.getStyleElement();
      const stream = await renderToReadableStream(<Client styles={styles} />);
      return new Response(stream, {
        headers: {
          "Content-Type": "text/html",
        },
      });
    } catch (err) {
      // todo: handle error
      console.error(err);
    } finally {
      sheet.seal();
    }
  }
  return new Response(file.stream(), {
    headers: {
      "Content-Type": file.type,
      "Content-Length": file.size.toString(),
    },
  });
}

export default function server() {
  Bun.serve({ fetch });
}
