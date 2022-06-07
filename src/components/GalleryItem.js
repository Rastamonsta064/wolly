import React from 'react';
import {Link} from "react-router-dom";

const GalleryItem = ({product}) => {


    return (
        <Link to={"/products/"+product.id}>
            <div>
                <p>{product.name} (sellerID:{product.sellerId})</p>
                <p>${product.variations[0].price}</p>
            </div>
        </Link>
    );
};

export default GalleryItem;