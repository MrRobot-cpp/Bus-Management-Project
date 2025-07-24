// api.js
import axios from 'axios';

const token = localStorage.getItem('authToken');


// Create an Axios instance
const api = axios.create({
  baseURL: 'http://localhost:3030/api', // Base URL for all API requests
  headers: {
    'Authorization': `Bearer ${token}`,
  },
});

export default api; // Export the Axios instance
