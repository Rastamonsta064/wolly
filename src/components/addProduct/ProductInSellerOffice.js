import React, {useState} from 'react';
import AddVariant from "./AddVariant";
import {useDispatch} from "react-redux";
import {removeProduct} from "../../redux/productsSlice";
import EditProduct from "./EditProduct";
import VariantInSellerOffice from "./VariantInSellerOffice";

const ProductInSellerOffice = ({product}) => {

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

    const [isAddingVari,setIsAddingVari] = useState(false);
    const [isEditingProduct,setIsEditingProduct] = useState(false);


    const addingVariToggleHandler = ()=>setIsAddingVari(prev=>!prev);

const style={
    vari:{
        border:"1px solid black",
        padding:"10px",
        margin:"10px"

    }
}

    const variationsRender = (product) => {
        if(product && product.variations.length > 0){
            return product.variations.map((vari,i)=>{
                return (<VariantInSellerOffice prodId={product.id} prodVariationsLength={product.variations.length} vari={vari} key={vari.id} i={i}/>)

            })
        }
    };

const EditProductClickHandler = () => {
    setIsEditingProduct(true);
}

    return (
        <div>
            <p>{product.name} (sellerID:{product.sellerId}) type:{product.type}</p>
            {isEditingProduct && <EditProduct prodId={product.id} setIsEditingProduct={setIsEditingProduct}/>}
            {variationsRender(product)}
            {isAddingVari && <AddVariant addingVariToggleHandler={addingVariToggleHandler} prodId={product.id} variStyle={style.vari} variNum={product.variations.length + 1}/>}
            <button onClick={()=>dispatch(removeProduct(product.id))} >Delete Product</button>
            <button onClick={EditProductClickHandler}>Edit Product</button>
            <button onClick={addingVariToggleHandler}>{isAddingVari ? "Cancel" : "Add Variant"}</button>
        </div>
    );
};

export default ProductInSellerOffice;