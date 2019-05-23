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
import Profile from '../components/container/Profile';
import Questions from '../components/container/Questions';

const Routes = () => (
  <Router>
    <Switch>
      <Route path='/login' component={Login} exact />
      <Route path='/signup' component={Signup} exact />
      <Route path='/home' component={LandingPage} exact />
      <Route path='/' component={Profile} exact />
      <Route path='/questions' component={Questions} exact />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
