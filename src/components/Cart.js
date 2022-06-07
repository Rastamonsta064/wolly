import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {removeItemFromCartByIndexAction} from "../redux/cartSlice";

const Cart = () => {

    const cart = useSelector(state=>state.cart);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const style = {
        cartItem:{
            backgroundColor:"lightGrey",
            padding:"10px",
            margin:"10px",
            borderRadius:"10px",
            width:"300px",
            height:"70px",
        }
    }

    //TODO
    const totalCart = () => {
        let res = 0;
        if(cart.length > 0){
            res = cart.reduce((total,item)=>{
                total = total+item.price;
                return total;
            },0);
        }
        return res;
    }

    const cartRender = () => {
        return(<ul>
            {cart.map((item,index)=>{
            return (<li style={style.cartItem} key={index}>
            <div>Item id:{item.id}</div>
                <div>{item.name}</div>
                <div>Price: ${item.price}</div>
            <button onClick={()=>dispatch(removeItemFromCartByIndexAction(index))}>X</button>
            </li>)})}
        </ul>
        )
    }

    return (
        <div style={{textAlign:"center"}}>
            <ul>
                {cartRender()}
            </ul>
            <div>Total: ${totalCart()}</div>
            <button onClick={()=> navigate(-1)} >GO BACK</button>
        </div>

    );
};

export default Cart;