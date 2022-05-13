import {combineReducers} from 'redux';
import { productReducer, selectedProductReducer, cartReducer } from './productReducer';

export const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cartProduct: cartReducer  
})