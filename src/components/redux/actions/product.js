import axios from 'axios';

export const getProducts = () => {
    return {
        type: 'GET_PRODUCTS',
        payload: axios({
            method: "GET",
            url: "http://localhost:9009/product"
        })
    }
}
console.log(getProducts)

export const detailProducts = (event) => {
    return {
        type: 'DETAILS_PRODUCT',
        payload: axios({
            method: "GET",
            url: `http://localhost:9009/product?name=${event}`

        })
    }
}
export const categoryProducts = (event) => {
    return {
        type: 'CATEGORY_PRODUCT',
        payload: axios({
            method: "GET",
            url: `http://localhost:9009/product?category=${event}`

        })
    }
}

export const paginateProducts = (event) => {
    return {
        type: 'PAGINATE_PRODUCT',
        payload: axios({
            method: "GET",
            url: `http://localhost:9009/product?pages=${event}`

        })
    }
}

export const deleteProduct = (productId) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: axios({
            method: 'DELETE',
            url: `http://localhost:9009/product/${productId}`

        })


    }
}
export const postProduct = (data) => {
    return {
        type: 'POST_PRODUCT',
        payload: axios({
            method: "POST",
            url: "http://localhost:9009/product",
            data: data
        })
    }
}
export const updateProduct = (productId, data) => {
    return {
        type: "UPDATE_PRODUCT",
        payload: axios({
            method: "PATCH",
            url: `http://localhost:9009/product/${productId}`,
            data: data
        })
    }
}