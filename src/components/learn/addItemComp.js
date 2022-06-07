import React, {useState} from 'react';
import {addItem} from "../../redux/gallerySlice";
import {useDispatch} from "react-redux";

const AddItemComp = ({gallery}) => {

    const [name, setName] = useState("");

    const dispatch = useDispatch();

    const style = {
        common: {border: "1px solid black", borderRadius: "5px", margin: "5px", padding: "10px"}
    }

    const addHandler = () => {
        if (name) {
            const newItem = {
                name,
                id: gallery.length
            }
            dispatch(addItem(newItem));
            setName("");
        }
    }

    return (
        <div style={style.common}>
            <h2>add item</h2>
            <input
                type="text"
                placeholder="Add GalleryItem name here"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={addHandler}>add</button>
        </div>
    );
};

export default AddItemComp;