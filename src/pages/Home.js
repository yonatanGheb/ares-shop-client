import React, { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/Context';

const Home = () => {
  const classes = useStyles();
  const { productsList } = useContext(CartContext);

  const renderProductCards = () => {
    return (
      productsList && productsList.map((product, i) => <ProductCard key={i} product={product} />)
    );
  };

  return (
    <Box className={classes.container}>
      <Grid container spacing={3}>
        {renderProductCards()}
      </Grid>
    </Box>
  );
};

export default Home;

const useStyles = makeStyles({
  container: {
    width: '100%',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});
