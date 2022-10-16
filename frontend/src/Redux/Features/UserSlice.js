import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'UserSlice',
  initialState: {
    user: {},
  },
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;

      state.user = user;
    },
    logout: (state, action) => {
      state.user = {};
    },
    addFavoriteProduct: (state, action) => {
      const product = action.payload;

      state.user.favoriteProducts.push(product);
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
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
