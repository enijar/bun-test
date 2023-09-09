/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app/app";

const root = document.querySelector("#root");

if (root !== null) {
  hydrateRoot(
    root,
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
}
