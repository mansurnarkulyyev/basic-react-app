import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "../PostItem";
import st from "./PostList.module.css";

const PostList = ({ posts, title, remove }) => {

    if (!posts.length) {
        return (
            <h1 style={{
                textAlign: "center",
                margin: "15px 0"
            }}>Posts not found</h1>
        )
    }

    return (
        <div>
            <h1 className={st.title}>{title}</h1>

            {posts.map((post, idx) => (

                <PostItem remove={remove} number={idx + 1} post={post} />

            ))}



        </div >

    );
};

export default PostList;

