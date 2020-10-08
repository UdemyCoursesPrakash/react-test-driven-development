import React from 'react';
import classes from './Congrats.module.scss';

function congrats(props) {
    if(props.success){
        return (
            <div data-test="congrats">
                <h4 className={classes.congrats}>Congratulations you have guessed word.</h4>
            </div>
        )
    }else{
        return(
            <div data-test="congrats">
                
            </div>
        )
    }
}

export default congrats
