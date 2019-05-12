import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import App from '../App';
import NotFound from '../components/container/NotFound';

const Routes = () => (
  <Router>
    <Switch>
      <Route path='/' component={App} exact />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
