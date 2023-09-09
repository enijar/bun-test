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
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Playing around with Bun 1.0: React SSR, Styled Components, and React Router DOM."
        />
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
        <script defer src="/index.js"></script>
      </body>
    </html>
  );
}
