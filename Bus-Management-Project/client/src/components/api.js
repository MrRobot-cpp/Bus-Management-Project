// api.js
import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://localhost:3030/api', // Base URL for all API requests
  headers: {
    'Content-Type': 'application/json', // Default header for JSON requests
  },
});

export default api; // Export the Axios instance
