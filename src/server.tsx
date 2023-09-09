import React from "react";
import { renderToReadableStream } from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import Client from "./client";

const currentFile = new URL(import.meta.url);
const basePath = currentFile.pathname.replace(/\/src\/server\.tsx$/, "");
const buildPath = `${basePath}/build`;

export async function fetch(req: Request) {
  const url = new URL(req.url);
  const filePath = `${buildPath}${url.pathname}`;
  const file = Bun.file(filePath);
  if (await file.exists()) {
    return new Response(file.stream(), {
      headers: {
        "Content-Type": file.type,
        "Content-Length": file.size.toString(),
      },
    });
  }
  const sheet = new ServerStyleSheet();
  try {
    const jsx = sheet.collectStyles(
      <StyleSheetManager sheet={sheet.instance}>
        <Client location={url.pathname} />
      </StyleSheetManager>,
    );
    await renderToReadableStream(jsx);
    const styles = sheet.getStyleElement();
    const stream = await renderToReadableStream(<Client styles={styles} location={url.pathname} />);
    return new Response(stream, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  } catch (err) {
    // todo: handle error
    console.error(err);
    return new Response("Internal Server Error", {
      status: 500,
      statusText: "Internal Server Error",
    });
  } finally {
    sheet.seal();
  }
}

export default function server() {
  Bun.serve({ fetch });
}
