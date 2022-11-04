import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        border: '2px black solid',
        height: '500px',
        width: '500px'
      }}>
      <Link to={`/${product.id}`}>
        <h3>Title: {product.title}</h3>
      </Link>
      <Button variant="contained">TEst</Button>
      <p>Desc: {product.description}</p>
      <img style={{ width: 200, height: 300 }} src={product.image} />
      <p>Price: {product.price}</p>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object
};

export default ProductCard;
