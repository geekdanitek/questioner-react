import axios from '../config/axiosConfig';
import {
  GET_QUESTION_BEGIN,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_FAILURE,
  ASK_QUESTION_BEGIN,
  ASK_QUESTION_SUCCESS,
  ASK_QUESTION_FAILURE
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

const loadingAskQuestionHandler = () => ({
  type: ASK_QUESTION_BEGIN
});

const askQuestionSuccessHandler = (payload = []) => ({
  type: ASK_QUESTION_SUCCESS,
  payload
});

const askQuestionFailureHandler = (payload = {}) => ({
  type: ASK_QUESTION_FAILURE,
  payload
});

const askQuestion = payload => async (dispatch) => {
  try {
    dispatch(loadingAskQuestionHandler());
    const response = await axios.post('/questions', payload);
    return dispatch(askQuestionSuccessHandler(response.data.data));
  } catch (error) {
    return dispatch(askQuestionFailureHandler(error.response.data));
  }
};

export {
  loadingQuestionHandler,
  questionSuccessHandler,
  questionFailureHandler,
  getQuestion,
  loadingAskQuestionHandler,
  askQuestionSuccessHandler,
  askQuestionFailureHandler,
  askQuestion
};
