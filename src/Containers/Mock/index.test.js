import React from 'react';
import { shallow } from 'enzyme';
import Mock from './index';


const forEach = (arr , callback) =>{
    console.log('here')
    for(let i = 0 ; i< arr.length ; i++){
        callback(arr[i] , arr[i]*arr[i]);
    }
}
const arr = [1,2,3];
const callbackMock = jest.fn((x,y) => 40 + x);

describe('test mock functions different cases',() =>{
    beforeEach(()=>{
        forEach(arr , callbackMock)
    })
    it('should call atleast once',()=>{
        expect(callbackMock.mock.calls.length).toBeGreaterThan(0);
    })

    it('first argument of first call should be 1 , as it will be callback(1,1)',()=>{
        expect(callbackMock.mock.calls[0][0]).toBe(1);
    })

    it('second argument of first call should be 1 , as it will be callback(1,1)' , ()=>{
        expect(callbackMock.mock.calls[0][1]).toBe(1);
    })

    it('first argument of second call should be 2 , as it will be callback(2,4)' , ()=>{
        expect(callbackMock.mock.calls[1][0]).toBe(2);
    })

    it('second argument of second call should be 4 , as it will be callback(2,4)' , ()=>{
        expect(callbackMock.mock.calls[1][1]).toBe(4);
    })

    it('returned value of first call should be 41 , (40 + 1)',()=>{
        expect(callbackMock.mock.results[0].value).toBe(41);
    })
})
