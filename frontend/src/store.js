import { configureStore } from '@reduxjs/toolkit';

// Agar aapke paas koi reducer ready hai to use yahan import karein, 
// jaise: import authReducer from './pages/authSlice';

export const store = configureStore({
  reducer: {
    // Abhi ke liye khali rakh sakte hain jab tak aap reducer na bana lein
    // user: authReducer, 
  },
});