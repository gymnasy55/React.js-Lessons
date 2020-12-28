import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs" + props.id;

    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Ilya'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Sirgay'},
        {id: 4, name: 'Pasha'},
        {id: 5, name: 'Gleb'},
        {id: 6, name: 'Danya'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hey'},
        {id: 3, message: 'Bro'},
        {id: 4, message: 'Bro'},
        {id: 5, message: 'Bro'},
        {id: 6, message: 'Bro'}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;