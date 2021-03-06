import { questionReducers, initialState } from '../../reducers/questionReducers';
import {
  GET_QUESTION_BEGIN,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_FAILURE,
  ASK_QUESTION_BEGIN,
  ASK_QUESTION_SUCCESS,
  ASK_QUESTION_FAILURE
} from '../../action-types';

describe('Question reducers', () => {
  test('should return initial state', () => {
    expect(questionReducers(undefined, {})).toEqual({
      ...initialState
    });
  });
  test('should handle GET_QUESTION_BEGIN action', () => {
    expect(questionReducers(initialState, {
      type: GET_QUESTION_BEGIN
    })).toEqual({
      ...initialState,
      question: [],
      isLoading: true,
      questionError: {}
    });
  });
  test('should handle GET_QUESTION_SUCCESS action', () => {
    expect(questionReducers(initialState, {
      type: GET_QUESTION_SUCCESS,
      payload: [{ question: 'hello' }]
    })).toEqual({
      ...initialState,
      isLoading: false,
      question: [{ question: 'hello' }]
    });
  });
  test('should handle GET_QUESTION_FAILURE action', () => {
    expect(questionReducers(initialState, {
      type: GET_QUESTION_FAILURE,
      payload: [{ error: 'fail' }]
    })).toEqual({
      ...initialState,
      questionError: [{ error: 'fail' }],
      isLoading: false
    });
  });
  test('should handle ASK_QUESTION_BEGIN action', () => {
    expect(questionReducers(initialState, {
      type: ASK_QUESTION_BEGIN
    })).toEqual({
      ...initialState,
      createQuestion: [],
      questionError: {},
      isLoading: true
    });
  });
  test('should handle ASK_QUESTION_SUCCESS action', () => {
    expect(questionReducers(initialState, {
      type: ASK_QUESTION_SUCCESS,
      payload: [{ question: 'hello' }]
    })).toEqual({
      ...initialState,
      createQuestion: [{ question: 'hello' }],
      isLoading: false
    });
  });
  test('should handle ASK_QUESTION_FAILURE action', () => {
    expect(questionReducers(initialState, {
      type: ASK_QUESTION_FAILURE,
      payload: [{ error: 'fail' }]
    })).toEqual({
      ...initialState,
      questionError: [{ error: 'fail' }],
      isLoading: false
    });
  });
});
