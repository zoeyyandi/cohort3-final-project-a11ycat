import axios from 'axios';

export const apiService = axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST}:${
    process.env.REACT_APP_API_PORT
  }/api`,
  timeout: 1000
});
