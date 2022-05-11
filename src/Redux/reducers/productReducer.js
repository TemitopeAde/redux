import { actionType } from "../constants/action-type";


const initState = {
    products: [
        
    ]
}

export const productReducer = (state=initState, action) => {
    const {type, payload} = action

    if (type === actionType.SET_PRODUCTS) {
        return {...state, products: payload}
    }

    if (type === actionType.SELECTED_PRODUCT) {
        // console.log(payload)
        return {...state, products: payload}
    }

    return state
    
}


export const selectedProductReducer = (state={}, action) => {
    const {type, payload} = action;


    if (type === actionType.SELECTED_PRODUCT) {
        // console.log(payload)
        return {...state, ...payload}
    }

    return state




}

