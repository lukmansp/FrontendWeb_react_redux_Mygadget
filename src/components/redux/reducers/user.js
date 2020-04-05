const initialState = {
    isAuthenticated: false,
    user: [],
    persistLogin: {}
}
const user = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'LOGIN_USER_PENDING':
            return {
                ...state,
                isAuthenticated: false,
                persistLogin: {}
            }
        case 'LOGIN_USER_REJECTED':
            return {
                ...state,
                isAuthenticated: false,
                persistLogin: {}
            }
        case 'LOGIN_USER_FULFILLED':
            console.log('perslogin', state.persistLogin)
            return {
                ...state,
                isAuthenticated: true,
                persistLogin: action.payload.data
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                isAuthenticated: false,
                user: {}
            }
        case 'GET_USER_FULFILLED':
            return {
                ...state,
                user: action.payload.data.result
            }
        case 'GET_USER_PENDING':
            return {
                ...state
            }
        case 'GET_USER_REJECTED':
            return {
                ...state
            }

        case 'POST_USER_FULFILLED':
            const newDataUser = [...state.user, action.payload.data.result];
            return {
                ...state,
                user: newDataUser
            }
        case 'POST_USER_PENDING':
            return {
                ...state
            }
        case 'POST_USER_REJECTED':
            return {
                ...state
            }
        case 'DELETE_USER_FULFILLED':
            const newDataAfterDelete = state.user.filter(user => user.id !== action.payload.data.result)
            return {
                ...state,
                user: newDataAfterDelete
            }
        case 'DELETE_USER_PENDING':
            return {
                ...state
            }
        case 'DELETE_USER_REJECTED':
            return {
                ...state
            }
        //

        default:
            return state;
    }
}

export default user;