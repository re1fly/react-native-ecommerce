import {ADD, REMOVE} from './Type';


export const addItem = (items) => ({
    type: ADD,
    product: items

})

export const removeItem = (items) => ({
    type: REMOVE,
    product: items
})
