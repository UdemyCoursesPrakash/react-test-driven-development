import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

const defaultProps = {
    initialValue : 0
}

const setup = (props = {}) => {
    const updatedProps = {
        ...defaultProps,
        ...props
    }
    const wrapper = shallow(<Counter {...updatedProps} />);
    return {
        wrapper,
        updatedProps
    }
}


describe('Render',()=>{
    let wrapper = setup();
    beforeEach(()=>{
        ({wrapper} = setup());
    })
    it('renders Counter component',()=>{        
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('[data-test="component-counter"]').exists()).toBe(true);
        expect(wrapper.find("[data-test='component-counter']").length).toBe(1);
    })
    it('renders current value',()=>{
        expect(wrapper.find('[data-test="current-value"]').exists()).toBe(true);
        expect(wrapper.find('[data-test="current-value"]').length).toBe(1);
    })
    it('should render increment , decrement button',()=>{
        expect(wrapper.find('[data-test="incr-button"]').exists()).toBe(true);
        expect(wrapper.find('[data-test="incr-button"]').length).toBe(1);
        expect(wrapper.find("[data-test='incr-button']").text()).toBe('+');
        expect(wrapper.find('[data-test="decr-button"]').exists()).toBe(true);
        expect(wrapper.find('[data-test="decr-button"]').length).toBe(1);
        expect(wrapper.find("[data-test='decr-button']").text()).toBe('-');
    })
})

describe('Initial value',()=>{
    it('should have initial value as 0',()=>{
        const {wrapper} = setup();
        expect(wrapper.find('[data-test="current-value"]').text()).toBe("0");
    })
})

describe('click counter',()=>{
    let wrapper;
    beforeEach(()=>{
        ({wrapper} = setup());
    })
    it('should increment counter on plus click',()=>{
        wrapper.find('[data-test="incr-button"]').simulate('click');
        expect(wrapper.find('[data-test="current-value"]').text()).toBe('1');
    })
    it('should decrement counter on minus click',()=>{
        wrapper.find('[data-test="incr-button"]').simulate('click');
        wrapper.find('[data-test="decr-button"]').simulate('click');
        expect(wrapper.find('[data-test="current-value"]').text()).toBe('0');
    })
    it('should not decrement counter if it is 0',()=>{
        wrapper.find('[data-test="decr-button"]').simulate('click');
        expect(wrapper.find('[data-test="current-value"]').text()).toBe('0');
    })
})