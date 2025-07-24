// apiService.js
import api from './api';

// Helper function to handle API requests
const apiRequest = async (method, url, data = null) => {
  try {
    const response = await api({
      method,
      url,
      data,
    });
    return response.data; // Return the response data
  } catch (error) {
    console.error(`Error in ${method} request to ${url}:`, error.response?.data || error.message);
    throw error;
  }
};

// General CRUD functions
export const get = (url) => apiRequest('get', url);
export const post = (url, data) => apiRequest('post', url, data);
export const put = (url, data) => apiRequest('put', url, data);
export const del = (url) => apiRequest('delete', url);

// Specific functions for Students
export const getStudents = () => get('/students');
export const getStudentById = (id) => get(`/students/${id}`);
export const createStudent = (data) => post('/students', data);
export const updateStudent = (id, data) => put(`/students/${id}`, data);
export const deleteStudent = (id) => del(`/students/${id}`);

// Specific functions for Drivers
export const getDrivers = () => get('/drivers');
export const getDriverById = (id) => get(`/drivers/${id}`);
export const createDriver = (data) => post('/drivers', data);
export const updateDriver = (id, data) => put(`/drivers/${id}`, data);
export const deleteDriver = (id) => del(`/drivers/${id}`);

// Specific functions for Admins
export const getAdmins = () => get('/admins');
export const getAdminById = (id) => get(`/admins/${id}`);
export const createAdmin = (data) => post('/admins', data);
export const updateAdmin = (id, data) => put(`/admins/${id}`, data);
export const deleteAdmin = (id) => del(`/admins/${id}`);

// Specific functions for Trips
export const getTrips = () => get('/trips');
export const getTripById = (id) => get(`/trips/${id}`);
export const createTrip = (data) => post('/trips', data);
export const updateTrip = (id, data) => put(`/trips/${id}`, data);
export const deleteTrip = (id) => del(`/trips/${id}`);
