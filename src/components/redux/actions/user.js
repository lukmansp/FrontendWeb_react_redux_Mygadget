import axios from 'axios';
import 'dotenv/config'
export const login = data => {
    return {
        type: 'LOGIN_USER',
        payload: axios({
            method: 'POST',
            url: process.env.REACT_APP_URL + "/user/login",
            data: data,
        }),
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT_USER',
    };
};
export const getUser = () => {
    return {
        type: 'GET_USER',
        payload: axios({
            method: "GET",
            url: process.env.REACT_APP_URL + "/user"
        })
    }
}
export const postUser = (data) => {
    return {
        type: 'POST_USER',
        payload: axios({
            method: "POST",
            url: process.env.REACT_APP_URL + "/user/register",
            data: data
        })
    }
}

export const deleteUser = (UserId) => {
    return {
        type: 'DELETE_USER',
        payload: axios({
            method: 'DELETE',
            url: process.env.REACT_APP_URL + `/user/${UserId}`

        })


    }
}
