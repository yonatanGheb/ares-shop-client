import React from 'react';
import useCart from '../context/Context';

const Cart = () => {
  const { products, addProductToCart, removeProductFromCart } = useCart();
  return (
    <div>
      {products.map((product) => {
        return <h1>{product.title}</h1>;
      })}
    </div>
  );
};

export default Cart;
