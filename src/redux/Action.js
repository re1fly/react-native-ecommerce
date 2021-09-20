import {ADD, REDUCE, REMOVE} from './Type';


export const addItem = (item) => ({
    type: ADD,
    payload: {
        id: item.id,
        productName: item.product_name,
        image: item.product_image,
        price: item.price,
        size: item.size,
    },
});

export const reduceItem = (item) => ({
    type: REDUCE,
    payload: {
        id: item.id,
        size: item.size,
        quantity: item.quantity,
    },
});

export const removeItem = (item) => ({
    type: REMOVE,
    payload: {
        id: item.id,
        size: item.size,
        quantity: item.quantity,
    },
});


