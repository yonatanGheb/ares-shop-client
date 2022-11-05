import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { getAllProducts } from '../api';
import ProductCard from '../components/ProductCard';

const useStyles = makeStyles({
  container: {
    width: '100%',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});
const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const classes = useStyles();

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
    <Box className={classes.container}>
      <Grid container spacing={3}>
        {renderAllProducts()}
      </Grid>
    </Box>
  );
};

export default Home;
