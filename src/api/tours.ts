import axios, { AxiosRequestHeaders } from 'axios';
import { useAuthorizationState } from '../store/authorization';


const DiamondAxios = axios.create();
const access_token = useAuthorizationState.getState().access_token;

DiamondAxios.interceptors.request.use(
  
  async config => {
    config.headers = {
      ...(config.headers as AxiosRequestHeaders),
      Accept: 'application/json',
      Authorization: `Bearer ${access_token}`,
    } as AxiosRequestHeaders;
    return config;
  },
  error => {
    Promise.reject(error);
  },
);
export default DiamondAxios;
