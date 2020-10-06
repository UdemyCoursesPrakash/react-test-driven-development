import React from 'react'

function congrats(props) {
    if(props.success){
        return (
            <div data-test="congrats">
                <h1>Congratulations you have guessed word.</h1>
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
