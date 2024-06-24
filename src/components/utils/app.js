import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
    reducer: {
        plan: cartReducer,
    },
});

export default store;
