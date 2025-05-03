import {  createSlice } from "@reduxjs/toolkit";
import { fetchProductById, fetchProducts } from "./thunks";
import { Product } from "./model/product";


interface ProductsState {
  products: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  errors: string[];
}

const initialState: ProductsState = {
  products: [],
  status: 'idle',
  errors: []
}


export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
        state.errors = []
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.errors = []
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.errors = action.error.message ? [action.error.message] : ['An unknown error occurred']
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = 'loading'
        state.errors = []
      })
      .addCase(fetchProductById.fulfilled, (state) => {
        state.status = 'succeeded'
        state.errors = []
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed'
        state.errors = action.error.message ? [action.error.message] : ['An unknown error occurred']
      })
  }
});
export default productsSlice.reducer;
