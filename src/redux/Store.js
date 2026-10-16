
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";


const appStore = configureStore({
  reducer:{
    cartCounter: cartSlice
  }
})

export default appStore;