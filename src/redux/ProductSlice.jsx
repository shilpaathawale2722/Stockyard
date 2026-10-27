import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";


const productSlice = createSlice({
  name: "ProductsFromSource",
  initialState: {
    productItems: products,
  },
  reducers: {
    
  },
});

// export const {allProducts} = productSlice.actions;
export default productSlice.reducer;