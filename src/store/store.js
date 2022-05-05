import React, { useContext, createContext, useReducer } from "react";

const initialState = {
  cart: [],
  total: 0,
};
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: payload.cart,
        total: payload.total,
      };
    case REMOVE_FROM_CART:
      const newCart = state.cart.filter((product) => product.id !== payload.id);
      return { ...state, cart: newCart, total: payload.total };
    case CLEAR_CART:
      return { ...state, cart: [], total: 0 };
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
