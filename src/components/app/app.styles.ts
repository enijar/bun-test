import { createGlobalStyle } from "styled-components";

export const AppStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    color-scheme: light dark;
    font-family: system-ui, sans-serif;
  }

  a {
    color: #000000;
  }

  @media (prefers-color-scheme: dark) {
    a {
      color: #ffffff;
    }
  }
`;
