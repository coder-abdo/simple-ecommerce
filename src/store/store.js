import React, { useContext, createContext, useReducer } from "react";

const initialState = {
  cart: [],
  total: 0,
};
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const ICREASE_QUANTITY = "ICREASE_QUANTITY";

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: payload.cart,
        total: payload.total,
      };

    case CLEAR_CART:
      return { ...state, cart: [], total: 0 };
    case DECREASE_QUANTITY:
    case ICREASE_QUANTITY:
      return { ...state, total: payload };
    default:
      return state;
  }
}
const CartContext = createContext(null);
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
