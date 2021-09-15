import {ADD, REMOVE} from './Type';

const initialState = {
    items:1
}

export const reducerCart = (state = initialState, action) => {
    switch (action.type){
        case ADD:
            console.log('Add item')
            return{...state, items:state.items + 1}

        case REMOVE:
            console.log('remove item')
            return{...state, items: state.items - 1}
        default: return state;
    }
}

