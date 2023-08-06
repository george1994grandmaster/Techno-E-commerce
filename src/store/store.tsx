import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productsReducer from './productsSlice';

const persistConfig = {
  key: 'root',
  storage, 
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  products: productsReducer,
}));

export const Store = configureStore({
  reducer: persistedReducer,
});

export type RootStore = ReturnType<typeof Store.getState>;
export const persistor = persistStore(Store);



/*import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './productsSlice'; 

export const Store = configureStore({
  reducer: {
    products: productsReducer, 
  },
});

export type RootStore = ReturnType<typeof Store.getState>;*/