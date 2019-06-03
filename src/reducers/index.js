import { combineReducers } from 'redux';
import authReducers from './authReducers';
import meetupReducers from './meetupReducers';
import questionReducers from './questionReducers';
import commentReducers from './commentReducers';

const Reducer = combineReducers({
  auth: authReducers,
  meetup: meetupReducers,
  question: questionReducers,
  comment: commentReducers
});

export default Reducer;
