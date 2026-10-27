
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import productSlice from "./ProductSlice"


const appStore = configureStore({
  reducer:{
    cartCounter: cartSlice,
    productsData : productSlice,
  }
})

export default appStore;
