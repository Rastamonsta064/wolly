import React from 'react';
import GalleryItem from "./GalleryItem";
import {useSelector} from "react-redux";

const Gallery = () => {

    const products = useSelector(state=>state.products);

    const galleryRender = () => {
        return products.map((product,index)=>{
            return(<GalleryItem product={product} key={index}/>)
        })
    }

    return (
        <div>
            {galleryRender()}
        </div>
    );
};

export default Gallery;