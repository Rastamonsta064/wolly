import React, {useState} from 'react';
import NewProductForm from "./NewProductForm";
import {useSelector} from "react-redux";
import ProductInSellerOffice from "./ProductInSellerOffice";

const SellerOffice = () => {

    const style = {
        item: {
            border: "1px solid black",
            borderRadius: "10px",
            padding: "10px",
            margin: "10px",

        },
        itemsContainer: {
            display: "flex",
            flexDirection: "row"
        }
    }

    const [isAdding, setIsAdding] = useState(false);
    const sellerId = useSelector(state => state.user.id);
    const onSale = useSelector(state => state.products.filter(product => product.sellerId === sellerId));

    const listProducts = () => {
        if (onSale && onSale.length > 0) {
            return onSale.map((product, index) => {
                return (
                    <div style={style.item} key={index}>
                        <ProductInSellerOffice product={product} key={index + 1}/>
                    </div>)
            })
        }
    };


    return (
        <div>
            <button onClick={() => setIsAdding(prev => !prev)}>{isAdding ? "cancel" : "+"}</button>
            {isAdding && <NewProductForm setIsAdding={setIsAdding}/>}
            <h3>Your products on Sale</h3>
            <div style={style.itemsContainer}> {listProducts()}</div>
        </div>
    );
};

export default SellerOffice;