import {createStore} from 'redux';
import {reducerCart} from './Reducer';

export const store = createStore(reducerCart);
