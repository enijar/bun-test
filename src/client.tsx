import React from "react";
import { StaticRouter } from "react-router-dom/server";
import App from "./components/app/app";
import { AppStyles } from "./components/app/app.styles";

type Props = {
  styles?: React.ReactElement[];
  location?: string;
};

export default function Client({ styles, location }: Props) {
  return (
    <html>
      <head>
        <title>App</title>
        {styles ?? <AppStyles />}
        <script dangerouslySetInnerHTML={{ __html: `window.process = { env: { NODE_ENV: 'production' } }` }} />
      </head>
      <body>
        <div id="root">
          <StaticRouter location={location}>
            <App />
          </StaticRouter>
        </div>
        <script src="index.js" defer></script>
      </body>
    </html>
  );
}
