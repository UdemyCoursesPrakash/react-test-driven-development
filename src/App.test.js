import React from 'react';
import {shallow} from 'enzyme';

import App from './App';
const setup = (initialState = {}) =>{
    const wrapper = shallow(<App />);
    return wrapper;
}

test('App should render without crash',()=>{
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
})