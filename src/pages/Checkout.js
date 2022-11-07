import React, { useState } from 'react';
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
import { postOneOrder } from '../api';
import useCart from '../context/Context';
import SuccessModal from '../components/SuccessModal';
import { Puff } from 'react-loader-spinner';

const Checkout = () => {
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [urlToOrder, setUrlToOrder] = useState(false);
  const { products, removeProductFromCart, total, clearCart } = useCart();
  const classes = useStyles();

  const toggleModal = (bool) => {
    setOpenSuccessModal(bool);
  };

  const postOrderToDatabase = async () => {
    setLoading(true);
    const data = {
      createdAt: new Date().toLocaleString(),
      order: products
    };
    const order = await postOneOrder(data);
    if (!order.error) {
      setUrlToOrder(order.data);
      toggleModal(true);
      clearCart();
      setLoading(false);
    } else {
      setLoading(false);
      console.log('An error occurred while creating an order', order.error);
    }
  };

  const deleteProduct = (product) => {
    removeProductFromCart(product);
  };

  const CheckoutButton = () => {
    if (loading) {
      return (
        <Button fullWidth disabled variant="contained">
          <Puff
            height="30"
            width="30"
            radisu={1}
            color="#4fa94d"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </Button>
      );
    } else {
      return (
        <Button fullWidth onClick={postOrderToDatabase} variant="contained">
          Chekout
        </Button>
      );
    }
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
                  Find items to fill your empty shopping cart....😢
                </Typography>
              )}
            </List>
          </Box>
        </Grid>
        <Grid sx={{}} item xs={12} sm={4}>
          <Paper
            sx={{
              padding: '30px',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column'
            }}>
            <Typography textAlign="left" fontWeight={600} variant="h6">
              Overview
            </Typography>
            <Divider />

            <Box mb={2} mt={2} sx={{}} display="flex" justifyContent="space-between">
              <Typography fontWeight={500} variant="h6">
                Total
              </Typography>
              <Typography fontWeight={500} variant="h6">
                {total}€
              </Typography>
            </Box>
            <CheckoutButton />
          </Paper>
        </Grid>
        <SuccessModal data={urlToOrder} open={openSuccessModal} toggleModal={toggleModal} />
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
