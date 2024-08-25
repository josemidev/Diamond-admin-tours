import axios from 'axios';


const DiamondAxios = axios.create();
const accessToken: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwic3ViIjoiNjZiNTNlYjUwNzViYzc4NzQzZDExOThlIiwicm9sZXMiOlsiYWRtaW4iXSwiaWF0IjoxNzI0NTUwNjQyLCJleHAiOjE3MjQ2MzcwNDJ9.4uOFMqkathaC4ngHFN6HKKIH4oYG6YG14k_4S491t5Q';

DiamondAxios.interceptors.request.use(
  async config => {
    config.headers = {
      ...config.headers,
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

export default DiamondAxios;
