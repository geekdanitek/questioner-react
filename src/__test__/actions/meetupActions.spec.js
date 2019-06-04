import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axiosInstance from '../../config/axiosConfig';

import {
  GET_MEETUPS_BEGIN,
  GET_MEETUPS_SUCCESS,
  GET_MEETUPS_FAILURE,
  GET_MEETUP_BEGIN,
  GET_MEETUP_SUCCESS,
  GET_MEETUP_FAILURE
} from '../../action-types';

import {
  loadingMeetupsHandler,
  meetupsSuccessHandler,
  meetupsFailureHandler,
  getMeetups,
  loadingMeetupHandler,
  meetupSuccessHandler,
  meetupFailureHandler,
  getMeetup
} from '../../actions';

describe('Meetup actions', () => {
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);

  test('should setup loading meetups handler', () => {
    expect(loadingMeetupsHandler()).toEqual({
      type: GET_MEETUPS_BEGIN
    });
  });
  test('should setup meetups success handler', () => {
    expect(meetupsSuccessHandler([{ meetup: 'tech' }])).toEqual({
      type: GET_MEETUPS_SUCCESS,
      payload: [{ meetup: 'tech' }]
    });
  });
  test('should setup meetups success handler with no payload', () => {
    expect(meetupsSuccessHandler()).toEqual({
      type: GET_MEETUPS_SUCCESS,
      payload: []
    });
  });
  test('should setup meetups failure handler', () => {
    expect(meetupsFailureHandler([{ error: 'fail' }])).toEqual({
      type: GET_MEETUPS_FAILURE,
      payload: [{ error: 'fail' }]
    });
  });
  test('should setup meetups failure handler with no payload', () => {
    expect(meetupsFailureHandler()).toEqual({
      type: GET_MEETUPS_FAILURE,
      payload: {}
    });
  });

  test('should setup loading meetup handler', () => {
    expect(loadingMeetupHandler()).toEqual({
      type: GET_MEETUP_BEGIN
    });
  });
  test('should setup meetup success handler', () => {
    expect(meetupSuccessHandler([{ meetup: 'tech' }])).toEqual({
      type: GET_MEETUP_SUCCESS,
      payload: [{ meetup: 'tech' }]
    });
  });
  test('should setup meetup success handler with no payload', () => {
    expect(meetupSuccessHandler()).toEqual({
      type: GET_MEETUP_SUCCESS,
      payload: []
    });
  });
  test('should setup meetup failure handler', () => {
    expect(meetupFailureHandler([{ error: 'fail' }])).toEqual({
      type: GET_MEETUP_FAILURE,
      payload: [{ error: 'fail' }]
    });
  });
  test('should setup meetup failure handler with no payload', () => {
    expect(meetupFailureHandler()).toEqual({
      type: GET_MEETUP_FAILURE,
      payload: {}
    });
  });

  test('should get meetups', () => {
    const store = mockStore({ meetup: [] });
    axiosInstance.get = jest.fn().mockReturnValue(Promise.resolve({ data: { data: [{ meetup: 'Daniel' }] } }));
    const expectedActions = [GET_MEETUPS_BEGIN, GET_MEETUPS_SUCCESS];
    return store.dispatch(getMeetups())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions[0]);
        expect(store.getActions()[1].type).toEqual(expectedActions[1]);
      });
  });

  test('should not get meetups', () => {
    const store = mockStore({ meetup: [] });
    // eslint-disable-next-line prefer-promise-reject-errors
    axiosInstance.get = jest.fn().mockReturnValue(Promise.reject({ response: { data: [{ error: 'Fail' }] } }));
    const expectedActions = [GET_MEETUPS_BEGIN, GET_MEETUPS_FAILURE];
    return store.dispatch(getMeetups())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions[0]);
        expect(store.getActions()[1].type).toEqual(expectedActions[1]);
      });
  });
  test('should get meetup', () => {
    const store = mockStore({ meetup: [] });
    axiosInstance.get = jest.fn().mockReturnValue(Promise.resolve({ data: { data: [{ meetup: 'Daniel' }] } }));
    const expectedActions = [GET_MEETUP_BEGIN, GET_MEETUP_SUCCESS];
    return store.dispatch(getMeetup())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions[0]);
        expect(store.getActions()[1].type).toEqual(expectedActions[1]);
      });
  });
  test('should not meetups', () => {
    const store = mockStore({ comment: [] });
    // eslint-disable-next-line prefer-promise-reject-errors
    axiosInstance.get = jest.fn().mockReturnValue(Promise.reject({ response: { data: { error: 'Fail' } } }));
    const expectedActions = [GET_MEETUP_BEGIN, GET_MEETUP_FAILURE];
    return store.dispatch(getMeetup())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions[0]);
        expect(store.getActions()[1].type).toEqual(expectedActions[1]);
      });
  });
});
