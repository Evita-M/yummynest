import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from './model/product';
import axiosInstance from '@/shared/api/axios-instance';

interface ProductsResponse {
  data: Product[];
  count: number;
  message: string;
}

interface ProductResponse {
  data: Product;
  count: number;
  message: string;
}

export const fetchProducts = createAsyncThunk<
  ProductsResponse,
  void,
  { rejectValue: string }
>('products/fetchProducts', async (_, thunkAPI) => {
  try {
    const { data } = await axiosInstance.get('/products');
    console.log('data', data);
    return data;
  } catch (err: unknown) {
    return thunkAPI.rejectWithValue(err as string);
  }
});

export const fetchProductById = createAsyncThunk<
  ProductResponse,
  string,
  { rejectValue: string }
>('products/fetchProductById', async (id, thunkAPI) => {
  try {
    const { data } = await axiosInstance.get(`/products/${id}`);
    return data;
  } catch (err: unknown) {
    return thunkAPI.rejectWithValue(err as string);
  }
});
