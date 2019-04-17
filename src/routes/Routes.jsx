import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const history= createBrowserHistory({});
import Datepicker from '../components/datepicker/Datepicker';

const Routes= ()=> (
  <Router history= {history}>
    <Switch>
      <Route exact path="/" component= {Datepicker}></Route>
    </Switch>
  </Router>
);

export default Routes;