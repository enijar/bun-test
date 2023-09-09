/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./app";

const root = document.querySelector("#root");

if (root !== null) {
  hydrateRoot(root, <App />);
}
