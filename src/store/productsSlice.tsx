import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootStore } from './store';
import { Product } from '../types';

interface ProductsState {
  allProducts: Product[],
  productQuantities: { [key: number]: number };
  products: Product[];
  cartItems: Product[]
  loading: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: string | null;
}

const initialState: ProductsState = {
  allProducts: [],
  productQuantities: {},
  products: [],
  cartItems: [],
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
    filterProductsByLetter: (state, action) => {
      const searchQuery = action.payload.toLowerCase();
      state.products = state.allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery)
      );
    },
    filterProductsById: (state, action) => {
      const searchQuery = action.payload;
      state.products = state.allProducts.filter(product =>
        product.id == searchQuery
      );
    },
    addToCart: (state, action) => {
      const newItem = { ...action.payload };
      state.cartItems = [...state.cartItems, newItem];
      //state.productQuantities[newItem.id] = (state.productQuantities[newItem.id] || 0) + 1;
    },
    decreaseProduct: (state, action) => {
      const productId = action.payload;
      const productIndex = state.cartItems.findIndex(item => item.id === productId);
      if (productIndex !== -1) {
        const updatedCart = [...state.cartItems];
        updatedCart.splice(productIndex, 1);
        state.cartItems = updatedCart;
        //state.productQuantities[productId] = Math.max(0, (state.productQuantities[productId] || 1) - 1);
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const productIndex = state.cartItems.findIndex(item => item.id === productId);
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    }
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

export const { filterProductsByLetter, filterProductsById, addToCart, decreaseProduct, removeFromCart} = productsSlice.actions;
export default productsSlice.reducer;
export const selectProducts = (state: RootStore) => state.products.products;
export const selectCartProducts = (state: RootStore) => state.products.cartItems;
export const selectProductQuantities = (state: RootStore) => state.products.productQuantities;