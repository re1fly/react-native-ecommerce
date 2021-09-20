import {ADD, REDUCE, REMOVE} from './Type';
import CartItem from './CartItem';

const initialState = {
    cart: {},
    totalAmount: 0,
};

export const reducerCart = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            const addedItem = action.payload;
            const itemPrice = addedItem.price;
            const itemName = addedItem.product_name;
            const itemImage = addedItem.product_image;
            const itemSize = addedItem.size;

            let updatedOrNewCartItem;

            // console.log(state.cart[addedItem.id])

            if (state.cart[addedItem.id]) {
                updatedOrNewCartItem = new CartItem(
                    state.cart[addedItem.id].quantity + 1,
                    itemPrice,
                    itemName,
                    state.cart[addedItem.id].sum + itemPrice,
                    itemImage,
                    itemSize,
                );
            } else {
                updatedOrNewCartItem = new CartItem(
                    1,
                    itemPrice,
                    itemName,
                    itemPrice,
                    itemImage,
                    itemSize,
                );
            }
            return {
                ...state,
                cart: {...state.cart, [addedItem.id]: updatedOrNewCartItem},
                totalAmount: state.totalAmount + itemPrice,
            };

        case REDUCE:
            const selectedCartItem = state.cart[action.payload];
            const currentQty = state.cart[action.payload].quantity;

            let updatedCartItems;
            if (currentQty > 1) {
                //reduce
                const updatedCartItem = new CartItem(
                    selectedCartItem.quantity - 1,
                    selectedCartItem.productPrice,
                    selectedCartItem.productName,
                    selectedCartItem.sum - selectedCartItem.productPrice,
                    selectedCartItem.productImage,
                    selectedCartItem.productSize,
                );
                updatedCartItems = {...state.cart, [action.payload]: updatedCartItem};
                console.log(updatedCartItem);
            } else {
                //delete
                updatedCartItems = {...state.cart};
                delete updatedCartItems[action.payload];
            }
            return {
                ...state,
                cart: updatedCartItems,
                totalAmount: state.totalAmount - selectedCartItem.productPrice,
            };

        case REMOVE:
            const selectedItem = state.cart[action.payload];
            let updatedCart;

            const updatedItem = new CartItem(
                selectedItem.quantity,
                selectedItem.productPrice,
                selectedItem.productName,
                selectedItem.sum,
                selectedItem.productImage,
            );

            updatedCart = {...state.cart, [action.payload]: updatedItem};
            delete updatedCart[action.payload];

            return {
                ...state,
                cart: updatedCart,
                totalAmount: state.totalAmount - selectedItem.productPrice * selectedItem.quantity,
            };

        default:
            return state;
    }
};



