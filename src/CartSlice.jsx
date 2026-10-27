import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existing = state.find((product) => product.name === item.name);
      if (existing) existing.quantity += 1;
      else state.push({ ...item, cost: item.cost ?? item.price, quantity: 1 });
    },
    removeItem: (state, action) => state.filter((item) => item.name !== action.payload),
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.find((product) => product.name === name);
      if (item && quantity > 0) item.quantity = quantity;
    },
    clearCart: () => [],
  },
});
export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export const selectCartCount = (state) => state.cart.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotal = (state) => state.cart.reduce((total, item) => total + item.cost * item.quantity, 0);
export default cartSlice.reducer;
