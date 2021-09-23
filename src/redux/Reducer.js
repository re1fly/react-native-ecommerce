import {ADD, ADD_SHIPPING, REDUCE, REMOVE, RESET_CART, RESET_SHIPPING} from './Type';

export const reducerCart = (state = [], action) => {
    let doesItemExist;
    switch (action.type) {
        case ADD:
            doesItemExist = false;
            const newState = state.map((item) => {
                if (item.id === action.payload.id && item.size === action.payload.size) {
                    item.quantity += 1;
                    doesItemExist = true;
                }
                return item;
            });

            if (doesItemExist) {
                return newState;
            }

            return [...state, {...action.payload, quantity: 1}];

        case REDUCE:
            const newStateReduce = state.filter((item) => {
                if (item.id === action.payload.id && item.size === action.payload.size && item.quantity > 1) {
                    item.quantity -= 1;
                }
                return true;
            });
            return newStateReduce;

        case REMOVE:
            const newStateRemove = state.filter((item) => {
                if (item.id === action.payload.id && item.size === action.payload.size && item.quantity >= 1) {
                    return false;
                }
                return true;
            });
            return newStateRemove;

        case RESET_CART:
            return [];

        default:
            return state;
    }
};

export const reducerShipping = (state = [], action) => {
    let itemExist;
    switch (action.type) {
        case ADD_SHIPPING:
            itemExist = false;
            const newState = state.map((item) => {
                if (item.id === action.data.id) {
                    item.name = action.data.name;
                    item.street = action.data.street;
                    item.city = action.data.city;
                    item.state = action.data.state;
                    item.province = action.data.province;
                    item.phone = action.data.phone;
                    item.zip = action.data.zip;
                    itemExist = true;
                }
                return item;
            });

            if (itemExist) {
                return newState;
            }
            return [...state, {...action.data}];

        case RESET_SHIPPING:
            return [];

        default:
            return state;
    }
};



