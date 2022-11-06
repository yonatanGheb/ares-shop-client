import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useLocation, useParams } from 'react-router';
import { getOneProduct } from '../api';
import ProductOverview from '../components/ProductOverview';

const useStyles = makeStyles({
  container: {
    width: '100%',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState({});
  let { id } = useParams();
  let location = useLocation();
  const classes = useStyles();

  const getProducts = async () => {
    const product = await getOneProduct(id);
    if (product.error) setSingleProduct(product.error);
    else setSingleProduct(product.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box className={classes.container}>
      <Grid container>
        <ProductOverview product={location.state ? location.state : singleProduct} />;
      </Grid>
    </Box>
  );
};

export default ProductDetails;
