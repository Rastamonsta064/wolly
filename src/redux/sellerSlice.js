import {createSlice} from "@reduxjs/toolkit";

export const sellerSlice = createSlice({
    name:"onsale",
    initialState:[],
    reducers:{
        addProductForSale:(state,action)=>{
            state.push(action.payload);
        },
        removeProductByIdFromSale:(state,action)=>{
            state.filter(product => product.id !== action.payload);
        }
    }
})

export const {addProductForSale, removeProductByIdFromSale} = sellerSlice.actions;
export default sellerSlice.reducer;