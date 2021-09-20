import {ADD, REDUCE, REMOVE} from './Type';

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
            console.log(state);

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

        default:
            return state;
    }
};



