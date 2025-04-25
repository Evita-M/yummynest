import { createAsyncThunk, createEntityAdapter, createSlice, EntityState } from "@reduxjs/toolkit"

interface Category {
  id: string;
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

// Create the adapter
const categoriesAdapter = createEntityAdapter<Category>()

type CategoriesState = EntityState<Category, string> & {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  errors: string[];
  data: Category[];
}

const initialState: CategoriesState = categoriesAdapter.getInitialState({
  status: 'idle',
  errors: [],
  data: []
})

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async (_, thunkAPI) => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    const data = await response.json()
    const categories = data.categories
      .filter((category: any) => !['13', '14'].includes(category.idCategory))
      .map((category: any) => ({
        ...category,
        id: category.idCategory
      }))
    return categories
  } catch (error) {
    return thunkAPI.rejectWithValue(error instanceof Error ? error.message : 'An error occurred')
  }
})

export const fetchCategory = createAsyncThunk('categories/fetchCategory', async (name: string, thunkAPI) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?c=${name}`)
    const data = await response.json()
    if (!data.categories || data.categories.length === 0) {
      throw new Error('Category not found')
    }
    return data.categories[0]
  } catch (error) {
    return thunkAPI.rejectWithValue(error instanceof Error ? error.message : 'An error occurred')
  }
})

export const categoriesSlice = createSlice({
  name:'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      categoriesAdapter.setAll(state, action.payload)
      state.status = 'succeeded'
      state.errors = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading'
        state.errors = []
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.errors = []
        categoriesAdapter.setAll(state, action.payload)
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed'
        state.errors = action.error.message ? [action.error.message] : ['An unknown error occurred']
      })
  }
})

// Create selectors
export const {
  selectAll: selectAllCategories,
  selectById: selectCategoryById,
  selectIds: selectCategoryIds,
  selectEntities: selectCategoryEntities,
  selectTotal: selectTotalCategories
} = categoriesAdapter.getSelectors()

export const { setCategories } = categoriesSlice.actions
export default categoriesSlice.reducer
