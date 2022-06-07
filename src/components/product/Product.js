import React, {useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import VariationsMenu from "./VariationsMenu";
import VariationMain from "./VariationMain";
import SellerInfo from "./SellerInfo";

const Product = () => {

    const param = useParams();
    const product = useSelector(state=>state.products.find(p=>p.id==param.id));

    const navigate = useNavigate();

    const [variant,setVariant] = useState(0);

    const style = {
        product:{
            display:"flex",
            justifyContent:"space-around",
        }
    }

    return (
        <div style={{textAlign:"center"}}>
            <div style={style.product}>
                <VariationsMenu variations={product.variations} setVariant={setVariant} />
                <VariationMain productName={product.name} variation={product.variations[variant]} />
                <SellerInfo/>
            </div>
            <button onClick={()=> navigate(-1)} >GO BACK</button>
        </div>
    );
};

export default Product;