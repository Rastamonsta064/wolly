import {createSlice} from "@reduxjs/toolkit";

export const gallerySlice = createSlice({
    name: "gallery",
    initialState: [
        {name: "Name 1", id: 0},
        {name: "Name 2", id: 1}
    ],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
        removeItemByID: (state, action) => {
            state.splice(action.payload, 1);
        }
    }
})

export const {addItem,removeItemByID } = gallerySlice.actions;
export default gallerySlice.reducer;