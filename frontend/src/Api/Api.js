import axios from 'axios';

const SERVER_URL = 'http://localhost:5000';
const axiosInstance = axios.create({ baseURL: SERVER_URL });

const api = {
  users: {
    async getAllUsers() {
      const { data } = await axiosInstance.get('/users/all');

      return data;
    },
    async loginUser(email, password) {
      const { data } = await axiosInstance.post('/users/login', {
        email,
        password,
      });

      return data;
    },
    async registerUser(user) {
      const { data } = await axiosInstance.post('/users/register', {
        user,
      });

      return data;
    },
  },
  products: {
    async getAllProducts() {
      const { data } = await axiosInstance.get('/products');

      return data;
    },
    async getProductsByCategories() {
      const { data } = await axiosInstance.get('/products/categories');

      return data;
    },
  },
  orders: {
    async addOrder(products, userId) {
      const { data } = await axiosInstance.post('/orders/add', {
        order: { products, user: userId },
      });

      return data;
    },
    async getOrdersByUser(userId) {
      const { data } = await axiosInstance.post('/orders/user', {
        userId,
      });

      return data;
    },
  },
};

export default api;
