import React from 'react';
import { useContext, useEffect, useReducer, createContext } from 'react';
import { InitialContextState, CartProviderProps } from './ShoppingCartTypes.interface';

import reducer from './reducer';
import { CART_ITEMS } from './data';

const CartContext = createContext({} as InitialContextState);

const initialState = {
  loading: false,
  cart: CART_ITEMS,
  total: 0,
  amount: 0
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });
  const removeItem = (id: number) => dispatch({ type: 'REMOVE_ITEM', payload: id });
  const increaseAmount = (id: number) => {
    dispatch({ type: 'INCREASE_AMOUNT', payload: id });
  };

  const decreaseAmount = (id: number) => dispatch({ type: 'DECREASE_AMOUNT', payload: id });
  const reloadCart = () => dispatch({ type: 'RELOAD_CART', payload: CART_ITEMS });

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  const value = {
    ...state,
    clearCart,
    removeItem,
    increaseAmount,
    decreaseAmount,
    reloadCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCartContext = () => useContext(CartContext);

export { CartContext, CartProvider, useCartContext };
