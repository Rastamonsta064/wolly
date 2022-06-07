import React from 'react';
import {Link} from "react-router-dom";
import HeaderSignIn from "./HeaderSignIn";

const Header = () => {

    const style = {
        main: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            padding:"5px",
            margin:"10px"
        }
    }

    return (
        <div style={style.main}>
            <div>
                    <Link to="/">HOME</Link>
            </div>
            <div>
                <div style={style.main}>
                    <input type="text" placeholder="What would you like to find?"/>
                   <HeaderSignIn/>
                    <div>
                        <button>brilliant</button>
                        <button>ring</button>
                        <Link to={"/cart"}><button>cart</button></Link>
                    </div>

                </div>
                <div style={style.main}>
                    <button>Earrings</button>
                    <button>Necklaces</button>
                    <button>Pendants</button>
                    <button>Chains</button>
                    <button>Gold rings</button>
                    <button>Mens's Rings</button>
                    <button>Kid's Jewellery</button>
                    <button>Fashion Rings</button>
                    <button>Brooches</button>
                </div>
            </div>


        </div>
    );
};

export default Header;