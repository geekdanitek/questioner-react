import axios from '../config/axiosConfig';
import {
  GET_COMMENTS_BEGIN,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
  CREATE_COMMENT_BEGIN,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE
} from '../action-types';

const loadingCommentsHandler = () => ({
  type: GET_COMMENTS_BEGIN
});

const commentsSuccessHandler = (payload = []) => ({
  type: GET_COMMENTS_SUCCESS,
  payload
});

const commentsFailureHandler = (payload = {}) => ({
  type: GET_COMMENTS_FAILURE,
  payload
});

const getComments = id => async (dispatch) => {
  try {
    dispatch(loadingCommentsHandler());
    const response = await axios.get(`/comments/${id}`);
    return dispatch(commentsSuccessHandler(response.data.data));
  } catch (error) {
    return dispatch(commentsFailureHandler(error.response.data));
  }
};

const loadingCreateCommentHandler = () => ({
  type: CREATE_COMMENT_BEGIN
});

const createCommentSuccessHandler = (payload = []) => ({
  type: CREATE_COMMENT_SUCCESS,
  payload
});

const createCommentFailureHandler = (payload = {}) => ({
  type: CREATE_COMMENT_FAILURE,
  payload
});

const createComment = payload => async (dispatch) => {
  try {
    dispatch(loadingCreateCommentHandler());
    const response = await axios.post('/comments', payload);
    return dispatch(createCommentSuccessHandler(response.data.data));
  } catch (error) {
    return dispatch(createCommentFailureHandler(error.response.data));
  }
};

export {
  loadingCommentsHandler,
  commentsSuccessHandler,
  commentsFailureHandler,
  getComments,
  loadingCreateCommentHandler,
  createCommentSuccessHandler,
  createCommentFailureHandler,
  createComment
};
