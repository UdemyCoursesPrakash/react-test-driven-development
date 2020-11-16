const initialState = false;

export const successReducer = (state = initialState , action) =>{
    switch(action.type){
        case 'CORRECT_GUESS':
            return true;
        default:
            return state;
    }
}