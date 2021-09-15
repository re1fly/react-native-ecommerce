import {ADD, REMOVE} from './Type';


export const addItem = (items) => ({
    type: ADD,
    data: items

})

export const removeItem = (items) => ({
    type: REMOVE,
    data: items
})
