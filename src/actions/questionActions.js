import axios from '../config/axiosConfig';
import {
  GET_QUESTION_BEGIN,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_FAILURE,
} from '../action-types';

const loadingQuestionHandler = () => ({
  type: GET_QUESTION_BEGIN
});

const questionSuccessHandler = (payload = []) => ({
  type: GET_QUESTION_SUCCESS,
  payload
});

const questionFailureHandler = (payload = {}) => ({
  type: GET_QUESTION_FAILURE,
  payload
});

const getQuestion = id => async (dispatch) => {
  try {
    dispatch(loadingQuestionHandler());
    const response = await axios.get(`/questions/${id}`);
    return dispatch(questionSuccessHandler(response.data.data));
  } catch (error) {
    return dispatch(questionFailureHandler(error.response.data));
  }
};


export {
  loadingQuestionHandler,
  questionSuccessHandler,
  questionFailureHandler,
  getQuestion
};
