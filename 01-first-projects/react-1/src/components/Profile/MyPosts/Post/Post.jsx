import React from "react";
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img src="https://blog.golang.org/7years/gopherbelly300.jpg" alt=""/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;