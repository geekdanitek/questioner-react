import axios from '../config/axiosConfig';
import {
  GET_MEETUPS_BEGIN,
  GET_MEETUPS_SUCCESS,
  GET_MEETUPS_FAILURE
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

export {
  loadingMeetupsHandler,
  meetupsSuccessHandler,
  meetupsFailureHandler,
  getMeetups
};
