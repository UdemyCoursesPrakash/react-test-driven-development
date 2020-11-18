import moxios from 'moxios';
import { storeFactory } from '../storeFactory/storeFactory';

import { actionTypes , correctGuess , asyncCorrectGuess, getSecretWord } from './index';

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


describe('getSecretWord action creator test',()=>{
    beforeEach(()=>{
        moxios.install(); // if we have axios instance imported we can pass that instance to install function
    })
    afterEach(()=>{
        moxios.uninstall();
    })

    test('adds response to the state',()=>{
        const secretWord = 'party';
        const store = storeFactory();

        moxios.wait(()=>{
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status : 200,
                response : secretWord
            })
        })

        return store.dispatch(getSecretWord()).then(()=>{
            const newState = store.getState();
            expect(newState.secretWord).toBe(secretWord);
        })
    })
})