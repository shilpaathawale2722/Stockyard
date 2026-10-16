import { createSlice } from '@reduxjs/toolkit'
// import products from '../data/products'

const cartSlice = createSlice({
  name: 'cartCounter',

  initialState:{
  count : 0
  },

  reducers:{
    increment : (state) =>{      
      state.count += 1;
    }
  }
})

export const { increment } = cartSlice.actions;

export default cartSlice.reducer;