import axios from 'axios';

const API_BASE_URL = 'https://grocery-store-1-fdge.onrender.com/api';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Products API
export const productsAPI = {
  // Get all products
  getAll: () => api.get('/products'),
  
  // Get products by category
  getByCategory: (category) => api.get(`/products?category=${category}`),
  
  // Get single product
  getById: (id) => api.get(`/products/${id}`),
};

// Orders API
export const ordersAPI = {
  // Create new order
  create: (orderData) => api.post('/orders', orderData),
  
  // Get user orders
  getUserOrders: () => api.get('/orders'),
  
  // Get single order
  getById: (id) => api.get(`/orders/${id}`),
};

// Auth API
export const authAPI = {
  // Login
  login: (credentials) => api.post('/auth/login', credentials),
  
  // Register
  register: (userData) => api.post('/auth/register', userData),
};

export default api;