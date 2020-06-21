import axios from 'axios';

export const serverURL = 'http://localhost:4000';

const fetcher = axios.create({
    baseURL: serverURL,
    withCredentials: true
});

export default fetcher;