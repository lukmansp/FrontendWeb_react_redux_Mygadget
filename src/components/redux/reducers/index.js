import { combineReducers } from 'redux';
import products from './product'
import cart from './cart'
import user from './user'
export default combineReducers({
    products,
    user,
    cart
});