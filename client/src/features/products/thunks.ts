import { createAsyncThunk } from "@reduxjs/toolkit"
import { Product } from "./model/product"

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
