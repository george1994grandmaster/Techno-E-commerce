import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootStore } from './store';
import { Product } from '../types';

interface ProductsState {
  allProducts: Product[],
  products: Product[];
  loading: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: string | null;
}

const initialState: ProductsState = {
  allProducts: [],
  products: [],
  loading: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await axios.get<{products: Product[]}>('/api/products.json');
    const allProducts = response.data.products;
    return allProducts;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterProductsByLetter: (state, action: PayloadAction<string>) => {
      const searchQuery = action.payload.toLowerCase();
      state.products = state.allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery)
      );
    },
    filterProductsById: (state, action) => {
      const searchQuery = action.payload;
      state.products = state.allProducts.filter(product =>
        product.id == searchQuery
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = 'fulfilled';
        state.allProducts = action.payload;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = 'rejected';
      });
  },
});

export const { filterProductsByLetter, filterProductsById} = productsSlice.actions;
export default productsSlice.reducer;
export const selectProducts = (state: RootStore) => state.products.products;