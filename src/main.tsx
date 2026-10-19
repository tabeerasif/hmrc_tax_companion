import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { initAll } from "govuk-frontend";

import App from "./App";
import "./index.scss";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Could not find the React root element.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

requestAnimationFrame(() => {
  initAll();
});