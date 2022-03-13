import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalStylesDefault } from "./styles/globalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStylesDefault />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
