import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootStore } from './store';
import { Product } from '../types';

interface ProductsState {
  products: Product[];
  loading: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await axios.get<Product[]>(
      'https://george1994grandmaster.github.io/techno-products'
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = 'fulfilled';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = 'rejected';
      });
  },
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
export const selectProducts = (state: RootStore) => state.products.products;