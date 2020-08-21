import axios from 'axios';

export default axios.create({
    baseURL: window.location.origin,
    responseType: 'json',
    timeout: 4000
});