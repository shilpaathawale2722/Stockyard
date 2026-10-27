import { createSlice } from '@reduxjs/toolkit'
// import products from '../data/products'

const cartSlice = createSlice({
  name: "cartCounter",

  initialState: {
    count: 0,
    cartArray : JSON.parse(localStorage.getItem("cartProducts") || "[]"),
  },

  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    setCartArray : (state, action) =>{
      state.cartArray.push(action.payload);
    }
  },
});

export const { increment, setCartArray } = cartSlice.actions;

export default cartSlice.reducer;