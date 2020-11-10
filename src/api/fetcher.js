import axios from 'axios';

export const serverURL = 'http://localhost:4000';

// flusk server
// export const serverURL = 'http://127.0.0.1:4040/';

const fetcher = axios.create({
    baseURL: serverURL,
    withCredentials: true
});

export default fetcher;