import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import useCart from '../context/Context';
const Navigation = () => {
  const { products } = useCart();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography color="secondary" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ unset: 'all' }} to={'/'}>
              ares-webshop
            </Link>
          </Typography>
          <Link to={'/cart'}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={products.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
