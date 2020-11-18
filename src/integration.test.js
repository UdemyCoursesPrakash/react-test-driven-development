import { storeFactory } from './storeFactory/storeFactory';
import { guessWord } from './actions/index';

describe('test guess word integration test',()=>{
    const unSuccessFulGuess = 'train';
    const secretWord = 'party';
    const successFulGuess = 'party';
    describe('No guessed words',()=>{
        let store;
        let initialState = {secretWord};
        beforeEach(()=>{
            store = storeFactory(initialState);
        })
        it('update state correctly for unsuccessful guess',()=>{
            store.dispatch(guessWord(unSuccessFulGuess));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success : false,
                guessedWords : [{
                    guessedWord : unSuccessFulGuess,
                    letterMatchCount : 3
                }]
            }
            expect(newState).toEqual(expectedState);
            
        })
        it('update state correctly for successful guess',()=>{
            
            store.dispatch(guessWord(successFulGuess));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success : true,
                guessedWords : [{
                    guessedWord : successFulGuess,
                    letterMatchCount : 5
                }]
            }
            expect(newState).toEqual(expectedState);
        })
    })
    describe('Some guessed words',()=>{
        const guessedWords = [{
            guessedWord : 'agile',
            letterMatchCount : 1
        }];
        const initialState = {guessedWords , secretWord};
        let store;
        beforeEach(()=>{
            store = storeFactory(initialState);
        })
        it('update state correctly for unsuccessful guess',()=>{
            store.dispatch(guessWord(unSuccessFulGuess));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success : false,
                guessedWords : [...guessedWords, {guessedWord : unSuccessFulGuess ,  letterMatchCount : 3}],
            }
            expect(newState).toEqual(expectedState);
        })
        it('update state correctly for successful guess',()=>{
            store.dispatch(guessWord(successFulGuess));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success : true,
                guessedWords : [...guessedWords, {guessedWord : successFulGuess ,  letterMatchCount : 5}],
            }
            expect(newState).toEqual(expectedState);
        })
    })
})