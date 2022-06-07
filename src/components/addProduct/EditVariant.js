import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {editVariant} from "../../redux/productsSlice";

const EditVariant = ({vari, setIsEditing, i,prodId}) => {

    const dispatch = useDispatch();

    const [variant, setVariant] = useState(vari);

    const onChangeHandler = (e) => {
        const value = e.target.value;
        const state = {...variant, [e.target.name]: value};
        setVariant(state);
    };

    const saveEditedVariantHandler = () => {
        const newVariant = {
            description: variant.description,
            price: variant.price
        }
        dispatch(editVariant({prodId: prodId,varIndex: i, newVariant}));
        setIsEditing(false);
    }

    return (
        <div>
            desc:<input type="text" name={"description"} value={variant.description} onChange={onChangeHandler}/>
            price:<input type="number" name={"price"} value={variant.price} onChange={onChangeHandler}/>
            <button onClick={saveEditedVariantHandler}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
    );
};

export default EditVariant;