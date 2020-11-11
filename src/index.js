import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AppDev from "./AppDev";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/} 
    <AppDev />
  </React.StrictMode>,
  rootElement
);
