import { configureStore } from '@reduxjs/toolkit';
import { userSlice, cartSlice } from './Slices';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
