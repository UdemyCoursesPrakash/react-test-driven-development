import { createStore , applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/index';

export const middlewares = [ReduxThunk];

export const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddlewares(reducers);