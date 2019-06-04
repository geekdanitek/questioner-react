import { commentReducers, initialState } from '../../reducers/commentReducers';
import {
  GET_COMMENTS_BEGIN,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
  CREATE_COMMENT_BEGIN,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE
} from '../../action-types';

describe('Comment reducers', () => {
  test('should return initial state', () => {
    expect(commentReducers(undefined, {})).toEqual({
      ...initialState
    });
  });
  test('should handle GET_COMMENTS_BEGIN action', () => {
    expect(commentReducers(initialState, {
      type: GET_COMMENTS_BEGIN
    })).toEqual({
      ...initialState,
      comments: [],
      isLoading: true,
      commentError: {}
    });
  });
  test('should handle GET_COMMENTS_SUCCESS action', () => {
    expect(commentReducers(initialState, {
      type: GET_COMMENTS_SUCCESS,
      payload: [{ comment: 'Daniel' }]
    })).toEqual({
      ...initialState,
      isLoading: false,
      comments: [{ comment: 'Daniel' }]
    });
  });
  test('should handle GET_COMMENTS_FAILURE action', () => {
    expect(commentReducers(initialState, {
      type: GET_COMMENTS_FAILURE,
      payload: [{ error: 'fail' }]
    })).toEqual({
      ...initialState,
      commentError: [{ error: 'fail' }],
      isLoading: false
    });
  });
  test('should handle CREATE_COMMENT_BEGIN action', () => {
    expect(commentReducers(initialState, {
      type: CREATE_COMMENT_BEGIN,
    })).toEqual({
      ...initialState,
      isLoading: true,
      commentError: {}
    });
  });
  test('should handle CREATE_COMMENT_SUCCESS action', () => {
    expect(commentReducers(initialState, {
      type: CREATE_COMMENT_SUCCESS,
      payload: [{ comment: 'Daniel' }]
    })).toEqual({
      ...initialState,
      createComment: [{ comment: 'Daniel' }],
      isLoading: false
    });
  });
  test('should handle CREATE_COMMENT_FAILURE action', () => {
    expect(commentReducers(initialState, {
      type: CREATE_COMMENT_FAILURE,
      payload: [{ error: 'fail' }]
    })).toEqual({
      ...initialState,
      commentError: [{ error: 'fail' }],
      isLoading: false
    });
  });
});
