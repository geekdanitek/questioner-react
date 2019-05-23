import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import LandingPage from '../components/container/Landing';
import NotFound from '../components/container/NotFound';
import Login from '../components/container/Login';
import Signup from '../components/container/Signup';

const Routes = () => (
  <Router>
    <Switch>
      <Route path='/login' component={Login} exact />
      <Route path='/signup' component={Signup} exact />
      <Route path='/' component={LandingPage} exact />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
