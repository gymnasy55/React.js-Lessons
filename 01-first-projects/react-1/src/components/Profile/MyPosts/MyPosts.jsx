import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>1</button>
                <button>2</button>
            </div>
            <div>
                new post
            </div>
            <div className={classes.posts}>
                <Post message="hello" likesCount="15"/>
                <Post message="it's my first post" likesCount="20"/>
            </div>
        </div>
    )
}

export default MyPosts;