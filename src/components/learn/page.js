import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "@types/react";
import {removeItemByID} from "../../redux/gallerySlice";
import {fetchPosts} from "../../redux/fetchSlice";
import AddItemComp from "./addItemComp";
import {decrement, increment} from "../../redux/counterSlice";

const Page = () => {

    const count = useSelector(state => state.counter.value);
    const gallery = useSelector(state => state.gallery);
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();


    const style = {
        common: {border: "1px solid black", borderRadius: "5px", margin: "5px", padding: "10px"}
    }

    const galleryRender = useCallback(() => {
        console.log(gallery);
        if (gallery.length > 0) {
            return gallery.map((item, index) => {
                return (<div
                    style={style.common}
                    key={item.id}>
                    <h3>{item.name}</h3>
                    <h4>{item.id}</h4>
                    <button
                        onClick={() => {
                            console.log(item)
                            dispatch(removeItemByID(index))
                        }}
                    >dell
                    </button>
                </div>)

            })
        }
    }, [gallery])

    const postsRender = useCallback(() => {
        console.log(posts);
        if (posts && posts.length > 0) {
            return posts.map((post, index) => {
                return (<p key={index}>{post.name}</p>)
            })
        }
    }, [posts]);
    return (
        <div>
            <h2>Wolly Pro</h2>
            <div>
                <button
                    onClick={() => dispatch(fetchPosts())}
                >fetch
                </button>
                {postsRender()}
            </div>
            <AddItemComp gallery={gallery}/>
            <h2>{count}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>

            <div>
                {galleryRender()}
            </div>
        </div>
    );
};

export default Page;