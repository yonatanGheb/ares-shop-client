import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { Link } from 'react-router-dom';
import { Button, Grid, CardActionArea, CardActions, ButtonBase } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const useStyles = makeStyles({
  cardContainer: {
    height: '420px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center ',
    overflow: 'hidden',
    objectFit: 'contain',
    borderRadius: '30px',
    backgroundColor: 'Red',

    border: '1px red solid',

    width: '14px'
  }
});
const ProductCard = ({ product }) => {
  const classes = useStyles();
  return (
    /*  <Grid
      sx={{ backgroundImage: `url(${product.image})` }}
      className={classes.cardContainer}
      item
      xs={6}
      sm={3}>
      <Link to={`/${product.id}`}>
        <h3>Title: {product.title}</h3>
      </Link>
      <Button variant="contained">TEst</Button>
      <p>Desc: {product.description}</p>
      <p>Price: {product.price}</p>
      <p>Price: {product.price}</p>
      <img
        src={product.image}
        style={{
          height: '420px',
          width: '200px',

          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          objectFit: 'contain'
        }}
      />
    </Grid> */

    <Grid
      sx={{ maxHeight: 345, minHeight: 345, width: '100%', borderRadius: 20 }}
      item
      xs={12}
      sm={3}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            sx={{
              objectFit: 'contain',
              backgroundColor: 'black',
              backgroundPosition: 'center center'
            }}
          />
          <CardContent
            sx={{
              minHeight: '100px',
              maxHeight: '100px'
            }}>
            <Typography
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical'
              }}
              gutterBottom
              variant="h6"
              component="div">
              {product.title}
            </Typography>
            <Typography fontWeight={900} variant="h6" color="text.secondary">
              {product.price}€
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ButtonBase
            sx={{
              backgroundColor: 'green',
              borderRadius: '0px',
              color: '#fff',
              height: '30px',
              width: '30px'
            }}
            color="primary">
            <AddIcon color="#fff" />
          </ButtonBase>
          <ButtonBase
            sx={{
              backgroundColor: 'red',
              borderRadius: '0px',
              color: '#fff',
              height: '30px',
              width: '30px'
            }}
            color="primary">
            <RemoveIcon color="#fff" />
          </ButtonBase>
        </CardActions>
      </Card>
    </Grid>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object
};

export default ProductCard;
