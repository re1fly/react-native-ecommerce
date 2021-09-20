import {ADD, REDUCE, REMOVE} from './Type';


export const addItem = (item) => ({
    type: ADD,
    payload: item,
});

export const reduceItem = (productId) => ({
    type: REDUCE,
    payload: productId,
});

export const removeItem = (productId) => ({
    type: REMOVE,
    payload: productId,
});


