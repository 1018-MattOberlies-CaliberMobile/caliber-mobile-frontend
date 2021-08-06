import axios from 'axios';

const BACKEND_URL = 'https://k9ussq7588.execute-api.us-east-1.amazonaws.com/dev/api/v1/';

const BackendClient = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default BackendClient;
