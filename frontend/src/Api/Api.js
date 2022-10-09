import axios from 'axios';

const USERS_API_BASE_URL = 'http://localhost:5000/users';
const usersAxios = axios.create({ baseURL: USERS_API_BASE_URL });

const api = {
  users: {
    async getAllUsers() {
      const { data } = await usersAxios.get();

      return data;
    },
    async getUserByEmailAndPassword(email, password) {
      const { data } = await usersAxios.get(`${email}/${password}`);

      return data;
    },
  },
};

export default api;
