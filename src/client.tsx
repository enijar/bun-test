import React from "react";
import App from "./app";

export default function Client() {
  return (
    <html>
      <head>
        <title>App</title>
      </head>
      <body>
        <div id="root">
          <App />
        </div>
        <script src="index.js" defer></script>
      </body>
    </html>
  );
}
