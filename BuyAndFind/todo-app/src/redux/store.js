import { configureStore } from "@reduxjs/toolkit";
import { userDetail } from "./slices/authSlice";
import productReducer from "./slices/todoSlice";

export const store = configureStore({
    reducer: {
        auth: userDetail,
        products: productReducer,
    }
})