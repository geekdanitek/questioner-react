import axios from 'axios';
import { get } from '../utils/Storage';

const instance = axios.create({
  baseURL: 'https://guarded-basin-92371.herokuapp.com/api/v1'
});

const token = get('token');
if (token) {
  instance.defaults.headers.common['x-access-token'] = token;
}

export default instance;
