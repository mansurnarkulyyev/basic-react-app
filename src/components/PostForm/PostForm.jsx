import React, { useState } from 'react';
import MyButton from '../Ui/MyButton';
import MyInput from '../Ui/Input/MyInput';

// import st from '/PostForm.module.css';

const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = { ...post, id: Date.now() }
        create(newPost)
        setPost({ title: '', body: '' });
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder="post name" />
            {/* <input ref={bodyInputRef} type="text" /> */}
            <MyInput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type="text" placeholder="post description" />
            <MyButton
                onClick={addNewPost} >create post</MyButton>
        </form>
    );
};
export default PostForm;