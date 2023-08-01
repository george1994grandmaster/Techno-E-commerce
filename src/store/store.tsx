import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './productsSlice'; 

export const Store = configureStore({
  reducer: {
    products: productsReducer, 
  },
});

export type RootStore = ReturnType<typeof Store.getState>;