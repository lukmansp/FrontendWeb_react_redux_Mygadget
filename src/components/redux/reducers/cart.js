const initialState = {
    cart: []
}
const cart = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'CART_ITEM':
            const newCart = [...state.cart, action.payload];
            return {
                ...state,
                cart: newCart
            }

        case 'ADD_QTY':
            //console.log('disini')
            const newQtyCart = state.cart.map(cart => {
                if (cart.id === action.payload) {
                    cart.quantity = cart.quantity + 1
                    cart.price = cart.quantity * cart.price
                }
                return cart
            })
            return {
                ...state,
                cart: newQtyCart
            }

        case 'REDUCE_QTY':
            const newQty = state.cart.map(cart => {
                if (cart.id === action.payload) {
                    cart.quantity = cart.quantity - 1
                    cart.price = cart.quantity % cart.price
                }
                return cart
            })
            return {
                ...state,
                cart: newQty
            }

        default:
            return state;
    }

}

export default cart;