import {configureStore} from "@reduxjs/toolkit";
import {counterReducer} from "./counterReducer.js";
import {userReducer} from "./userReducer.js";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer
    }
});