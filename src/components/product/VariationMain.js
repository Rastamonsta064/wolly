import React from 'react';
import {useDispatch} from "react-redux";
import {addItemtoCartAction} from "../../redux/cartSlice";

const VariationMain = ({variation,productName}) => {

  const dispatch = useDispatch();

  const addToCartHandler = () => {
      const newCartItem = {
          id:variation.id,
          price:variation.price,
          name:productName
      };
      dispatch(addItemtoCartAction(newCartItem));
  }

    return (
        <div>
            <div>{productName}</div>
            <div>{variation.description}</div>
            <div>Price:${variation.price}</div>
            <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
    );
};

export default VariationMain;