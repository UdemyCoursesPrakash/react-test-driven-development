import React from 'react';
import {mount, shallow} from 'enzyme';

import WordGame , { UnConnectedWordGame } from './wordGame';
import { storeFactory } from '../../storeFactory/storeFactory';

const setup = (initialState = {}) =>{
    const store = storeFactory(initialState);
    const wrapper = shallow(<WordGame store={store} />).dive().dive();
    return wrapper;
}

describe('Test redux props of WordGame component',()=>{
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
        const getSecretWordAction = wrapper.instance().props.getSecretWord;

        expect(successProps).toBe(false);
        expect(guessedWordsProps).toBe(initialState.guessedWords);
        expect(secretWordProps).toBe(initialState.secretWord);
        expect(guessedWordsProps).toBeInstanceOf(Array);
        expect(getSecretWordAction).toBeInstanceOf(Function);
    })   
    
    it('should run "getSecretWord" on component mount',()=>{
        const getSecretWordMock = jest.fn();
        const props = {
            getSecretWord : getSecretWordMock,
            success : false,
            guessedWords : [],
            secretWord : 'party'
        }

        // setup WordGame component with getSecretWord as getSecretWordMock
        const wrapper = shallow(<UnConnectedWordGame {...props} />);
        wrapper.instance().componentDidMount();
        const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
        expect(getSecretWordCallCount).toBe(1);
    })
})