import axios from 'axios';
import {BACKEND_PROTOCOL, BACKEND_ADDRESS, BACKEND_PORT} from "../constants/environment-variables";

export default axios.create({
    baseURL: `${BACKEND_PROTOCOL}://${BACKEND_ADDRESS}:${BACKEND_PORT}`,
    responseType: 'json',
    timeout: 4000
});