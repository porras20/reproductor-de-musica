import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "../features/UserSlice";

export default configureStore({
    reducers: {
        user: userReducer,
    }
})