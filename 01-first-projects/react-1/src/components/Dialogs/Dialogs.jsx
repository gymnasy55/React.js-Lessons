import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/1" activeClassName={classes.active}>Ilya</NavLink>
                </div>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to="/dialogs/2" activeClassName={classes.active}>Dima</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3" activeClassName={classes.active}>Sirgay</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4" activeClassName={classes.active}>Pasha</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/5" activeClassName={classes.active}>Gleb</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/6" activeClassName={classes.active}>Danya</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>Hey</div>
                <div className={classes.message}>Bro</div>
            </div>
        </div>
    )
}

export default Dialogs;