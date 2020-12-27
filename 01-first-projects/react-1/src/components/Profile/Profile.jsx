import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://s3.tproger.ru/uploads/2018/04/logos.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;