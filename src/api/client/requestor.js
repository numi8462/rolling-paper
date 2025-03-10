import axios from 'axios';
import { requestInterceptor } from './interceptors';

const requestor = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

requestor.interceptors.request.use(requestInterceptor);

export default requestor;
