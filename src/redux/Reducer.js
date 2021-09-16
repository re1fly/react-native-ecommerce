import {ADD, REMOVE} from './Type';

const initialState = {
    item: [],
};

export const reducerCart = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            console.log('Add item');
            return {...state, item: [...state.item, action.payload]};

        case REMOVE:
            console.log('remove item');
            console.log(state.item);
            return {...state, item: state.item.filter((item, index) => item !== action.payload)};
        default:
            return state;
    }
};


