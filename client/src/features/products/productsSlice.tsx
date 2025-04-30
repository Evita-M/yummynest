import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  offerPrice: number;
  description: string[];
  createdAt: string;
  updatedAt: string;
  inStock: boolean;
}

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

export const fetchProducts = createAsyncThunk<Product[], void, { rejectValue: string }>('products/fetchProducts', async (_, thunkAPI) => {
  try {
    const response = await fetch('http://localhost:5555/api/products')
    const data = await response.json()
    return data
  } catch {
    return thunkAPI.rejectWithValue('Failed to fetch products')
  }
})

export const fetchProductById = createAsyncThunk<Product, string, { rejectValue: string }>('products/fetchProductById', async (id, thunkAPI) => {
  try {
    const response = await fetch(`http://localhost:5555/api/products/${id}`)
    const data = await response.json()
    return data
  } catch {
    return thunkAPI.rejectWithValue('Failed to fetch product')
  }
})

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
