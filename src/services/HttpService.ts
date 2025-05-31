import axios from 'axios';
import { LOCAL_STORAGE_KEYS } from '../utils/constants';

const TIMEOUT = 5000;
const BASE_URL = import.meta.env.VITE_API_URL;

const _axios = axios.create({
  timeout: TIMEOUT,
  baseURL: BASE_URL,
});

_axios.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);

    if (token) {
      config.headers['Authorization'] = `Token ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

const getAxiosClient = () => _axios;

const HttpService = {
  getAxiosClient,
  get: getAxiosClient().get,
  post: getAxiosClient().post,
  put: getAxiosClient().put,
  patch: getAxiosClient().patch,
  delete: getAxiosClient().delete,
};

export default HttpService;
