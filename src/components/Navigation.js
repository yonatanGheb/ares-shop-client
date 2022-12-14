import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { makeStyles } from '@mui/styles';
import { Avatar, Badge, Button, Divider, List, Menu } from '@mui/material';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../context/Context';

const Navigation = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const { products, total } = useCart();
  const navigate = useNavigate();
  const classes = useStyles();

  const handleMouseOver = (event) => {
    products.length > 0 && setisMenuOpen(event.currentTarget);
  };

  const navigateToCheckout = () => {
    navigate('/checkout');
    setisMenuOpen(false);
  };

  const handleClose = () => {
    setisMenuOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: '50px' }}>
      <AppBar sx={{ backgroundColor: '#050D2F' }} position="sticky">
        <Toolbar>
          <Typography color="secondary" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className={classes.linkStyles} to={'/'}>
              ares-test-shop
            </Link>
          </Typography>

          <IconButton
            onMouseOver={handleMouseOver}
            onClick={navigateToCheckout}
            size="large"
            aria-label="show 4 new mails"
            color="inherit">
            <Badge badgeContent={products?.length} color="error">
              <ShoppingCartIcon style={{ color: '#fff', height: '30px', width: '30px' }} />
            </Badge>
          </IconButton>
          <Menu
            sx={{ width: 400 }}
            PaperProps={{
              style: {
                padding: '20px 35px'
              }
            }}
            className={classes.dropdown}
            anchorEl={isMenuOpen}
            keepMounted
            open={Boolean(isMenuOpen)}
            onClose={handleClose}>
            <Box mb={4}>
              <Typography mb={1} variant="h6">
                You got {products.length} {products.length > 1 ? 'items' : 'item'} in your basket
              </Typography>
            </Box>
            {products.map((product, i) => {
              return (
                <>
                  {i == 0 && <Divider />}

                  <List
                    key={i}
                    divider
                    className={classes.listItemContainer}
                    onClick={navigateToCheckout}>
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={product.image} />
                    </ListItemAvatar>
                    <Typography sx={{ width: '70%' }} variant="body1" noWrap>
                      {product.title}
                    </Typography>
                    <Typography sx={{ width: '20%' }} variant="body1">
                      {product.price}???
                    </Typography>
                  </List>
                  <Divider />
                </>
              );
            })}
            <Box mb={4} mt={3} display="flex" justifyContent="space-between">
              <Typography fontWeight={800} variant="h5">
                Total
              </Typography>
              <Typography fontWeight={800} variant="h5">
                {total}
              </Typography>
            </Box>
            <Divider />
            <Button size="large" fullWidth onClick={navigateToCheckout} variant="contained">
              Proceed to checkout
            </Button>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;

const useStyles = makeStyles({
  linkStyles: {
    unset: 'all',
    textDecoration: 'none',
    color: '#fff'
  },
  menuItem: {
    '&:hover': {
      backgroundColor: 'red !important',
      color: 'blue'
    },
    root: {
      '&:hover': {
        backgroundColor: 'red !important',
        color: 'blue'
      }
    }
  },
  listItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
