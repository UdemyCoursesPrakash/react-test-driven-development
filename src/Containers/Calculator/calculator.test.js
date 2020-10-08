import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './calculator';

const defaultProps = {
    numberOne : 0,
    numberTwo : 0
}

const setUp = (customPorps = {} , state = null) =>{
    const props = {
        ...defaultProps,
        ...customPorps
    }
    const wrapper = shallow(<Calculator {...props} />);

    if(state){
        wrapper.setState(state);
    }

    return {
        wrapper,
        props
    }
}

describe('Should render everything',()=>{
    let wrapper,props;
    beforeEach(()=>{
        ({wrapper , props} = setUp());
    })
    it('should render component',()=>{
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('[data-test="calculator"]').exists()).toBe(true);
        expect(wrapper.find('[data-test="calculator"]').length).toBe(1);
    })
    it('should render input box and buttons',()=>{
        expect(wrapper.find('[data-test="input"]').length).toBe(2);
    })
    it('should render four buttons',()=>{
        expect(wrapper.find('[data-test="operations"]').find('button').length).toBe(4);
    })
})

describe('should have correct text for each button',()=>{
    let wrapper , props;
    beforeEach(()=>{
        ({wrapper , props} = setUp());
    })

    it('should have "ADD" for first button' , ()=>{
        expect(wrapper.find('[data-test="operations"]').find('button').at(0).text()).toBe('ADD')
    })
    it('should have "SUBSTRACT" for first button' , ()=>{
        expect(wrapper.find('[data-test="operations"]').find('button').at(1).text()).toBe('SUBSTRACT')
    })
    it('should have "MULTIPLY" for first button' , ()=>{
        expect(wrapper.find('[data-test="operations"]').find('button').at(2).text()).toBe('MULTIPLY')
    })
    it('should have "DIVIDE" for first button' , ()=>{
        expect(wrapper.find('[data-test="operations"]').find('button').at(3).text()).toBe('DIVIDE')
    })
})

describe('should perform right operations',()=>{
    let wrapper , props;
    const state = {
        numOne : 10,
        numTwo : 5
    }
    beforeEach(() =>{
        ({wrapper,props} = setUp(null , state));
    })
    it('should add values',()=>{
        wrapper.find('[data-test="operations"]').find('button').at(0).simulate('click');
        expect(wrapper.find('[data-test="result"]').text()).toBe("15");
        expect(wrapper.state('result')).toBe(15);
        expect(wrapper.instance().state['result']).toBe(15);
    })
    it('should substract values',()=>{
        wrapper.find('[data-test="operations"]').find('button').at(1).simulate('click');
        expect(wrapper.find('[data-test="result"]').text()).toBe("5");
        expect(wrapper.state('result')).toBe(5);
        expect(wrapper.instance().state['result']).toBe(5);
    })
    it('should multiply values',()=>{
        wrapper.find('[data-test="operations"]').find('button').at(2).simulate('click');
        expect(wrapper.find('[data-test="result"]').text()).toBe("50");
        expect(wrapper.state('result')).toBe(50);
        expect(wrapper.instance().state['result']).toBe(50);
    })
})