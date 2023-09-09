import { createGlobalStyle } from "styled-components";

export const AppStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    color-scheme: light dark;
    font-family: system-ui, sans-serif;
  }
`;
