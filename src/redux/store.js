import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../redux/counterSlice";
import galleryReducer from "../redux/gallerySlice";
import fetchReducer from "../redux/fetchSlice";
import productsReducer from "../redux/productsSlice";
import cartReducer from "../redux/cartSlice";
import userReducer from "../redux/userSlice";
import saleReducer from "../redux/sellerSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        gallery: galleryReducer,
        posts: fetchReducer,
        products: productsReducer,
        cart: cartReducer,
        user: userReducer,
        onsale: saleReducer
    },
})

const initState = {
    user: {
        isAuthorised: false,
        name: "Vasya Pupkin",
        type: "buyer", //seller,admin
        phone: "+123 456 789",
        email: "xxx@xxx.co.il",
    },
}