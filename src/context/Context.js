import React, { createContext, useContext, useReducer, useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // ES6
import { getAllProducts } from '../api';
import { cartReducer, initializer, initialState } from './reducer';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, initializer);
  const [allProducts, setAllProducts] = useState([]);

  // Set cart state to local storage for persistence
  useEffect(() => {
    localStorage.setItem('localCart', JSON.stringify(state));
  }, [state]);

  // Reducer function ->  Add one product to cart
  const addProductToCart = (product) => {
    const updatedCart = state.products.concat({ ...product, qty: 1 });
    console.log(updatedCart, 'updatedCart qty');
    updateTotalPrice(updatedCart);
    dispatch({
      type: 'ADD_ONE_ITEM_TO_CART',
      payload: {
        products: updatedCart
      }
    });
  };

  // Reducer function ->  Remove one product from cart
  const removeProductFromCart = (product) => {
    const updatedCart = state.products.filter((currentProduct) => {
      return currentProduct.id !== product.id;
    });
    updateTotalPrice(updatedCart);
    dispatch({
      type: 'REMOVE_ONE_ITEM_FROM_CART',
      payload: {
        products: updatedCart
      }
    });
  };

  // Reducer function ->  Calculate total price of products.
  // Called every time a product gets added or removed from the cart.
  const updateTotalPrice = (products) => {
    const total = products.reduce((totalPrice, product) => (totalPrice += product.price), 0);
    dispatch({
      type: 'UPDATE_TOTAL_PRICE',
      payload: {
        total: total.toFixed(2)
      }
    });
  };

  // Reducer function ->  Clear cart.
  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
      payload: {
        ...initialState
      }
    });
  };

  // Get all products
  const getProducts = async () => {
    const allProducts = await getAllProducts();
    if (allProducts.error) setAllProducts(allProducts.error);
    else setAllProducts(allProducts.data);
  };

  // Get all products on first load of app
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <CartContext.Provider
        value={{
          total: state.total,
          products: state.products,
          productsList: allProducts,
          addProductToCart,
          removeProductFromCart,
          clearCart
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

CartProvider.propTypes = {
  children: PropTypes.element
};
export default useCart;
