import { RootState } from '@/app/store';
import { createSelector } from '@reduxjs/toolkit';
import { ProductsState } from './productsSlice';

export const selectProductsCount = (state: RootState) => state.products.count;

export const selectProductsByCategory = createSelector(
  [
    (state: RootState) => state.products,
    (_state: RootState, category: string | null) => category,
  ],
  (productsState: ProductsState, category) => {
    if (!category) {
      return productsState.allProducts;
    }
    return productsState.allProducts.filter(
      (item) =>
        item.category?.name &&
        item.category.name.toLowerCase() === category.toLowerCase()
    );
  }
);
