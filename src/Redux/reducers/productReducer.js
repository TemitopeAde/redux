import { actionType } from "../constants/action-type";

const initState = {
  products: [],
};

const initialCart = {
  cartItems: [],
};

export const productReducer = (state = initState, action) => {
  const { type, payload } = action;

  if (type === actionType.SET_PRODUCTS) {
    return { ...state, products: payload };
  }

  return state;
};

export const cartReducer = (state = initialCart, action) => {
  const {type, payload} = action
  
  if (type === actionType.ADD_TO_CART) {
    console.log(state)
    return { ...state, cartItems: payload };
  }
  return state
};

export const selectedProductReducer = (state = {}, action) => {
  const { type, payload } = action;

  if (type === actionType.SELECTED_PRODUCT) {
    return { ...state, ...payload };
  }

  return state;
};


