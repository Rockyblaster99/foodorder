import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./shopping-cart/CartSlice";
import cartUISlice from "./shopping-cart/cartUISlice";

const store = configureStore({
    reducer:{
        cart:CartSlice.reducer,
        cartUI:cartUISlice.reducer
    }
})
export default store
