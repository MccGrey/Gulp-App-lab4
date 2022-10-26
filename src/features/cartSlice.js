import { createSlice, createSlice } from "@reduxjs/toolkit";


const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const createSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},

  addToCart(state, action) {
    state.cartItems.push(action.payload);
  },
});

export default { addToCart } = cartSlice.actions;

export default  cartSlice.reducer;
