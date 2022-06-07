import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {editProduct} from "../../redux/productsSlice";

const EditProduct = ({prodId,setIsEditingProduct}) => {

    const dispatch = useDispatch();

    const [product,setProduct] = useState({name:"",type:""});

    const onChangeHandler = (e) => {
        const value = e.target.value;
        const state = {...product, [e.target.name]: value};
        setProduct(state);
    };

    const saveHandler = () =>{
        if(product.name && product.type){
            const newProd = {
                name:product.name,
                type:product.type
            };
            dispatch(editProduct({prodId:prodId,newProd}));
            cancelHandler();
        }
    };

    const cancelHandler = () => {
        setIsEditingProduct(false);
    };

    return (
        <div>
            <input type="text" name={"name"} onChange={onChangeHandler}/>
            <select name={"type"} onChange={onChangeHandler}>
                <option value="CHAIN">CHAIN</option>
                <option value="RING">RING</option>
            </select>
            <button onClick={saveHandler}>Save</button>
            <button onClick={cancelHandler}>Cancel</button>
        </div>
    );
};

export default EditProduct;