import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import Gallery from "./Gallery";
import Header from "./Header";
import Footer from "./Footer";
import Product from "./product/Product";
import Cart from "./Cart";
import Registration from "./Registration";
import SellerOffice from "./addProduct/SellerOffice";

const Main = () => {


    return (
        <div>
            <Router>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<HomePage />}/>
                    <Route path="/gallery" element={<Gallery />}/>
                    <Route path="/products/:id" element={<Product />}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/seller_office" element={<SellerOffice/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
};

export default Main;