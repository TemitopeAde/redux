import { actionType } from "../constants/action-type";

export const setProducts = (products) => {
    // console.log(products)
    return{
        type: actionType.SET_PRODUCTS,
        payload: products
    };
};

export const selectedProduct = (product) => {
    return {
        type: actionType.SELECTED_PRODUCT,
        payload: product
    }
}

export const cart = (product) => {
    // console.log(product)
    return {
        type: actionType.ADD_TO_CART,
        payload: product,
        
    }
}