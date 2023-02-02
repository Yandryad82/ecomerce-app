import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading';
import { getProductsCarthunk } from './productsCar.slice';
import { setProductSelected } from './productSelected.slice';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
      setProducts: (state, action) => {
        const products = action.payload;
        return products;
      } 
    }
})

export const getProductsThunk = () => (dispatch) => {
  dispatch(setIsLoading(true))
  axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/products')
  .then(res => dispatch(setProducts(res.data)))
  .finally(() => dispatch(setIsLoading(false)))
}

export const filterProductCategory = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`)
        .then((res) => dispatch(setProducts(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const filterProductSearch = (productsSearch) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${productsSearch}`)
        .then((res) => dispatch(setProducts(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const addCarthunk = (toCar) => (dispatch) => {
  console.log(toCar)
    dispatch(setIsLoading(true));
    return axios.post(`https://e-commerce-api-v2.academlo.tech/api/v1/cart`, toCar, getConfig())
        .then((res) => dispatch(getProductsCarthunk()))
        .finally(() => dispatch(setIsLoading(false)));
        
}

export const updateCarQuantityThunk = (quantity,id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.put(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`, quantity, getConfig())
        .then(() => dispatch(getProductsCarthunk()))
        .finally(() => dispatch(setIsLoading(false)));
}


export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
