import axios from 'axios';

const SERVER_URL = 'http://localhost:5000';
const axiosInstance = axios.create({ baseURL: SERVER_URL });

const api = {
  users: {
    async getAllUsers() {
      const { data } = await axiosInstance.get('/users/all');

      return data;
    },
    async loginUser(username, password) {
      const { data } = await axiosInstance.post('/users/login', {
        username,
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
    async toggleFavoriteProduct(userId, productId) {
      const { data } = await axiosInstance.post('/users/favorite/change', {
        userId,
        productId,
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
    async addProduct(product) {
      const { data } = await axiosInstance.post('/products/add', { product });

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
  categories: {
    async getAllCategories() {
      const { data } = await axiosInstance.get('/categories/all');

      return data;
    },
  },
  manufacturers: {
    async getAllManufacturers() {
      const { data } = await axiosInstance.get('/manufacturers/all');

      return data;
    },
  },
};

export default api;
