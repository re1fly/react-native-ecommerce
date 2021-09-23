import {ADD, ADD_SHIPPING, REDUCE, REMOVE, RESET_CART, RESET_SHIPPING} from './Type';


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

export const resetCart = () => ({
    type: RESET_CART,
});

export const addShipping = (dataShipping) => ({
    type: ADD_SHIPPING,
    data: {
        id: dataShipping.id,
        name: dataShipping.name,
        street: dataShipping.street,
        city: dataShipping.city,
        state: dataShipping.state,
        province: dataShipping.province,
        phone: dataShipping.phone,
        zip: dataShipping.zip,
    },
});

export const resetShipping = () => ({
    type: RESET_SHIPPING,
});



