import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../redux/userSlice";
import {Link} from "react-router-dom";

const Registration = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const isAuthorized = useSelector(state => state.user.isAuthorised);
    const userName = useSelector(state=>state.user.name);

    const style = {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        welcomeBlock: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "300px",
        },
        inputsBlock: {
            display: "flex",
            flexDirection: "column",
            justifyItems: "space-around",
            margin: "10px",
            padding: "10px",
            width: "300px",
            textAlign: "center"
        },
        inputs: {
            margin: "10px"
        },
        btnBlock: {
            margin: "10px",
            padding: "10px",
        }
    }

    const registerHandler = () => {
        if (name && email && password) {
            const newUser = {name, email, password};
            dispatch(setUser(newUser));
            setName("");
            setEmail("");
            setPassword("");
        }
    }


    const welcomeComponent = () => {
        return (<div style={style.welcomeBlock}>
            <h3 style={style.btnBlock}>Welcome {userName}!</h3>
            <Link to={"/gallery"}>
                <button style={style.btnBlock}>Get Started</button>
            </Link>
        </div>)
    }

    const registerComponent = () => {
        return (<div style={style.root}>
                <div style={style.inputsBlock}>
                    <h3>Create yor Account</h3>
                    <input
                        style={style.inputs}
                        type="text"
                        placeholder={"name"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                    <input
                        style={style.inputs}
                        type="text"
                        placeholder={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    <input
                        style={style.inputs}
                        type="text"
                        placeholder={"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div style={style.btnBlock}>
                    <button style={style.btnBlock}>Read More >></button>
                    <button style={style.btnBlock} onClick={registerHandler}>Join Now</button>
                </div>
            </div>

        )
    }

    return (<div>{isAuthorized ? welcomeComponent() : registerComponent()}</div>);
};

export default Registration;