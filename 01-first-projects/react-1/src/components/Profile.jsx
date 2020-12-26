import React from "react";
import classes from './Profile.module.css';

const Profile = () => {
    return(
        <main className="main">
            <div>
                <img src="https://s3.tproger.ru/uploads/2018/04/logos.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    new post
                </div>
                <div className={classes.posts}>
                    <div className={classes.item}>
                        post 1
                    </div>
                    <div className={classes.item}>
                        post 2
                    </div>
                    <div className={classes.item}>
                        post 3
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Profile;