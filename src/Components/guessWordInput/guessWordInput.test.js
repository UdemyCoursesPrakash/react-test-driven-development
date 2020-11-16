import React from 'react';
import { shallow } from 'enzyme';

import GuessWordInput from './guessWordInput';
import { storeFactory } from '../../storeFactory/storeFactory';


const setup = (initialState = {}) =>{
    const store = storeFactory(initialState);
    const wrapper = shallow(<GuessWordInput store={store} />).dive().dive();
    return wrapper;
}

setup();

describe('render',()=>{
    describe('word has not been guessed successgully',()=>{
        let wrapper;
        beforeEach(()=>{
            const initialState = {success : false};
            wrapper = setup(initialState);
        })
        test('component renders without crash',()=>{
            expect(wrapper.find(`[data-test='guess-word-input']`).exists()).toBe(true);
        })
        test('Input box renders',()=>{
            expect(wrapper.find(`[data-test='input-box']`).exists()).toBe(true);
        })
        test('submit button renders',()=>{
            expect(wrapper.find(`[data-test='submit-button']`).exists()).toBe(true);
        })
    })
    describe('word has been guessed successgully',()=>{
        let wrapper;
        beforeEach(()=>{
            const initialState = {success : true};
            wrapper = setup(initialState);
        })
        test('component renders without crash',()=>{
            expect(wrapper.find(`[data-test='guess-word-input']`).exists()).toBe(true);
        })
        test('Input box does not renders',()=>{
            expect(wrapper.find(`[data-test='input-box']`).exists()).toBe(false);
        })
        test('submit button does not renders',()=>{
            expect(wrapper.find(`[data-test='submit-button']`).exists()).toBe(false);
        })
    })
})
describe('update',()=>{

})
