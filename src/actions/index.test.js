import { actionTypes , correctGuess , asyncCorrectGuess } from './index';

describe('test action creators using imported action from action creators file',()=>{
    it('correct guess action should return "type:CORRECT_GUESS"',()=>{
        const action = correctGuess();
        expect(action).toEqual({type:actionTypes.CORRECT_GUESS});
    })
})

describe('test action creators using mock function',()=>{
    let dispatchMock , getStateMock  ;
    beforeEach(()=>{
        dispatchMock = jest.fn();
        asyncCorrectGuess(false)(dispatchMock , getStateMock);
    }) 
    it('should return {type: CORRECT_GUESS}' , ()=>{
        expect(dispatchMock.mock.calls[0][0]).toEqual({
            type : actionTypes.CORRECT_GUESS,
            payload : false
        })
    })
})