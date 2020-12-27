import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.dialog}>
                    Ilya
                </div>
                <div className={classes.dialog + ' ' + classes.active}>
                    Dima
                </div>
                <div className={classes.dialog}>
                    Sirgay
                </div>
                <div className={classes.dialog}>
                    Pasha
                </div>
                <div className={classes.dialog}>
                    Gleb
                </div>
                <div className={classes.dialog}>
                    Danya
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