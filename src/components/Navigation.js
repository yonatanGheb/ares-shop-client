import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { makeStyles } from '@mui/styles';
import { Avatar, Badge, Button, Divider, Menu, MenuItem } from '@mui/material';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../context/Context';

const Navigation = () => {
  const [isMenuOpen, setisMenuOpen] = React.useState(false);
  const { products, total } = useCart();
  const navigate = useNavigate();
  const classes = useStyles();
  const handleMouseOver = (event) => {
    products.length > 0 && setisMenuOpen(event.currentTarget);
  };

  const navigateToCheckout = () => {
    navigate('/checkout');
    setisMenuOpen(null);
  };
  const handleClose = () => {
    setisMenuOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: '50px' }}>
      <AppBar sx={{ backgroundColor: '#1F3362' }} position="sticky">
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
              <ShoppingCartIcon color="red" height={40} />
            </Badge>
          </IconButton>
          <Menu
            sx={{ maxWidth: 400, padding: 30 }}
            PaperProps={{
              style: {
                padding: '40px'
              }
            }}
            className={classes.dropdown}
            anchorEl={isMenuOpen}
            keepMounted
            open={Boolean(isMenuOpen)}
            onClose={handleClose}>
            {products.map((product, i) => {
              return (
                <MenuItem key={i} divider classes={classes.menuItem} onClick={navigateToCheckout}>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={product.image} />
                  </ListItemAvatar>
                  <Typography sx={{}} variant="body1" noWrap>
                    {product.title}
                  </Typography>
                  <Typography sx={{}} variant="body1">
                    {product.price}€
                  </Typography>
                </MenuItem>
              );
            })}
            <Box mb={2} mt={2} sx={{}} display="flex" justifyContent="space-between">
              <Typography fontWeight={500} variant="h6">
                Total
              </Typography>
              <Typography fontWeight={500} variant="h6">
                {total}
              </Typography>
            </Box>
            <Divider />
            <Button fullWidth onClick={navigateToCheckout} variant="contained">
              Go to checkout
            </Button>
          </Menu>

          {/*      <Menu
            className={classes.dropdown}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            {products.map((product, i) => {
              return <ListItem key={i} product={product} />;
            })}

            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Web Clipboard</ListItemText>
            </MenuItem>
          </Menu> */}
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
    root: {
      '&:hover': {
        backgroundColor: 'red !important',
        color: 'blue'
      }
    }
  }
});
