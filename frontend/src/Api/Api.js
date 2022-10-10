import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';
const axiosInstance = axios.create({ baseURL: API_BASE_URL });

const api = {
  users: {
    async getAllUsers() {
      const { data } = await axiosInstance.get('/users/all');

      return data;
    },
    async getUserByEmailAndPassword(email, password) {
      const { data } = await axiosInstance.post('/users', { email, password });

      return data;
    },
  },
  products: {
    async getAllProducts() {
      const { data } = await axiosInstance.get('/products');

      return data;
    },
  },
};

export default api;
