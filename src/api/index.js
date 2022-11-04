import axios from 'axios';
import { resolve } from './fetchWrapper';

export const getAllProducts = async () => {
  return await resolve(axios.get(`https://fakestoreapi.com/products`).then((res) => res.data));
};
export const getOneProduct = async (id) => {
  return await resolve(
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => res.data)
  );
};
