import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {clearUser} from "../redux/userSlice";
import {Link} from "react-router-dom";

const HeaderSignIn = () => {

    const user = useSelector(state => state.user);

    const dispatch = useDispatch();

    const authorizedRender = () => {
        return (<div>
            Hello, {user.name}! (id:{user.id})
            <Link to={"/seller_office"}><button>Sell</button></Link>
            <button onClick={() => dispatch(clearUser())}>log out</button>
        </div>)
    }

    return (
        <div>
            {user.isAuthorised ? authorizedRender() : <button>sign in</button>}
        </div>
    );
};

export default HeaderSignIn;