import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from './model/product';
import axiosInstance from '@/shared/api/axios-instance';

export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { rejectValue: string }
>('products/fetchProducts', async (_, thunkAPI) => {
  try {
    const { data } = await axiosInstance.get('/products');
    return data;
  } catch (err: unknown) {
    return thunkAPI.rejectWithValue(err as string);
  }
});

export const fetchProductById = createAsyncThunk<
  Product,
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
