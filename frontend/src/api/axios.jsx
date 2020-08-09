import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080',
    responseType: 'json',
    timeout: 4000
});