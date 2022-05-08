import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
} from "./components/actions";

// reducer
export const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === DECREASE) {
    let newCart = [];
    if (action.payload.amount === 1) {
      newCart = state.cart.filter((items) => items.id !== action.payload.id);
      console.log(newCart);
    } else {
      newCart = state.cart.map((items) => {
        if (items.id === action.payload.id) {
          items = { ...items, amount: items.amount - 1 };
        }
        return items;
      });
    }

    return { ...state, cart: newCart };
  }

  if (action.type === INCREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }

  if (action.type === GET_TOTALS) {

    let products = state.cart.reduce((cartTotal, cartItem) => {
      const {amount, price} = cartItem
      console.log(amount, price)
      const itemTotal = price * amount

      cartTotal.amount += amount
      cartTotal.total += itemTotal

      return cartTotal
    },    
    {
      total: 0,
      amount: 0
    })
    
    let {total, amount} = products; 
    total = parseFloat(total.toFixed(2))

    return { ...state, total: total, amount: amount };
  }

  return state;
};
