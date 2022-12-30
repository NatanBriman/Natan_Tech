import { LOCAL_STORAGE_KEYS } from '../../../Helpers/Constants';
import { filterByNotId, getExtendedArray } from '../../../Helpers/Helpers';

const CONNECTED_USER_KEY = LOCAL_STORAGE_KEYS.connectedUser;
const USERS_KEY = LOCAL_STORAGE_KEYS.users;

export const userInLocalStorage = JSON.parse(localStorage.getItem(CONNECTED_USER_KEY));

if (!userInLocalStorage) localStorage.setItem(CONNECTED_USER_KEY, JSON.stringify({}));

export const initialUser = userInLocalStorage || {};

export const updateUserInLocalStorage = (user) =>
  localStorage.setItem(CONNECTED_USER_KEY, JSON.stringify(user));

export const updateUserInAllUsersInLocalStorage = (userToUpdate) => {
  const allUsers = JSON.parse(localStorage.getItem(USERS_KEY));

  const usersWithoutUserToUpdate = filterByNotId(allUsers, userToUpdate.id);
  const updatedUsers = getExtendedArray(usersWithoutUserToUpdate, userToUpdate);

  localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));
};
