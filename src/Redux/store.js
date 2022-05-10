import { createStore } from "redux";
import {cartProducts} from '../Data/data';
import { reducer } from "../reducer";


const initData = {
    total: 0,
    amount: 0,
    cart: cartProducts
}

export const store = createStore(reducer, initData)