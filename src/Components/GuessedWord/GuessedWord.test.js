import React from 'react';
import { shallow } from 'enzyme';
import GuessedWord from './GuessedWord';

const defaultProps = {
    guessedWords : [
        {
            guessedWord : 'train',
            letterMatchCount : 3
        }
    ]
}

const setUp = (customProps = {}) =>{
    const props = {
        ...defaultProps,
        ...customProps
    }

    const wrapper = shallow(<GuessedWord {...props} />);
    // const wrapper = shallow(<Calculator {...props} />);
    return{
        wrapper,
        props
    }
}

describe('render',()=>{
    it('should render component',()=>{
        const {wrapper} = setUp();
        expect(wrapper.find('[data-test="guessed-word-comp"]').exists()).toBe(true);
    })
})

describe('if there are no words guessed',()=>{
    let wrapper;
    beforeEach(()=>{
        ({wrapper} = setUp({guessedWords:[]}))
    })
    test('it should render component',()=>{
        expect(wrapper.find('[data-test="guessed-word-comp"]').length).toBe(1);
    })

    test('it should render some instructions',()=>{
        expect(wrapper.find('[data-test="instructions"]').text().length).not.toBe(0);
    })
})

describe('if there are words guessed',()=>{
    let wrapper;
    const guessedWords = [
        {
            guessedWord : 'train',
            letterMatchCount : 3
        },
        {
            guessedWord : 'agile',
            letterMatchCount : 1
        },
        {
            guessedWord : 'party',
            letterMatchCount : 5
        }
    ]
    beforeEach(()=>{
        ({wrapper} = setUp({guessedWords}))
    })

    test('it should render word without error',()=>{
        expect(wrapper.find('[data-test="guessed-word-comp"]').length).toBe(1);
    })

    it('should render guessed word section',()=>{
        expect(wrapper.find('[data-test="guessed-words"]').length).toBe(1);
    })
    it('should render guessed words multiple times',()=>{
        expect(wrapper.find('[data-test="guessed-word"]').length).toBe(guessedWords.length);
    })
})