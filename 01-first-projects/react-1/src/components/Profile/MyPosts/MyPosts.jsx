import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let addPostElement = React.createRef();
    let addPost = () => {
        let text = addPostElement.current.value;
        alert(text);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts </h3>
            <div>
                <div>
                    <textarea ref={addPostElement}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;