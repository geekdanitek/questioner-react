import axios from '../config/axiosConfig';

import { SIGNUP_BEGIN, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../action-types';

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

const signup = payload => async (dispatch) => {
  try {
    dispatch(loadingSignupHandler());
    const response = await axios.post('/auth/signup', payload);
    dispatch(signupSuccessHandler(response.data.data));
    return window.location.replace('/');
  } catch (error) {
    return dispatch(signupFailureHandler(error.response.data));
  }
};

export {
  loadingSignupHandler,
  signupSuccessHandler,
  signupFailureHandler,
  signup
};
