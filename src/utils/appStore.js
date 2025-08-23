
import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./userSlice";
import moviesReducer from './movieSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    movie: moviesReducer
  }
})