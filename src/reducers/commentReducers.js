import {
  GET_COMMENTS_BEGIN,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
  CREATE_COMMENT_BEGIN,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE
} from '../action-types';

const initialState = {
  comments: [],
  commentError: {},
  isLoading: false,
  createComment: []
};

const commentReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS_BEGIN:
      return {
        ...initialState,
        comments: [],
        isLoading: true,
        commentError: {}
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...initialState,
        comments: action.payload,
        isLoading: false
      };
    case GET_COMMENTS_FAILURE:
      return {
        ...initialState,
        commentError: action.payload,
        isLoading: false
      };
    case CREATE_COMMENT_BEGIN:
      return {
        ...initialState,
        isLoading: true,
        commentError: {},
        createComment: []
      };
    case CREATE_COMMENT_SUCCESS:
      return {
        ...initialState,
        createComment: action.payload,
        isLoading: false
      };
    case CREATE_COMMENT_FAILURE:
      return {
        ...initialState,
        commentError: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export { commentReducers, initialState };
