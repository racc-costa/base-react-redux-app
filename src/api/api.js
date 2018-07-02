import axios from 'axios';

const api = axios.create({
    baseURL: 'http://www.mocky.io/v2/',
    timeout: 2000
});

api.interceptors.request.use((config) => {
    console.log('Request: ');
    console.log(config);
    return config;
}, function (error) {
    return Promise.reject(error);
});

api.interceptors.response.use((response) => {
    console.log('Response: ');
    console.log(response);
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default api;