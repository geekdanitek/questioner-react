import {
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../action-types';

const initialState = {
  isLoading: false,
  user: {},
  error: {}
};
const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_BEGIN:
      return {
        ...state,
        isLoading: true,
        user: {},
        error: {}
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: {},
        isLoading: false
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case LOGIN_BEGIN:
      return {
        ...state,
        user: {},
        error: {},
        isLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: {},
        isLoading: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default authReducers;
