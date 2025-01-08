import { configureStore } from "@reduxjs/toolkit";
import { mealReducer } from "./MealSlice";

export const store = configureStore({
    reducer:{
        mealReducer : mealReducer
    }
})