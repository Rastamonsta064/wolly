import React, {useState} from 'react';
import EditVariant from "./EditVariant";
import {useDispatch} from "react-redux";
import {removeVariant} from "../../redux/productsSlice";

const VariantInSellerOffice = ({vari,i,prodVariationsLength,prodId}) => {

    const dispatch = useDispatch();

    const [isEditing,setIsEditing] = useState(false);

    const style={
        vari:{
            border:"1px solid black",
            padding:"10px",
            margin:"10px"
        }
    }

    const deleteHandler = () => {
            if(prodVariationsLength > 1){
               dispatch(removeVariant({victimIndex:i,prodId:prodId}));
            }
    }

    return (
        <div style={style.vari}>
            <p><strong>Variant {i+1}</strong></p>
            {isEditing && <EditVariant prodId={prodId} i={i} setIsEditing={setIsEditing} vari={vari} />}
            <p>id:{vari.id}</p>
            <p>desc:{vari.description}</p>
            <p>price:${vari.price}</p>
            <button onClick={()=>setIsEditing(true)}>Edit Variant</button>
            <button onClick={deleteHandler}>Delete Variant</button>
        </div>
    );
};

export default VariantInSellerOffice;