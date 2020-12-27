import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>My Posts </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message="hello" likesCount="15"/>
                <Post message="it's my first post" likesCount="20"/>
            </div>
        </div>
    )
}

export default MyPosts;