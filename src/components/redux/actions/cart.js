export const cartItem = (data) => {
    return {
        type: 'CART_ITEM',
        payload: data
    }

}

export const addQty = (id) => {
    return {
        type: 'ADD_QTY',
        payload: id
    }
}

export const reduceQty = (id) => {
    return {
        type: 'REDUCE_QTY',
        payload: id
    }
}

export const removeQty = (id) => {
    return {
        type: 'REMOVE_QTY',
        payload: id
    }
}
