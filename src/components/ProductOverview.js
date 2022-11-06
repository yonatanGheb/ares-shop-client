import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // ES6
import { Grid, CardActionArea, CardActions, ButtonBase } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ReactStars from 'react-rating-stars-component';
import useCart from '../context/Context';

const useStyles = makeStyles({
  cardActionsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0px 10px 10px 10px ',
    padding: 0
  },
  cardContainer: {
    ':hover': {
      boxShadow: 0,
      border: '1px red solid'
    }
  },
  focus: {
    '&&&': {
      background: 'transparent'
    }
  },
  addButton: {
    backgroundColor: '#48a779 !important',
    borderRadius: '5px !important',
    color: '#fff',
    height: '30px',
    width: '30px',
    zIndex: 900
  },
  removeButtom: {
    backgroundColor: '#f44336 !important',
    borderRadius: '5px !important',
    color: '#fff',
    height: '30px',
    width: '30px',
    zIndex: 900
  }
});
const ProductOverview = ({ product }) => {
  const [isInCart, setIsInCart] = useState(false);
  const { products, addProductToCart, removeProductFromCart } = useCart();

  const classes = useStyles();

  useEffect(() => {
    console.log('product', product);
    const productIsInCart = products.find((currentProduct) => currentProduct.id === product.id);
    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products]);

  const handleCardAction = () => {
    if (isInCart) {
      removeProductFromCart(product);
    } else {
      addProductToCart(product);
    }
  };

  const renderActionButton = () => {
    return !isInCart ? (
      <ButtonBase onClick={handleCardAction} className={classes.addButton}>
        <AddIcon color="#fff" />
      </ButtonBase>
    ) : (
      <ButtonBase onClick={handleCardAction} className={classes.removeButtom}>
        <RemoveIcon color="#fff" />
      </ButtonBase>
    );
  };

  return (
    <Grid
      sx={{
        width: '100%',
        height: '100%'
      }}
      item
      xs={12}
      sm={12}>
      <Card sx={{}} className={classes.cardContainer1}>
        <CardActionArea
          sx={{ margin: 0, pointerEvents: 'none' }}
          classes={{ focusHighlight: classes.focus }}>
          <CardMedia
            component="img"
            height="240"
            image={product.image}
            sx={{
              objectFit: 'contain',
              backgroundColor: '#fff',
              backgroundPosition: 'center center'
            }}
          />
          <CardContent sx={{ margin: 0, padding: '20px 18px 10px 18px' }}>
            <Typography gutterBottom variant="body1" component="div">
              {product.category}
            </Typography>
            <Typography
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '1',
                WebkitBoxOrient: 'vertical',
                margin: 0
              }}
              gutterBottom
              variant="h6"
              component="div">
              {product.title}
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
              {product.description}
            </Typography>
            <Typography
              sx={{
                margin: 0
              }}
              variant="body1"
              color="text.secondary">
              {product.price}€
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActionsContainer}>
          <ReactStars
            isHalf={true}
            count={5}
            value={product.rating ? product.rating.rate : 0}
            size={20}
            activeColor="#FFD559"
            edit={false}
          />
          {renderActionButton()}
        </CardActions>
      </Card>
    </Grid>
  );
};

ProductOverview.propTypes = {
  product: PropTypes.object
};

export default ProductOverview;
