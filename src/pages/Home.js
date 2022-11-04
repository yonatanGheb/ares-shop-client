import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../api';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);

  const getProducts = async () => {
    const allProducts = await getAllProducts();
    if (allProducts.error) setAllProducts(allProducts.error);
    else setAllProducts(allProducts.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const renderAllProducts = () => {
    return (
      allProducts && allProducts.map((product, i) => <ProductCard key={i} product={product} />)
    );
  };

  return (
    <>
      <Grid container spacing={3}>
        {renderAllProducts()}
      </Grid>
    </>
  );
};

export default Home;
