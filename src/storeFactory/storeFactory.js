import { createStore } from 'redux';

import reducers from '../reducers';

export const storeFactory = (initialState = {}) =>{
    return createStore(reducers , initialState)
}