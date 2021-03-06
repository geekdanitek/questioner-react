import axios from '../config/axiosConfig';
import {
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../action-types';
import { remove } from '../utils/Storage';

const loadingSignupHandler = () => ({
  type: SIGNUP_BEGIN
});

const signupSuccessHandler = (payload = {}) => ({
  type: SIGNUP_SUCCESS,
  payload
});

const signupFailureHandler = (payload = {}) => ({
  type: SIGNUP_FAILURE,
  payload
});

const loadingLoginHandler = () => ({
  type: LOGIN_BEGIN
});

const loginSuccessHandler = (payload = {}) => ({
  type: LOGIN_SUCCESS,
  payload
});

const loginFailureHandler = (payload = {}) => ({
  type: LOGIN_FAILURE,
  payload
});

const logoutSuccess = () => ({
  type: LOGOUT
});

const signup = payload => async (dispatch) => {
  try {
    dispatch(loadingSignupHandler());
    const response = await axios.post('/auth/signup', payload);
    localStorage.setItem('token', response.data.data[0].token);
    dispatch(signupSuccessHandler(response.data.data));
    return window.location.replace('/');
  } catch (error) {
    return dispatch(signupFailureHandler(error.response.data));
  }
};

const login = payload => async (dispatch) => {
  try {
    dispatch(loadingLoginHandler());
    const response = await axios.post('/auth/login', payload);
    localStorage.setItem('token', response.data.data[0].token);
    dispatch(loginSuccessHandler(response.data.data));
    return window.location.replace('/');
  } catch (error) {
    return dispatch(loginFailureHandler(error.response.data));
  }
};

const logout = () => async (dispatch) => {
  dispatch(logoutSuccess());
  remove('token');
  return window.location.replace('/');
};

export {
  loadingSignupHandler,
  signupSuccessHandler,
  signupFailureHandler,
  signup,
  loadingLoginHandler,
  loginSuccessHandler,
  loginFailureHandler,
  login,
  logoutSuccess,
  logout
};
