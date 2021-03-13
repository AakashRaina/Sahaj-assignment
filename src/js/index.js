import React from "react";
import ReactDom from "react-dom";
import App from "js/App";
import Provider from "./store/Provider";
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
