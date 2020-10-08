import React from 'react'
import classes from './input.module.scss';

const Input = (props) => {
    return (
        <div className={classes.inputContainer}>
            <input name={props.name} type="text" placeholder={props.label} onChange={(e) =>props.change(props.name , e.target.value)} />
        </div>
    )
}

export default Input;
