import React, {useState} from 'react';
import {idGenerator} from "../../utility/utils";
import {useDispatch} from "react-redux";
import {addVariant} from "../../redux/productsSlice";

const AddVariant = ({variNum,variStyle,prodId,addingVariToggleHandler}) => {

    const dispatch = useDispatch();
    const [variant,setVariant] = useState({description:"",price:0});

    const onChangeHandler = (e) => {
        const value = e.target.value;
        const state = {...variant, [e.target.name]: value};
        setVariant(state);
    };

    const saveVariHandler = () => {
        if(variant.description && variant.price > 0){
            let newVar = {
                id:idGenerator(5),
                description:variant.description,
                price:parseInt(variant.price),
                images:[]
            };
            dispatch(addVariant({prodId:prodId,newVar}));
            addingVariToggleHandler();
        }
    }

    return (
        <div style={variStyle}>
            <p><strong>Variant {variNum}</strong></p>
            <div>
                desc:<input onChange={onChangeHandler} name={"description"} type="text"/>
            </div>
            <div>
                price:<input onChange={onChangeHandler} name={"price"} type="number"/>
            </div>
            <button onClick={saveVariHandler}>Save</button>
        </div>
    );
};

export default AddVariant;