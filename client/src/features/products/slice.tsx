import { createSlice } from '@reduxjs/toolkit';
import { fetchProductById, fetchProducts } from './thunks';
import { Product } from './model/product';

export interface ProductsState {
  count: number;
  allProducts: Product[];
  filteredProducts: Product[];
  product: Product | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  productStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  errors: string[];
}

const initialState: ProductsState = {
  count: 0,
  allProducts: [],
  filteredProducts: [],
  product: null,
  status: 'idle',
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
        state.allProducts = action.payload.data;
        state.count = action.payload.count;
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
        state.product = action.payload.data;
        state.errors = [];
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.productStatus = 'failed';
        state.errors = action.error.message
          ? [action.error.message]
          : ['An unknown error occurred'];
      });
  },
});

export default productsSlice.reducer;
