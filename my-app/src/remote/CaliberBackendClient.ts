import axios from 'axios';

const BACKEND_URL = 'some-url.amazonaws.com/dev/v1';

const BackendClient = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default BackendClient;
