import React from 'react';
import {
  Avatar,
  Button,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
  ListItemButton,
  ListItemIcon,
  Divider,
  Box
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@mui/styles';
import { postOrder } from '../api';
import useCart from '../context/Context';

const Checkout = () => {
  const { products, removeProductFromCart, total, clearCart } = useCart();
  const classes = useStyles();
  const postOrderToDatabase = async () => {
    // Post order to server
    // Clear cart
    const data = {
      createdAt: new Date().toLocaleString(),
      order: products
    };
    const order = await postOrder(data);

    console.log('order', order);
    clearCart();
  };

  const deleteProduct = (product) => {
    console.log('Product in click', product);

    removeProductFromCart(product);
  };
  return (
    <Box className={classes.container}>
      <Grid spacing={3} container>
        <Grid item xs={12} sm={8}>
          <Box sx={{ width: '100%', bgcolor: 'background.paper', padding: '10px' }}>
            <List>
              {products.length > 0 ? (
                products.map((product, i) => {
                  return (
                    <ListItem key={i}>
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={product.image} />
                      </ListItemAvatar>
                      <ListItemText sx={{ width: '100%' }} primary={product.title} />

                      <ListItemText
                        sx={{ width: '30%', textAlign: 'center' }}
                        primary={product.price + '€'}
                      />
                      <ListItemButton onClick={() => deleteProduct(product)} sx={{ width: '10%' }}>
                        <ListItemIcon>
                          <DeleteIcon color="danger" />
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                  );
                })
              ) : (
                <Typography textAlign="left" fontWeight={400} variant="h6">
                  Shop items to fill your shopping cart
                </Typography>
              )}
            </List>
          </Box>
        </Grid>
        <Grid sx={{}} item xs={12} sm={4}>
          <Paper
            sx={{
              padding: '10px',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column'
            }}>
            <Typography textAlign="left" fontWeight={400} variant="h5">
              Overview
            </Typography>
            <Divider />

            <Box mb={2} mt={2} sx={{}} display="flex" justifyContent="space-between">
              <Typography fontWeight={500} variant="h6">
                Total
              </Typography>
              <Typography fontWeight={500} variant="h6">
                {total}
              </Typography>
            </Box>
            <Button fullWidth onClick={postOrderToDatabase} variant="contained">
              Chekout
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Checkout;

const useStyles = makeStyles({
  container: {
    width: '100%',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '20px'
  }
});
