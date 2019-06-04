import { authReducers, initialState } from '../../reducers/authReducers';
import {
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../../action-types';

describe('Auth reducers', () => {
  test('should return initial state', () => {
    expect(authReducers(undefined, {})).toEqual({
      ...initialState
    });
  });
  test('should handle SIGNUP_BEGIN action', () => {
    expect(authReducers(initialState, {
      type: SIGNUP_BEGIN
    })).toEqual({
      ...initialState,
      isLoading: true,
      user: {},
      error: {}
    });
  });
  test('should handle SIGNUP_SUCCESS action', () => {
    expect(authReducers(initialState, {
      type: SIGNUP_SUCCESS,
      payload: [{ user: 'Daniel' }]
    })).toEqual({
      ...initialState,
      isLoading: false,
      user: [{ user: 'Daniel' }],
      error: {}
    });
  });
  test('should handle SIGNUP_FAILURE action', () => {
    expect(authReducers(initialState, {
      type: SIGNUP_FAILURE,
      payload: [{ error: 'fail' }]
    })).toEqual({
      ...initialState,
      isLoading: false,
      error: [{ error: 'fail' }]
    });
  });
  test('should handle LOGIN_BEGIN action', () => {
    expect(authReducers(initialState, {
      type: LOGIN_BEGIN,
    })).toEqual({
      ...initialState,
      user: {},
      error: {},
      isLoading: true
    });
  });
  test('should handle LOGIN_SUCCESS action', () => {
    expect(authReducers(initialState, {
      type: LOGIN_SUCCESS,
      payload: [{ user: 'Daniel' }]
    })).toEqual({
      ...initialState,
      user: [{ user: 'Daniel' }],
      error: {},
      isLoading: false
    });
  });
  test('should handle LOGIN_FAILURE action', () => {
    expect(authReducers(initialState, {
      type: LOGIN_FAILURE,
      payload: [{ error: 'fail' }]
    })).toEqual({
      ...initialState,
      error: [{ error: 'fail' }],
      isLoading: false
    });
  });
  test('should handle LOGOUT action', () => {
    expect(authReducers(initialState, {
      type: LOGOUT,
    })).toEqual({
      ...initialState,
      user: {},
      isLoading: false
    });
  });
});
