import { combineReducers } from 'redux';
import authReducers from './authReducers';

const Reducer = combineReducers({
  auth: authReducers
});

export default Reducer;
