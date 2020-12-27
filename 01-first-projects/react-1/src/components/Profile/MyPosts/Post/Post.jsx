import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://blog.golang.org/7years/gopherbelly300.jpg" alt=""/>
            {props.message}
            <div>
                <span>{props.likesCount} like</span>
            </div>
        </div>
    )
}

export default Post;