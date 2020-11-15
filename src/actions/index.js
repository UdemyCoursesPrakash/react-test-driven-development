export const actionTypes = {
    CORRECT_GUESS : 'CORRECT_GUESS'
} 

export const correctGuess = () =>{
    return {
        type: actionTypes.CORRECT_GUESS
    }
}

export const asyncCorrectGuess = (status) => (dispatch , getState) =>{
    dispatch({
        type:actionTypes.CORRECT_GUESS,
        payload : status
    })
}