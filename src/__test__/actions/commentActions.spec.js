import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axiosInstance from '../../config/axiosConfig';

import {
  GET_COMMENTS_BEGIN,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
  CREATE_COMMENT_BEGIN,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE
} from '../../action-types';

import {
  loadingCommentsHandler,
  commentsSuccessHandler,
  commentsFailureHandler,
  getComments,
  loadingCreateCommentHandler,
  createCommentSuccessHandler,
  createCommentFailureHandler,
  createComment
} from '../../actions';

describe('Comment actions', () => {
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);

  test('should setup loading comments handler', () => {
    expect(loadingCommentsHandler()).toEqual({
      type: GET_COMMENTS_BEGIN
    });
  });
  test('should setup comments success handler', () => {
    expect(commentsSuccessHandler([{ comment: 'me' }])).toEqual({
      type: GET_COMMENTS_SUCCESS,
      payload: [{ comment: 'me' }]
    });
  });
  test('should setup comments success handler with no payload', () => {
    expect(commentsSuccessHandler()).toEqual({
      type: GET_COMMENTS_SUCCESS,
      payload: []
    });
  });
  test('should setup comments failure handler', () => {
    expect(commentsFailureHandler([{ error: 'fail' }])).toEqual({
      type: GET_COMMENTS_FAILURE,
      payload: [{ error: 'fail' }]
    });
  });
  test('should setup comments failure handler with no payload', () => {
    expect(commentsFailureHandler()).toEqual({
      type: GET_COMMENTS_FAILURE,
      payload: {}
    });
  });
  test('should setup create comment loading handler', () => {
    expect(loadingCreateCommentHandler()).toEqual({
      type: CREATE_COMMENT_BEGIN
    });
  });
  test('should setup create comment success handler', () => {
    expect(createCommentSuccessHandler([{ comment: 'me' }])).toEqual({
      type: CREATE_COMMENT_SUCCESS,
      payload: [{ comment: 'me' }]
    });
  });
  test('should setup create comment success handler with no payload', () => {
    expect(createCommentSuccessHandler()).toEqual({
      type: CREATE_COMMENT_SUCCESS,
      payload: []
    });
  });
  test('should setup create comment failure handler', () => {
    expect(createCommentFailureHandler([{ error: 'fail' }])).toEqual({
      type: CREATE_COMMENT_FAILURE,
      payload: [{ error: 'fail' }]
    });
  });
  test('should setup create comment failure handler with no payload', () => {
    expect(createCommentFailureHandler()).toEqual({
      type: CREATE_COMMENT_FAILURE,
      payload: {}
    });
  });

  test('should get comments', () => {
    const store = mockStore({ comments: [] });
    axiosInstance.get = jest.fn().mockReturnValue(Promise.resolve({ data: { data: [{ comment: 'Daniel' }] } }));
    const expectedActions = [GET_COMMENTS_BEGIN, GET_COMMENTS_SUCCESS];
    return store.dispatch(getComments())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions[0]);
        expect(store.getActions()[1].type).toEqual(expectedActions[1]);
      });
  });

  test('should not get comments', () => {
    const store = mockStore({ comments: [] });
    // eslint-disable-next-line prefer-promise-reject-errors
    axiosInstance.get = jest.fn().mockReturnValue(Promise.reject({ response: { data: [{ error: 'Fail' }] } }));
    const expectedActions = [GET_COMMENTS_BEGIN, GET_COMMENTS_FAILURE];
    return store.dispatch(getComments())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions[0]);
        expect(store.getActions()[1].type).toEqual(expectedActions[1]);
      });
  });
  test('should create comment', () => {
    const store = mockStore({ comment: [] });
    axiosInstance.post = jest.fn().mockReturnValue(Promise.resolve({ data: { data: [{ comment: 'Daniel' }] } }));
    const expectedActions = [CREATE_COMMENT_BEGIN, CREATE_COMMENT_SUCCESS];
    return store.dispatch(createComment())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions[0]);
        expect(store.getActions()[1].type).toEqual(expectedActions[1]);
      });
  });
  test('should not create comment', () => {
    const store = mockStore({ comment: [] });
    // eslint-disable-next-line prefer-promise-reject-errors
    axiosInstance.post = jest.fn().mockReturnValue(Promise.reject({ response: { data: { error: 'Fail' } } }));
    const expectedActions = [CREATE_COMMENT_BEGIN, CREATE_COMMENT_FAILURE];
    return store.dispatch(createComment())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions[0]);
        expect(store.getActions()[1].type).toEqual(expectedActions[1]);
      });
  });
});
