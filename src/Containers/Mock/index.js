import React from 'react';

export default function Mock() {
    const forEach = (arr , callback) =>{
        for(let i = 0 ; i< arr.length ; i++){
            callback(arr[i] , arr[i]*arr[i]);
        }
    }

    const callBack = (x , y) =>{
        console.log(x,y);
    }

    return (
        <div>
            Mocking is going behind the scenes in code.
            Here we are just showing repeaiting values
            <span>{forEach([1,2,3] , callBack)}</span>
        </div>
    )
}
