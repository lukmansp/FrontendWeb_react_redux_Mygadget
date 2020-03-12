import { combineReducers } from 'redux';
import products from './product'
import carts from './cart'
import user from './user'
import order from './order'
export default combineReducers({
    products,
    user,
    carts,
    order
});