import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://guarded-basin-92371.herokuapp.com/api/v1'
});

export default instance;
