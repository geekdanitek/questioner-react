import {
  GET_MEETUPS_BEGIN,
  GET_MEETUPS_SUCCESS,
  GET_MEETUPS_FAILURE
} from '../action-types';

const initialState = {
  meetupError: {},
  isLoading: false,
  meetups: []
};

const meetupReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEETUPS_BEGIN:
      return {
        ...initialState,
        meetupError: {},
        meetups: [],
        isLoading: true
      };
    case GET_MEETUPS_SUCCESS:
      return {
        ...initialState,
        meetups: action.payload,
        isLoading: false
      };
    case GET_MEETUPS_FAILURE:
      return {
        ...initialState,
        meetupError: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
export default meetupReducers;
