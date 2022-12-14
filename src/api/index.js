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

export const postOneOrder = async (order) => {
  return await resolve(
    axios.post(`https://ares-server.herokuapp.com/order/`, order).then((res) => res.data)
  );
};
