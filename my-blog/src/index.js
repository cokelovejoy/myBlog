import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// 将App组件插入root节点
ReactDOM.render(
  <App />,
  document.getElementById("root")
);

serviceWorker.unregister();
