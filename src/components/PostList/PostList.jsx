import React from "react";
import PostItem from "../PostItem";
import s from "./PostList.module.css";

const PostList = ({ posts, title, remove }) => {
    return (
        <div>
            <h1 className={s.title}>{title}</h1>

            {posts.map((post, idx) => (
                <PostItem remove={remove} number={idx + 1} post={post} key={post.id} />
            ))}
        </div>

    );
};

export default PostList;

