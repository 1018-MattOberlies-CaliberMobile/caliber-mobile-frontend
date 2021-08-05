import axios from 'axios';

const BACKEND_URL = 'https://qm2m9ri1ua.execute-api.us-east-1.amazonaws.com/dev/api/v1/';

const BackendClient = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default BackendClient;
