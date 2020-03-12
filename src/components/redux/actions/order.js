import axios from 'axios';

export const getOrder = () => {
    return {
        type: 'GET_ORDER',
        payload: axios({
            method: "GET",
            url: "http://localhost:9009/order/"
        })
    }
}