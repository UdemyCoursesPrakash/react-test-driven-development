import React from 'react';
import { shallow } from 'enzyme';

import GuessWordInput , { UnConnectedGuessWordInput } from './guessWordInput';
import { storeFactory } from '../../storeFactory/storeFactory';


const setup = (initialState = {}) =>{
    const store = storeFactory(initialState);
    const wrapper = shallow(<GuessWordInput store={store} />).dive().dive();
    return wrapper;
}


describe('render',()=>{
    describe('word has not been guessed successgully',()=>{
        let wrapper;
        beforeEach(()=>{
            const initialState = {success : false};
            wrapper = setup(initialState);
        })
        test('component renders without crash',()=>{
            expect(wrapper.find(`[data-test='guess-word-input']`).exists()).toBe(true);
            expect(wrapper.find(`[data-test='guess-word-input']`).length).toBe(1);
        })
        test('Input box renders',()=>{
            expect(wrapper.find(`[data-test='input-box']`).exists()).toBe(true);
            expect(wrapper.find(`[data-test='input-box']`).length).toBe(1);
        })
        test('submit button renders',()=>{
            expect(wrapper.find(`[data-test='submit-button']`).exists()).toBe(true);
            expect(wrapper.find(`[data-test='submit-button']`).length).toBe(1);
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
            expect(wrapper.find(`[data-test='guess-word-input']`).length).toBe(1);
        })
        test('Input box does not renders',()=>{
            expect(wrapper.find(`[data-test='input-box']`).exists()).toBe(false);
            expect(wrapper.find(`[data-test='input-box']`).length).toBe(0);
        })
        test('submit button does not renders',()=>{
            expect(wrapper.find(`[data-test='submit-button']`).exists()).toBe(false);
            expect(wrapper.find(`[data-test='submit-button']`).length).toBe(0);
        })
    })
})
describe('test redux props',()=>{
    it('should have "success" props received from redux',()=>{
        const success = true;
        const wrapper  = setup({success});
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    })

    it('should have "guessWord" props as function',()=>{
        const wrapper = setup();
        const guessWordProp = wrapper.instance().props.guessWord;
        expect(guessWordProp).toBeInstanceOf(Function);
    })

    describe('redux unconnected component',()=>{
        const guessWordMock = jest.fn();
        let wrapper;
        const gussedWord = 'gussedWord';
        beforeEach(()=>{
            wrapper = shallow(<UnConnectedGuessWordInput guessWord={guessWordMock} />);
            wrapper.setState({currentGuess : gussedWord});
        })
        it('should call guessWord action creator when submit button is clicked',()=>{
            wrapper.find(`[data-test='submit-button']`).simulate('click');
            expect(guessWordMock.mock.calls.length).toBe(1);    
        })
        it('should call guessWord action creator when submit button is clicked',()=>{
            wrapper.find(`[data-test='submit-button']`).simulate('click');
            expect(guessWordMock).toHaveBeenCalledWith(gussedWord);
            expect(guessWordMock.mock.calls[0][0]).toBe(gussedWord);    
        })
        test('it should clear input box once submit is clicked',()=>{
            wrapper.find(`[data-test='submit-button']`).simulate('click');
            const currGuess = wrapper.instance().state['currentGuess'];
            expect(currGuess.length).toBe(0);
        })

        test('submit button should be disabled if no text is entered',()=>{
            wrapper.setState({
                currentGuess : ''
            })
           expect(wrapper.find(`[data-test='submit-button']`).props().disabled).toBe(true);
        })

        test('submit button should be disabled if no text is entered',()=>{
            wrapper.setState({
                currentGuess : 'test'
            })
           expect(wrapper.find(`[data-test='submit-button']`).props().disabled).toBe(false);
        })

    })

})
