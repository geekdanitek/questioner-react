import { meetupReducers, initialState } from '../../reducers/meetupReducers';
import {
  GET_MEETUPS_BEGIN,
  GET_MEETUPS_SUCCESS,
  GET_MEETUPS_FAILURE,
  GET_MEETUP_BEGIN,
  GET_MEETUP_SUCCESS,
  GET_MEETUP_FAILURE
} from '../../action-types';

describe('Meetup reducers', () => {
  test('should return initial state', () => {
    expect(meetupReducers(undefined, {})).toEqual({
      ...initialState
    });
  });
  test('should handle GET_MEETUPS_BEGIN action', () => {
    expect(meetupReducers(initialState, {
      type: GET_MEETUPS_BEGIN
    })).toEqual({
      ...initialState,
      meetupError: {},
      meetups: [],
      isLoading: true
    });
  });
  test('should handle GET_MEETUPS_SUCCESS action', () => {
    expect(meetupReducers(initialState, {
      type: GET_MEETUPS_SUCCESS,
      payload: [{ meetup: 'tech' }]
    })).toEqual({
      ...initialState,
      isLoading: false,
      meetups: [{ meetup: 'tech' }]
    });
  });
  test('should handle GET_MEETUPS_FAILURE action', () => {
    expect(meetupReducers(initialState, {
      type: GET_MEETUPS_FAILURE,
      payload: [{ error: 'fail' }]
    })).toEqual({
      ...initialState,
      meetupError: [{ error: 'fail' }],
      isLoading: false
    });
  });
  test('should handle GET_MEETUP_BEGIN action', () => {
    expect(meetupReducers(initialState, {
      type: GET_MEETUP_BEGIN,
    })).toEqual({
      ...initialState,
      meetupError: {},
      isLoading: true,
      meetup: []
    });
  });
  test('should handle GET_MEETUP_SUCCESS action', () => {
    expect(meetupReducers(initialState, {
      type: GET_MEETUP_SUCCESS,
      payload: [{ meetup: 'Daniel' }]
    })).toEqual({
      ...initialState,
      meetup: [{ meetup: 'Daniel' }],
      isLoading: false
    });
  });
  test('should handle GET_MEETUP_FAILURE action', () => {
    expect(meetupReducers(initialState, {
      type: GET_MEETUP_FAILURE,
      payload: [{ error: 'fail' }]
    })).toEqual({
      ...initialState,
      meetupError: [{ error: 'fail' }],
      isLoading: false
    });
  });
});
