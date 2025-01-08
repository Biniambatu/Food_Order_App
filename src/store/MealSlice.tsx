import { createSlice } from "@reduxjs/toolkit";

const mealSlice = createSlice({
    name: "mealCart",
    initialState: {
        cartList: [],
        total: 0
    },
    reducers: {
        add_to_cart(state, action){
           const updatedCartList = state.cartList.concat(action.payload)
           const updatedTotal = state.total + action.payload.price
           return {...state, cartList : updatedCartList, total : updatedTotal}
        },
        remove_from_cart(state, action){

        }
    }
})

export const {add_to_cart, remove_from_cart} = mealSlice.actions
export const mealReducer = mealSlice.reducer


