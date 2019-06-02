import { combineReducers } from 'redux';
import authReducers from './authReducers';
import meetupReducers from './meetupReducers';

const Reducer = combineReducers({
  auth: authReducers,
  meetup: meetupReducers
});

export default Reducer;
