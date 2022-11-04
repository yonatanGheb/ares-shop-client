import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getOneProduct } from '../api';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  let { id } = useParams();

  const getProducts = async () => {
    const product = await getOneProduct(id);
    console.log('product single', product);
    if (product.error) setSingleProduct(product.error);
    else setSingleProduct(product.data);
  };

  useEffect(() => {
    getProducts();
  }, [id]);

  return <ProductCard product={singleProduct} />;
};

export default ProductDetails;
