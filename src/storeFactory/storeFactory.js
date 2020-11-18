import { createStore , applyMiddleware} from 'redux';
import { middlewares } from '../store';
import reducers from '../reducers';

export const storeFactory = (initialState = {}) =>{
    const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddlewares(reducers , initialState)
    // return createStore(reducers , initialState) // This is old one without middlewares
}