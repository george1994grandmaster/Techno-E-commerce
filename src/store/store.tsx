import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productsReducer from './productsSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  products: productsReducer,
  // Add more reducers here if needed
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootStore = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);


/*import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './productsSlice'; 

export const Store = configureStore({
  reducer: {
    products: productsReducer, 
  },
});

export type RootStore = ReturnType<typeof Store.getState>;*/