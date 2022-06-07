import {createSlice} from "@reduxjs/toolkit";
import {idGenerator} from "../utility/utils";

const initialState = {
    id:"",
    isAuthorised: false,
    name: "",
    email: "",
    password:"",
}
export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.id = idGenerator(4);
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.isAuthorised = true;
        },
        clearUser: (state) => {
            state.id = "";
            state.name = "";
            state.email = "";
            state.password = "";
            state.isAuthorised = false;
        }
    }
})

export const {setUser, clearUser} = userSlice.actions;
export default userSlice.reducer;