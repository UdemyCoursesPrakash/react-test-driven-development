import getLetterMatchCount from "../helper/getLetterMatchCount"

export const actionTypes = {
    CORRECT_GUESS : 'CORRECT_GUESS',
    GUESSED_WORD  : 'GUESSED_WORD'
} 

export const correctGuess = () =>{
    return {
        type: actionTypes.CORRECT_GUESS
    }
}


// FOLLOWING ACTION IS NOT USEFUL BUT CREATED TO JUST TO CHECK HOW TO TEST ASYNC ACTION CREATORS
export const asyncCorrectGuess = (status) => (dispatch , getState) =>{
    dispatch({
        type:actionTypes.CORRECT_GUESS,
        payload : status
    })
}

// FOLLOWING ACTION IS CREATED TO TEST THUNK MIDDLEWARE

export const guessWord = (guessedWord) => (dispacth , getState) =>{
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(secretWord ,guessedWord);
    dispacth({
        type : actionTypes.GUESSED_WORD,
        payload : {guessedWord , letterMatchCount}
    })

    if(secretWord === guessedWord){
        dispacth({
            type : actionTypes.CORRECT_GUESS
        })
    }
}