import {combineReducers, createStore} from 'redux';
import {reducerCart, reducerShipping} from './Reducer';

const allReducers = combineReducers({
    cart: reducerCart,
    shipping: reducerShipping
})

export const store = createStore(allReducers);
