import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { categoriesSlice } from '@/features/categories/categoriesSlice'
import { recipesApi } from '@/features/recipes/recipesApi'
import { productsSlice } from '@/features/products/productsSlice'
import { cartSlice } from '@/features/cart/cartSlice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};



const rootReducer = combineReducers({
  categories: categoriesSlice.reducer,
  products: productsSlice.reducer,
  [recipesApi.reducerPath]: recipesApi.reducer,
  cart: cartSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipesApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const persistor = persistStore(store);

export { store, persistor }
