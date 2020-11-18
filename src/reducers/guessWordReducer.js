import { actionTypes } from '../actions/index';

export const guessWordReducer = (state = [] , action)=>{
    switch(action.type){
        case actionTypes.GUESSED_WORD:
            return [
                ...state,
                action.payload,
            ]
        default : 
            return state;
    }
}