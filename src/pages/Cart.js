import { Button, Grid } from '@mui/material';
import React from 'react';
import { postOrder } from '../api';
import ProductCard from '../components/ProductCard';
import useCart from '../context/Context';

const Cart = () => {
  const { products, addProductToCart, removeProductFromCart } = useCart();
  const postOrderToDatabase = async () => {
    const data = {
      createdAt: new Date().toLocaleString(),
      order: products
    };
    await postOrder(data);
  };

  return (
    <Grid container>
      {products.map((product, i) => {
        return <ProductCard key={i} product={product} />;
      })}
      <Button onClick={postOrderToDatabase} variant="contained">
        Finalize order
      </Button>
    </Grid>
  );
};

export default Cart;
