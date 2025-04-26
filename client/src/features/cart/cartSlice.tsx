import {  createEntityAdapter, createSlice, EntityState } from "@reduxjs/toolkit"
import { RootState } from "../../app/store";

interface CartItem {
  id: string;
  name: string;
  price: number;
  offerPrice: number;
  quantity: number;
}

// Create the adapter
const cartAdapter = createEntityAdapter<CartItem>()

type CartState = EntityState<CartItem, string> & {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  errors: string[];
}

const initialState: CartState = cartAdapter.getInitialState({
  status: 'idle',
  errors: [],
})

export const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.entities[action.payload.id];
      if (existingItem) {
        cartAdapter.updateOne(state, {
          id: action.payload.id,
          changes: { quantity: existingItem.quantity + 1 }
        });
      } else {
        cartAdapter.addOne(state, { ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      cartAdapter.removeOne(state, action.payload)
    },
    updateQuantity: (state, action) => {
      cartAdapter.updateOne(state, action.payload)
    }
  },
})

// Selectors
export const {
  selectAll: selectAllCartItems,
  selectTotal: selectCartTotalItems,
} = cartAdapter.getSelectors((state: RootState) => state.cart);

export const selectCartItems = (state: RootState) => selectAllCartItems(state);

export const selectCartTotalPrice = (state: RootState) => {
  const items = selectAllCartItems(state);
  return items.reduce((total, item) => {
    const itemPrice = item.offerPrice !== undefined ? item.offerPrice : item.price;
    return total + itemPrice * item.quantity;
  }, 0);
};

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions
export default cartSlice.reducer
