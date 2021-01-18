import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route } from 'react-router-dom'
import FrontEnd from './pages/frontend'
import Experience from './pages/experience'
import Stock from './pages/stock'
// 将App组件插入root节点 
ReactDOM.render(
  <HashRouter>
  {/* <Route path="/" component={App}></Route> */}
  <Route path="/frontend" component={FrontEnd}></Route>
  <Route path="/stock" component={Experience}></Route>
  <Route path="/experience" component={Stock}></Route>
</HashRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
