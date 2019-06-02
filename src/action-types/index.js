import authActionTypes from './authActionTypes';
import meetActionTypes from './meetupActionTypes';

const {
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} = authActionTypes;

const {
  GET_MEETUPS_BEGIN,
  GET_MEETUPS_SUCCESS,
  GET_MEETUPS_FAILURE
} = meetActionTypes;

export {
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_MEETUPS_BEGIN,
  GET_MEETUPS_SUCCESS,
  GET_MEETUPS_FAILURE
};
