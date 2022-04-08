import {combineReducers, createStore} from 'redux';
import {reducerCart, reducerShipping} from './Reducer';
import * as React from 'react';

const allReducers = combineReducers({
    cart: reducerCart,
    shipping: reducerShipping
})

export const store = createStore(allReducers);
