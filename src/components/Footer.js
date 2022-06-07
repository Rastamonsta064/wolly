import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {

    const style = {
        main: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
        },
        section: {
            display: "flex",
            flexDirection: "column",
        }
    }

    return (
        <div style={style.main}>
            <div style={style.section}>
                Account
                <button>Sign In</button>
                <Link to={"/registration"}>
                    <button>
                        Register
                    </button>
                </Link>
                <button>Order Status</button>
            </div>
            <div style={style.section}>
                Abous Us
                <button>Our Story</button>
                <button>Careers</button>
            </div>
            <div style={style.section}>
                Help
                <button>Contact Us</button>
                <button>Order Status</button>
                <button>Returns</button>
            </div>
            <div style={style.section}>
                Follow Us!
                <div>Lorem ipsum dolor sit amet, </div>
                <div>
                    <button>insta</button>
                    <button>fb</button>
                    <button>tweet</button>
                </div>
            </div>


        </div>
    );
};

export default Footer;