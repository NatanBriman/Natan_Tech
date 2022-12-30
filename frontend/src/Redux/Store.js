import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './Features/CartSlice';
import userSlice from './Features/User/UserSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
