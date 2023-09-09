import React from "react";
import App from "./app";
import { AppStyles } from "./app.styles";

type Props = {
  styles?: React.ReactElement[];
};

export default function Client({ styles }: Props) {
  return (
    <html>
      <head>
        <title>App</title>
        {styles ?? <AppStyles />}
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
