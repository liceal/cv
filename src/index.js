import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import {HashRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import routers from './routers/routers'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

ReactDOM.render(
  <HashRouter>
    <Header />
    <Switch>
      {routers.map(v => (
        <Route key={v.path} path={v.path} exact={v.exact} component={v.component}/>
      ))}
    </Switch>
    <Footer />
  </HashRouter>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
