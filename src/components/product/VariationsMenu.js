import React from 'react';

const VariationsMenu = ({variations,setVariant}) => {

    const style = {
        item:{
            width:"100px",
            height:"60px",
            borderRadius:"20px",
            backgroundColor:"grey",
            margin:"20px",
            padding:"10px"
        }
    }

    const variationsRender = () => {
        return variations.map((v,i)=>{
            return (<div key={i} style={style.item} onClick={()=>setVariant(i)}>
                Price:${v.price}
                    </div>)
        })
    }

    return (
        <div>
            {variationsRender()}
        </div>
    );
};

export default VariationsMenu;