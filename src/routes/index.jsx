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
import Question from '../components/container/Question';
import AskQuestion from '../components/container/AskQuestion';
import Meetups from '../components/container/Meetups';
import CreateMeetup from '../components/container/CreateMeetup';
import AuthWrapper from '../components/presentation/AuthWrapper';

const Routes = () => (
  <Router>
    <Switch>
      <Route path='/login' component={Login} exact />
      <Route path='/signup' component={Signup} exact />
      <Route path='/home' component={LandingPage} exact />
      <Route
        path='/'
        component={() => <AuthWrapper><Profile /></AuthWrapper>}
        exact
      />
      <Route
        path='/meetups'
        component={() => <AuthWrapper><Meetups /></AuthWrapper>}
        exact
      />
      <Route
        path='/meetup/create'
        component={() => <AuthWrapper><CreateMeetup /></AuthWrapper>}
        exact
      />
      <Route
        path='/meetups/:id/questions'
        component={() => <AuthWrapper><Questions /></AuthWrapper>}
        exact
      />
      <Route
        path='/meetups/:id/question/:id'
        component={() => <AuthWrapper><Question /></AuthWrapper>}
        exact
      />
      <Route
        path='/meetups/:id/askquestion'
        component={() => <AuthWrapper><AskQuestion /></AuthWrapper>}
        exact
      />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
