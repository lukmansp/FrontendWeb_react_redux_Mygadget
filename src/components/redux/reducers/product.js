const initialState = {
    products: [],
    paginate: []
}
const product = (state = initialState, action) => {
    //console.log(action.type);
    switch (action.type) {
        case 'GET_PRODUCTS_FULFILLED':
            console.log(action.payload);
            return {
                ...state,
                products: action.payload.data.result,
                paginate: action.payload.data.paginate
            }
        case 'GET_PRODUCT_PENDING':
            return {
                ...state
            }
        case 'GET_PRODUCT_REJECTED':
            return {
                ...state
            }
        //
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
        //
        case 'CATEGORY_PRODUCT_FULFILLED':
            // console.log(action.payload);

            return {
                ...state,
                products: action.payload.data.result
            }
        case 'CATEGORY_PRODUCT_PENDING':
            return {
                ...state
            }
        case 'CATEGORY_PRODUCT_REJECTED':
            return {
                ...state
            }
        case 'PAGINATE_PRODUCT_FULFILLED':
            // console.log(action.payload);
            return {
                ...state,
                products: action.payload.data.result
            }
        //

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
        //

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
        //

        case 'UPDATE_PRODUCT_PENDING':
            return {
                ...state
            }
        case 'UPDATE_PRODUCT_REJECTED':
            return {
                ...state
            }
        case 'UPDATE_PRODUCT_FULFILLED':
            console.log(action.payload)
            const newProductAfterUpdate = state.products.map(product => {
                if (product.id === action.payload.data.result.id) {
                    return action.payload.data.result;
                }

                return product;
            })
            // console.log(newProductAfterUpdate)
            return {
                ...state,
                products: newProductAfterUpdate
            }
        case 'GET_PAGINATE_FULFILLED':
            // console.log(action.payload);
            return {
                ...state,
                products: action.payload.data.paginate
            }

        default:
            return state;
    }
}

export default product;