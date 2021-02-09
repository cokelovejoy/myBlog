import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./pages/homePage/home.js";
import FrontEnd from "./pages/frontEndPage/frontend.js";
import Experience from "./pages/experiencePage/experience.js";
import Stock from "./pages/stockPage/stock.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/frontend" component={FrontEnd}></Route>
        <Route path="/stock" component={Experience}></Route>
        <Route path="/experience" component={Stock}></Route>
        {/* <Route path="/personalInfo" component={Stock}></Route> */}
        {/* <Route path="/catalogue" component={Stock}></Route> */}
      </Router>
    </div>
  );
}

export default App;
