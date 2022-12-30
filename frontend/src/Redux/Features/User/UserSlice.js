import { createSlice } from '@reduxjs/toolkit';
import { initialUser, updateUserInLocalStorage } from './UserInLocalStorage';

const userSlice = createSlice({
  name: 'UserSlice',
  initialState: { user: initialUser },
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;

      state.user = user;
      updateUserInLocalStorage(state.user);
    },
    logout: (state, action) => {
      state.user = {};
      updateUserInLocalStorage(state.user);
    },
    addFavoriteProduct: (state, action) => {
      const product = action.payload;

      state.user.favoriteProducts.push(product);
      updateUserInLocalStorage(state.user);
    },
    removeFavoriteProduct: (state, action) => {
      const product = action.payload;

      const updatedFavoriteProducts = state.user.favoriteProducts.filter(
        (favoriteProduct) => favoriteProduct._id !== product._id
      );

      const updatedUser = {
        ...state.user,
        favoriteProducts: updatedFavoriteProducts,
      };

      state.user = updatedUser;
      updateUserInLocalStorage(state.user);
    },
  },
});

export const userActions = userSlice.actions;
export const userSelector = (state) => state.user.user;

export default userSlice;
