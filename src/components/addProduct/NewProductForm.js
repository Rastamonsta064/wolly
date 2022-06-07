import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addProductForSale} from "../../redux/sellerSlice";
import {addProduct} from "../../redux/productsSlice";
import {idGenerator} from "../../utility/utils";

const NewProductForm = ({setIsAdding}) => {

    // {
    //     id: 778,
    //     name: "Snoop Dog Chain",
    //     type:"CHAIN",
    //     sellerId:334,
    //     variations:[
    //     {
    //         id:88888,
    //         description: "Gold Chain the original rapper item",
    //         price:5000,
    //         images:[],
    //     }
    // ]
    // }

    const dispatch = useDispatch();

    const sellerId = useSelector(state=>state.user.id);

    const initialProduct = {
        name: "",
        desc: "",
        price: 0,
        type: "CHAIN"
    }

    const [product, setProduct] = useState(initialProduct);


    const onChangeHandler = (e) => {
        const value = e.target.value;
        const state = {...product, [e.target.name]: value};
        setProduct(state);
    };



    const newProductCreator = (product) => {
        return ({
            id: idGenerator(3),
            name: product.name,
            type: product.type,
            sellerId: sellerId,
            variations: [
                {
                    id: idGenerator(5),
                    description: product.desc,
                    price: parseInt(product.price),
                    images: [],
                }
            ]
        })
    }

    const saveHandler = () => {
        if (product.name && product.desc && product.price > 0) {
            const newProd = newProductCreator(product);
            dispatch(addProductForSale(newProd));
            dispatch(addProduct(newProd));
            setProduct(initialProduct);
            setIsAdding(false);
        }
    }

    return (
        <div>
            <input type="text" name={"name"} placeholder="Product name" value={product.name}
                   onChange={onChangeHandler}/>
            <input type="text" name={"desc"} placeholder="Description" value={product.desc} onChange={onChangeHandler}/>
            <input type="number" name={"price"} placeholder="Price" value={product.price} onChange={onChangeHandler}/>
            <select name={"type"} value={product.type} onChange={onChangeHandler}>
                <option value="CHAIN">CHAIN</option>
                <option value="RING">RING</option>
            </select>
            <button onClick={saveHandler}>Save</button>
        </div>
    );
};

export default NewProductForm;