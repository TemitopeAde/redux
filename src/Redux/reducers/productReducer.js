import { actionType } from "../constants/action-type";


const initState = {

}

export const productReducer = (state=initState, action) => {
    const {type, payload} = action

    if (type === action.SET_PRODUCTS) {
        return state
    }

    return state
    
}