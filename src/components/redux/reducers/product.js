const initialState = {
    products: []
}
const product = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'GET_PRODUCTS_FULFILLED':
            // console.log(action.payload);
            return {
                ...state,
                products: action.payload.data.result
            }
        case 'GET_PRODUCT_PENDING':
            return {
                ...state
            }
        case 'GET_PRODUCT_REJECTED':
            return {
                ...state
            }
        case 'DETAILS_PRODUCT_FULFILLED':
            // console.log(action.payload);
            return {
                ...state,
                products: action.payload.data.result
            }
        case 'DETAILS_PRODUCT_PENDING':
            return {
                ...state
            }
        case 'DETAILS_PRODUCT_REJECTED':
            return {
                ...state
            }
        case 'DELETE_PRODUCT_FULFILLED':
            //console.log(action.payload.data.result);
            const newDataAfterDelete = state.products.filter(product => product.id !== action.payload.data.result)
            return {
                ...state,
                products: newDataAfterDelete
            }
        case 'DELETE_PRODUCT_PENDING':
            return {
                ...state
            }
        case 'DELETE_PRODUCT_REJECTED':
            return {
                ...state
            }

        case 'POST_PRODUCT_FULFILLED':
            const newDataProduct = [...state.products, action.payload.data.result];
            return {
                ...state,
                products: newDataProduct
            }
        // console.log(action.payload);
        case 'POST_PRODUCT_PENDING':
            return {
                ...state
            }
        case 'POST_PRODUCT_REJECTED':
            return {
                ...state
            }

        default:
            return state;
    }
}

export default product;