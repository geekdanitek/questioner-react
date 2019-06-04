import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axiosInstance from '../../config/axiosConfig';

import {
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../../action-types';

import {
  loadingSignupHandler,
  signupSuccessHandler,
  signupFailureHandler,
  signup,
  loadingLoginHandler,
  loginSuccessHandler,
  loginFailureHandler,
  login
} from '../../actions';

describe('Auth action', () => {
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);

  test('should setup loading signup handler', () => {
    expect(loadingSignupHandler()).toEqual({
      type: SIGNUP_BEGIN
    });
  });
  test('should setup signup success handler', () => {
    expect(signupSuccessHandler([{ user: 'Daniel' }])).toEqual({
      type: SIGNUP_SUCCESS,
      payload: [{ user: 'Daniel' }]
    });
  });
  test('should setup signup success handler with no payload', () => {
    expect(signupSuccessHandler()).toEqual({
      type: SIGNUP_SUCCESS,
      payload: {}
    });
  });
  test('should setup signup failure handler', () => {
    expect(signupFailureHandler([{ error: 'fail' }])).toEqual({
      type: SIGNUP_FAILURE,
      payload: [{ error: 'fail' }]
    });
  });
  test('should setup signup failure handler with no payload', () => {
    expect(signupFailureHandler()).toEqual({
      type: SIGNUP_FAILURE,
      payload: {}
    });
  });
  test('should setup login loading handler', () => {
    expect(loadingLoginHandler()).toEqual({
      type: LOGIN_BEGIN
    });
  });
  test('should setup login success handler', () => {
    expect(loginSuccessHandler([{ user: 'Daniel' }])).toEqual({
      type: LOGIN_SUCCESS,
      payload: [{ user: 'Daniel' }]
    });
  });
  test('should setup login success handler with no payload', () => {
    expect(loginSuccessHandler()).toEqual({
      type: LOGIN_SUCCESS,
      payload: {}
    });
  });
  test('should setup login failure handler', () => {
    expect(loginFailureHandler([{ error: 'fail' }])).toEqual({
      type: LOGIN_FAILURE,
      payload: [{ error: 'fail' }]
    });
  });
  test('should setup login failure handler with no payload', () => {
    expect(loginFailureHandler()).toEqual({
      type: LOGIN_FAILURE,
      payload: {}
    });
  });
  test('should signup user', () => {
    const store = mockStore({ user: [] });
    axiosInstance.post = jest.fn().mockReturnValue(Promise.resolve({ data: { data: [{ user: 'Daniel' }] } }));
    const expectedActions = [SIGNUP_BEGIN, SIGNUP_SUCCESS];
    return store.dispatch(signup({ user: 'daniel' }))
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions[0]);
        expect(store.getActions()[1].type).toEqual(expectedActions[1]);
      });
  });
  test('should not signup user', () => {
    const store = mockStore({ user: [] });
    // eslint-disable-next-line prefer-promise-reject-errors
    axiosInstance.post = jest.fn().mockReturnValue(Promise.reject({ response: { data: [{ error: 'Fail' }] } }));
    const expectedActions = [SIGNUP_BEGIN, SIGNUP_FAILURE];
    return store.dispatch(signup())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions[0]);
        expect(store.getActions()[1].type).toEqual(expectedActions[1]);
      });
  });
  test('should login user', () => {
    const store = mockStore({ user: [] });
    axiosInstance.post = jest.fn().mockReturnValue(Promise.resolve({ data: { data: [{ user: 'Daniel' }] } }));
    const expectedActions = [LOGIN_BEGIN, LOGIN_SUCCESS];
    return store.dispatch(login({ user: 'daniel' }))
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions[0]);
        expect(store.getActions()[1].type).toEqual(expectedActions[1]);
      });
  });
  test('should not login user', () => {
    const store = mockStore({ user: [] });
    // eslint-disable-next-line prefer-promise-reject-errors
    axiosInstance.post = jest.fn().mockReturnValue(Promise.reject({ response: { data: [{ error: 'Fail' }] } }));
    const expectedActions = [LOGIN_BEGIN, LOGIN_FAILURE];
    return store.dispatch(login())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions[0]);
        expect(store.getActions()[1].type).toEqual(expectedActions[1]);
      });
  });
});
