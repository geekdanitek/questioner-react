import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axiosInstance from '../../config/axiosConfig';

import {
  GET_QUESTION_BEGIN,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_FAILURE,
  ASK_QUESTION_BEGIN,
  ASK_QUESTION_SUCCESS,
  ASK_QUESTION_FAILURE
} from '../../action-types';

import {
  loadingQuestionHandler,
  questionSuccessHandler,
  questionFailureHandler,
  getQuestion,
  loadingAskQuestionHandler,
  askQuestionSuccessHandler,
  askQuestionFailureHandler,
  askQuestion
} from '../../actions';

describe('Question actions', () => {
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);

  test('should setup question loading handler', () => {
    expect(loadingQuestionHandler()).toEqual({
      type: GET_QUESTION_BEGIN
    });
  });
  test('should setup question success handler', () => {
    expect(questionSuccessHandler([{ question: 'tech' }])).toEqual({
      type: GET_QUESTION_SUCCESS,
      payload: [{ question: 'tech' }]
    });
  });
  test('should setup question success handler with no payload', () => {
    expect(questionSuccessHandler()).toEqual({
      type: GET_QUESTION_SUCCESS,
      payload: []
    });
  });
  test('should setup question failure handler', () => {
    expect(questionFailureHandler([{ error: 'fail' }])).toEqual({
      type: GET_QUESTION_FAILURE,
      payload: [{ error: 'fail' }]
    });
  });
  test('should setup question failure handler with no payload', () => {
    expect(questionFailureHandler()).toEqual({
      type: GET_QUESTION_FAILURE,
      payload: {}
    });
  });

  test('should get question', () => {
    const store = mockStore({ question: [] });
    axiosInstance.get = jest.fn().mockReturnValue(Promise.resolve({ data: { data: [{ question: 'Daniel' }] } }));
    const expectedActions = [GET_QUESTION_BEGIN, GET_QUESTION_SUCCESS];
    return store.dispatch(getQuestion())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions[0]);
        expect(store.getActions()[1].type).toEqual(expectedActions[1]);
      });
  });

  test('should not get question', () => {
    const store = mockStore({ question: [] });
    // eslint-disable-next-line prefer-promise-reject-errors
    axiosInstance.get = jest.fn().mockReturnValue(Promise.reject({ response: { data: [{ error: 'Fail' }] } }));
    const expectedActions = [GET_QUESTION_BEGIN, GET_QUESTION_FAILURE];
    return store.dispatch(getQuestion())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions[0]);
        expect(store.getActions()[1].type).toEqual(expectedActions[1]);
      });
  });

  test('should setup ask question loading handler', () => {
    expect(loadingAskQuestionHandler()).toEqual({
      type: ASK_QUESTION_BEGIN
    });
  });

  test('should setup ask question success handler', () => {
    expect(askQuestionSuccessHandler([{ question: 'tech' }])).toEqual({
      type: ASK_QUESTION_SUCCESS,
      payload: [{ question: 'tech' }]
    });
  });

  test('should setup ask question success handler with no payload', () => {
    expect(askQuestionSuccessHandler()).toEqual({
      type: ASK_QUESTION_SUCCESS,
      payload: []
    });
  });

  test('should setup ask question failure handler', () => {
    expect(askQuestionFailureHandler([{ error: 'fail' }])).toEqual({
      type: ASK_QUESTION_FAILURE,
      payload: [{ error: 'fail' }]
    });
  });
  test('should setup ask question failure handler with no payload', () => {
    expect(askQuestionFailureHandler()).toEqual({
      type: ASK_QUESTION_FAILURE,
      payload: {}
    });
  });

  test('should ask question', () => {
    const store = mockStore({ question: [] });
    axiosInstance.post = jest.fn().mockReturnValue(Promise.resolve({ data: { data: [{ question: 'Daniel' }] } }));
    const expectedActions = [ASK_QUESTION_BEGIN, ASK_QUESTION_SUCCESS];
    return store.dispatch(askQuestion())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions[0]);
        expect(store.getActions()[1].type).toEqual(expectedActions[1]);
      });
  });

  test('should not ask question', () => {
    const store = mockStore({ question: [] });
    // eslint-disable-next-line prefer-promise-reject-errors
    axiosInstance.post = jest.fn().mockReturnValue(Promise.reject({ response: { data: [{ error: 'Fail' }] } }));
    const expectedActions = [ASK_QUESTION_BEGIN, ASK_QUESTION_FAILURE];
    return store.dispatch(askQuestion())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions[0]);
        expect(store.getActions()[1].type).toEqual(expectedActions[1]);
      });
  });
});
