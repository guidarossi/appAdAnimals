import axios from 'axios';

const api = axios.create({
   baseURL: 'https://637297dd025414c637139c42.mockapi.io/api/v1',
});

export default api;
