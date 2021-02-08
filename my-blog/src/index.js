import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FrontEnd from "./pages/frontEndPage/frontend.js";
import Experience from "./pages/experiencePage/experience.js";
import Stock from "./pages/stockPage/stock.js";
// 将App组件插入root节点
ReactDOM.render(
  <Router>
    <Route exact path="/" component={App}></Route>
    <Route path="/frontend" component={FrontEnd}></Route>
    <Route path="/stock" component={Experience}></Route>
    <Route path="/experience" component={Stock}></Route>
    <Route path="/personalInfo" component={Stock}></Route>
    <Route path="/catalogue" component={Stock}></Route>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
