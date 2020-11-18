import React from 'react';
import {shallow} from 'enzyme';

import App from './App';
import { storeFactory } from './storeFactory/storeFactory';
import { successReducer } from './reducers/successReducer';


const setup = (initialState = {}) =>{
    const store = storeFactory(initialState);
    const wrapper = shallow(<App store={store} />).dive().dive();
    return wrapper;
}

describe('Test redux props of APP component',()=>{
    it('should have success , guessedWords , secretWord props',()=>{
        const secretWord = 'party';
        const initialState = {
            success : false,
            guessedWords : [{guessedWord : 'train' , letterMatchCount : 3}],
            secretWord
        }
        const wrapper = setup(initialState);
        const successProps = wrapper.instance().props.success;
        const guessedWordsProps = wrapper.instance().props.guessedWords;
        const secretWordProps = wrapper.instance().props.secretWord;
        const guessWordAction = wrapper.instance().props.guessWord;

        expect(successProps).toBe(false);
        expect(guessedWordsProps).toBe(initialState.guessedWords);
        expect(secretWordProps).toBe(initialState.secretWord);
        expect(guessedWordsProps).toBeInstanceOf(Array);
        expect(guessWordAction).toBeInstanceOf(Function);
    })
    
})