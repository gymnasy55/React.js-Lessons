import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    return (
        <div className={classes.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name="Ilya" id="1"/>
                <DialogItem name="Dima" id="2"/>
                <DialogItem name="Sirgay" id="3"/>
                <DialogItem name="Pasha" id="4"/>
                <DialogItem name="Gleb" id="5"/>
                <DialogItem name="Danya" id="6"/>
            </div>
            <div className={classes.messages}>
                <Message message="Hi"/>
                <Message message="Hey"/>
                <Message message="Bro"/>
                <Message message="Bro"/>
                <Message message="Bro"/>
                <Message message="Bro"/>
            </div>
        </div>
    )
}

export default Dialogs;