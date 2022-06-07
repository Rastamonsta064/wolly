import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    "fetchPosts",
    async () => {
        console.log("starte fetching")
        return fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
            .then(response => response.json());
    }
);

const fetchedPostsSlice = createSlice({
    name: "posts",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            console.log(action.payload);
            let arr = action.payload;
            arr.forEach(post=>{
                state.push(post);
            })
        })
    }
});

export default fetchedPostsSlice.reducer