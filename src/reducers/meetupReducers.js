import {
  GET_MEETUPS_BEGIN,
  GET_MEETUPS_SUCCESS,
  GET_MEETUPS_FAILURE,
  GET_MEETUP_BEGIN,
  GET_MEETUP_SUCCESS,
  GET_MEETUP_FAILURE
} from '../action-types';

const initialState = {
  meetupError: {},
  isLoading: false,
  meetups: [],
  meetup: []
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
    case GET_MEETUP_BEGIN:
      return {
        ...initialState,
        meetupError: {},
        isLoading: true,
        meetup: []
      };
    case GET_MEETUP_SUCCESS:
      return {
        ...initialState,
        meetup: action.payload,
        isLoading: false
      };
    case GET_MEETUP_FAILURE:
      return {
        ...initialState,
        meetupError: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
export { meetupReducers, initialState };
