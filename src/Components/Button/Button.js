import React from 'react';
import classes from './Button.module.scss';

const Button = (props) => {
    return (
        <div>
            <button className={classes.btn} onClick={props.click}>{props.label}</button>
        </div>
    )
}

export default Button
