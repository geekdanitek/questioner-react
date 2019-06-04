import axios from '../config/axiosConfig';
import {
  GET_MEETUPS_BEGIN,
  GET_MEETUPS_SUCCESS,
  GET_MEETUPS_FAILURE,
  GET_MEETUP_BEGIN,
  GET_MEETUP_SUCCESS,
  GET_MEETUP_FAILURE,
} from '../action-types';

const loadingMeetupsHandler = () => ({
  type: GET_MEETUPS_BEGIN
});

const meetupsSuccessHandler = (payload = []) => ({
  type: GET_MEETUPS_SUCCESS,
  payload
});

const meetupsFailureHandler = (payload = {}) => ({
  type: GET_MEETUPS_FAILURE,
  payload
});

const getMeetups = () => async (dispatch) => {
  try {
    dispatch(loadingMeetupsHandler());
    const response = await axios.get('/meetups');
    return dispatch(meetupsSuccessHandler(response.data.data));
  } catch (error) {
    return dispatch(meetupsFailureHandler(error.response.data));
  }
};

const loadingMeetupHandler = () => ({
  type: GET_MEETUP_BEGIN
});

const meetupSuccessHandler = (payload = []) => ({
  type: GET_MEETUP_SUCCESS,
  payload
});

const meetupFailureHandler = (payload = {}) => ({
  type: GET_MEETUP_FAILURE,
  payload
});

const getMeetup = id => async (dispatch) => {
  try {
    dispatch(loadingMeetupHandler());
    const response = await axios.get(`/meetups/${id}`);
    return dispatch(meetupSuccessHandler(response.data.data));
  } catch (error) {
    return dispatch(meetupFailureHandler(error.response.data));
  }
};

export {
  loadingMeetupsHandler,
  meetupsSuccessHandler,
  meetupsFailureHandler,
  getMeetups,
  loadingMeetupHandler,
  meetupSuccessHandler,
  meetupFailureHandler,
  getMeetup
};
