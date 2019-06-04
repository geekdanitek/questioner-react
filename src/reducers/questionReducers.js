import {
  GET_QUESTION_BEGIN,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_FAILURE,
  ASK_QUESTION_BEGIN,
  ASK_QUESTION_SUCCESS,
  ASK_QUESTION_FAILURE
} from '../action-types';

const initialState = {
  question: [],
  questionError: {},
  isLoading: false,
  createQuestion: []
};

const questionReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTION_BEGIN:
      return {
        ...initialState,
        question: [],
        isLoading: true,
        questionError: {}
      };
    case GET_QUESTION_SUCCESS:
      return {
        ...initialState,
        question: action.payload,
        isLoading: false
      };
    case GET_QUESTION_FAILURE:
      return {
        ...initialState,
        questionError: action.payload,
        isLoading: false
      };
    case ASK_QUESTION_BEGIN:
      return {
        ...initialState,
        createQuestion: [],
        questionError: {},
        isLoading: true
      };
    case ASK_QUESTION_SUCCESS:
      return {
        ...initialState,
        createQuestion: action.payload,
        isLoading: false
      };
    case ASK_QUESTION_FAILURE:
      return {
        ...initialState,
        questionError: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export { questionReducers, initialState };
