import React, { createContext, useContext, useReducer } from 'react';
import { cartReducer, initialState } from './reducer';

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addProductToCart = (product) => {
    const updatedCart = state.products.concat(product);
    console.log('Add to cart', updatedCart);
    updateTotalPrice(updatedCart);
    dispatch({
      type: 'ADD_ONE_ITEM_TO_CART',
      payload: {
        products: updatedCart
      }
    });
  };

  const removeProductFromCart = (product) => {
    const updatedCart = state.products.filter((currentProduct) => {
      return currentProduct.title !== product.title;
    });
    updateTotalPrice(updatedCart);
    dispatch({
      type: 'REMOVE_ONE_ITEM_FROM_CART',
      payload: {
        products: updatedCart
      }
    });
  };
  const updateTotalPrice = (products) => {
    const total = products.reduce((totalPrice, product) => (totalPrice += product.price), 0);
    dispatch({
      type: 'UPDATE_TOTAL_PRICE',
      payload: {
        total: total.toFixed(2)
      }
    });
  };

  return (
    <>
      <CartContext.Provider
        value={{
          total: state.total,
          products: state.products,
          addProductToCart,
          removeProductFromCart
        }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

export default useCart;
