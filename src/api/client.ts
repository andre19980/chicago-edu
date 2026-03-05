import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'X-App-Token': import.meta.env.VITE_API_TOKEN,
  }
});

export default api;