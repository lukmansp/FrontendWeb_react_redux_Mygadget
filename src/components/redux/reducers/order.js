const initialState = {
    order: []
}
const order = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'GET_ORDER_FULFILLED':
            // console.log(action.payload);
            return {
                ...state,
                order: action.payload.data.result
            }
        case 'GET_ORDER_PENDING':
            return {
                ...state
            }
        case 'GET_ORDER_REJECTED':
            return {
                ...state
            }

        default:
            return state;
    }
}

export default order;