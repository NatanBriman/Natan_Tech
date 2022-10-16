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
  },
});

export const userActions = userSlice.actions;

export default userSlice;
