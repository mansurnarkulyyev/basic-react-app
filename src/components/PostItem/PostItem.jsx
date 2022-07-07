import React from "react";
import MyButton from "../Ui/MyButton";
import s from "./PostItem.module.css";

const PostItem = (props) => {

  return (
    <div>
      <div className={s.post}>
        <div className={s.post__content}>
          <strong>{props.number}. {props.post.title}</strong>
          <p>{props.post.title}</p>
        </div>
        <div className={s.post__btn}>
          <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
        </div>
      </div>

    </div>
  );
};

export default PostItem;
