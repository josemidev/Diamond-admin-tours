import axios from 'axios';
import { useAuthorizationState } from '../store/authorization';


const DiamondAxios = axios.create();
// const accessToken: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwic3ViIjoiNjZiNTNlYjUwNzViYzc4NzQzZDExOThlIiwicm9sZXMiOlsiYWRtaW4iXSwiaWF0IjoxNzI0NTUwNjQyLCJleHAiOjE3MjQ2MzcwNDJ9.4uOFMqkathaC4ngHFN6HKKIH4oYG6YG14k_4S491t5Q';


// const accessToken  = useAuthorizationState();
const useAccessToken = () => {
  const { access_token }: { access_token: string } = useAuthorizationState() as { access_token: string };
  
  return access_token;
}

DiamondAxios.interceptors.request.use(
  
  async config => {
    config.headers = {
      ...config.headers,
      Accept: 'application/json',
      Authorization: `Bearer ${useAccessToken()}`,
    };
    return config;
  },
  error => {
    Promise.reject(error);
  },
);
export default DiamondAxios;
