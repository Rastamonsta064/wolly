import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addItemtoCartAction:(state,action)=>{
            state.push(action.payload);
        },
        removeItemFromCartByIndexAction:(state,action)=>{
            state.splice(action.payload,1);
        }
    }
})

export const {addItemtoCartAction, removeItemFromCartByIndexAction} = cartSlice.actions;
export default cartSlice.reducer;