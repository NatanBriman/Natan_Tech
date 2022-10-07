import axios from 'axios';

const USERS_API_BASE_URL = 'http://localhost:5000/users';

const usersAPI = axios.create({ baseURL: USERS_API_BASE_URL });

const getAllUsers = async () => {
  const { data } = await usersAPI.get();

  return data;
};

const getUserByEmailAndPassword = async (email, password) => {
  const { data } = await usersAPI.get(`${email}/${password}`);

  return data;
};

const api = { getAllUsers, getUserByEmailAndPassword };

export default api;
