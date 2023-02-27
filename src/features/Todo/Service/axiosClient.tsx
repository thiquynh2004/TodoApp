import axios, { AxiosError } from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://638ecad19cbdb0dbe314db8c.mockapi.io/api/todo/',
  headers: {
    'Content-type': 'application/json'
  }
});
axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error: AxiosError<{ content: string }>) => {
    return error.response?.data?.content;
  }
);
export default axiosClient;
