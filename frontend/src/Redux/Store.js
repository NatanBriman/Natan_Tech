import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'UserSlice',
  initialState: {
    user: {},
  },
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;
      console.log(user);
      state.user = user;
    },
  },
});

export const userActions = userSlice.actions;

const store = configureStore({
  reducer: userSlice.reducer,
});

export default store;
