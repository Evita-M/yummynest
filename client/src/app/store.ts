import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { categoriesSlice } from '../features/categories/categoriesSlice'
import { persistReducer, persistStore } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'
import { recipesApi } from '../features/recipes/recipes-api'

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
}

const persistedReducer = persistReducer(persistConfig, categoriesSlice.reducer)

const store = configureStore({
  reducer: {
    categories: persistedReducer,
    [recipesApi.reducerPath]: recipesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipesApi.middleware),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
