import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootStore } from './store';
import { Product } from '../types';
import { ProductsState } from '../types';

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
    filterProductsByLetter: (state, action: PayloadAction<string>) => {
      const searchQuery = action.payload.toLowerCase();
      state.products = state.allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery)
      );
    },
    filterProductsById: (state, action: PayloadAction<number>) => {
      const searchQuery = action.payload;
      state.products = state.allProducts.filter(product =>
        product.id == searchQuery
      );
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      const newItem = { ...action.payload }; 
      const existingItemIndex = state.cartItems.findIndex(item => item.id === newItem.id);
      if (existingItemIndex !== -1 ) {
        if(state.cartItems[existingItemIndex].quantity < 10){
          state.cartItems[existingItemIndex].quantity += 1;
          state.cartItems[existingItemIndex].totalPrice += state.cartItems[existingItemIndex].price;
        }
      } else {
          newItem.quantity = newItem.quantity || 1; 
          newItem.totalPrice = newItem.price * newItem.quantity; 
          state.cartItems = [ newItem, ...state.cartItems ];
          console.log(898)
        }
    },
    decreaseFromCart: (state, action: PayloadAction<number>) => {
      const newItemId = action.payload; 
      const existingItemIndex = state.cartItems.findIndex(item => item.id === newItemId);
      if (existingItemIndex !== -1 && state.cartItems[existingItemIndex].quantity > 1) {
        state.cartItems[existingItemIndex].quantity -= 1;
        state.cartItems[existingItemIndex].totalPrice -= state.cartItems[existingItemIndex].price;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
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

export const { filterProductsByLetter, filterProductsById, addToCart, decreaseFromCart, removeFromCart} = productsSlice.actions;
export default productsSlice.reducer;
export const selectProducts = (state: RootStore) => state.products.products;
export const selectCartProducts = (state: RootStore) => state.products.cartItems;
export const selectProductQuantities = (state: RootStore) => state.products.productQuantities;