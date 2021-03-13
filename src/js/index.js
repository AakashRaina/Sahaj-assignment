import React from "react";
import ReactDom from "react-dom";
import App from "js/App";
import Provider from "./store/Provider";

ReactDom.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
