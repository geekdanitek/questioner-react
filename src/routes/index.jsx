import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import LandingPage from '../components/container/Landing';
import NotFound from '../components/container/NotFound';
import { LoginComponent } from '../components/container/Login';
import { SignupComponent } from '../components/container/Signup';
import { QuestionsComponent } from '../components/container/Questions';
import { QuestionComponent } from '../components/container/Question';
import { AskQuestionComponent } from '../components/container/AskQuestion';
import { MeetupsComponent } from '../components/container/Meetups';
import AuthWrapper from '../components/presentation/AuthWrapper';

const Routes = () => (
  <Router>
    <Switch>
      <Route path='/login' component={LoginComponent} exact />
      <Route path='/signup' component={SignupComponent} exact />
      <Route path='/home' component={LandingPage} exact />
      <Route
        path='/'
        component={() => <AuthWrapper><MeetupsComponent /></AuthWrapper>}
        exact
      />
      <Route
        path='/meetups/:meetupId/questions'
        component={() => <AuthWrapper><QuestionsComponent /></AuthWrapper>}
        exact
      />
      <Route
        path='/meetups/:meetupId/question/:questionId'
        component={() => <AuthWrapper><QuestionComponent /></AuthWrapper>}
        exact
      />
      <Route
        path='/meetups/:meetupId/askquestion'
        component={() => <AuthWrapper><AskQuestionComponent /></AuthWrapper>}
        exact
      />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
