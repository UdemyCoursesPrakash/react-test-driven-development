import React from 'react';
import { shallow } from 'enzyme';

import Congrats from './Congrats';

const defaultProps = {
    success:false
}

const setup = (customProps = {}) =>{
    const props = {
        ...defaultProps,
        ...customProps
    }

    const wrapper = shallow(<Congrats {...props} />);
    return{
        wrapper,
        props
    }
}

describe('renders',()=>{
    it('should render component',()=>{
        const {wrapper} = setup();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('[data-test="congrats"]').length).toBe(1);
    })
    it('should not render text when "success" props is false',()=>{
        const customProps = {
            success : false
        }
        const {wrapper} = setup(customProps);
        expect(wrapper.find('[data-test="congrats"]').text()).toBe('');
    })
    it('should render some text when "success" props is true',()=>{
        const customProps = {
            success:true
        }
        const {wrapper} = setup(customProps);
        expect(wrapper.find('[data-test="congrats"]').text().length).not.toBe(1);
        expect(wrapper.find('[data-test="congrats"]').text()).toMatch('Congratulations');
    })
})