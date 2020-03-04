import axios from 'axios';

export const getUser = () => {
    return {
        type: 'GET_USER',
        payload: axios({
            method: "GET",
            url: "http://localhost:9009/user"
        })
    }
}
export const postUser = (data) => {
    return {
        type: 'POST_USER',
        payload: axios({
            method: "POST",
            url: "http://localhost:9009/user/register",
            data: data
        })
    }
}

export const deleteUser = (UserId) => {
    return {
        type: 'DELETE_USER',
        payload: axios({
            method: 'DELETE',
            url: `http://localhost:9009/user/${UserId}`

        })


    }
}
