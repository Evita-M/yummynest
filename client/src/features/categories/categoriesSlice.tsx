import {
  createEntityAdapter,
  createSlice,
  EntityState,
} from '@reduxjs/toolkit';
import { fetchCategories } from './thunks';
import { Category } from './model/category';

const categoriesAdapter = createEntityAdapter<Category>();

type CategoriesState = EntityState<Category, string> & {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  errors: string[];
  categories: Category[];
};

const initialState: CategoriesState = categoriesAdapter.getInitialState({
  status: 'idle',
  errors: [],
  categories: [],
});

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      categoriesAdapter.setAll(state, action.payload);
      state.status = 'succeeded';
      state.errors = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
        state.errors = [];
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.errors = [];
        categoriesAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.errors = action.error.message
          ? [action.error.message]
          : ['An unknown error occurred'];
      });
  },
});

// Create selectors
export const {
  selectAll: selectAllCategories,
  selectById: selectCategoryById,
  selectIds: selectCategoryIds,
  selectEntities: selectCategoryEntities,
  selectTotal: selectTotalCategories,
} = categoriesAdapter.getSelectors();

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
