import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/categories.php'
      );
      const data = await response.json();
      const categories = data.categories
        .filter((category: any) => !['13', '14'].includes(category.idCategory))
        .map((category: any) => ({
          ...category,
          id: category.idCategory,
        }));
      return categories;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : 'An error occurred'
      );
    }
  }
);

export const fetchCategory = createAsyncThunk(
  'categories/fetchCategory',
  async (name: string, thunkAPI) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?c=${name}`
      );
      const data = await response.json();
      if (!data.categories || data.categories.length === 0) {
        throw new Error('Category not found');
      }
      return data.categories[0];
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : 'An error occurred'
      );
    }
  }
);
