import React from "react";
import { renderToReadableStream } from "react-dom/server";
import Client from "./client";

export default async function server() {
  Bun.serve({
    async fetch(req: Request) {
      const url = new URL(req.url);
      const currentFile = new URL(import.meta.url);
      const buildPath = currentFile.pathname.replace(/\/src\/server\.tsx$/, "/build");
      const filePath = buildPath + url.pathname;
      const file = Bun.file(filePath);
      if (!(await file.exists())) {
        const stream = await renderToReadableStream(<Client />);
        return new Response(stream, {
          headers: {
            "Content-Type": "text/html",
          },
        });
      }
      return new Response(file.stream(), {
        headers: {
          "Content-Type": file.type,
          "Content-Length": file.size.toString(),
        },
      });
    },
  });
}
