import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import ownerReducer from "./ownerSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    owner: ownerReducer,
  },
});