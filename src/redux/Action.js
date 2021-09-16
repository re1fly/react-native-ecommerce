import {ADD, REMOVE} from './Type';


export const addItem = (item) => ({
    type: ADD,
    payload: item

})

export const removeItem = (item) => ({
    type: REMOVE,
    payload: item,
});
