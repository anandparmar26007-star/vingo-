import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },

    logoutUser: (state) => {
      state.userData = null;
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;