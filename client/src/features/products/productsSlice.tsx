import { createSlice } from '@reduxjs/toolkit';
import {
  fetchProductById,
  fetchProducts,
  fetchProductsByCategory,
} from './thunks';
import { Product } from './model/product';

interface ProductsState {
  allProducts: Product[];
  categoryProducts: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  product: Product | null;
  productStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  errors: string[];
}

const initialState: ProductsState = {
  allProducts: [],
  categoryProducts: [],
  status: 'idle',
  product: null,
  productStatus: 'idle',
  errors: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.errors = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.errors = [];
        state.allProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.errors = action.error.message
          ? [action.error.message]
          : ['An unknown error occurred'];
      })
      .addCase(fetchProductById.pending, (state) => {
        state.productStatus = 'loading';
        state.errors = [];
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.productStatus = 'succeeded';
        state.product = action.payload;
        state.errors = [];
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.productStatus = 'failed';
        state.errors = action.error.message
          ? [action.error.message]
          : ['An unknown error occurred'];
      })
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.status = 'loading';
        state.errors = [];
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.errors = [];
        state.categoryProducts = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.errors = action.error.message
          ? [action.error.message]
          : ['An unknown error occurred'];
      });
  },
});
export default productsSlice.reducer;
