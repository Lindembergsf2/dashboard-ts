import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backoffice-data-jekl.vercel.app/',
});

export default api;