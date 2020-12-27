import React from "react";
import classes from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="https://s3.tproger.ru/uploads/2018/04/logos.jpg" alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;