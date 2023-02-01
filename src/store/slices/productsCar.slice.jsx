import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading';

export const productsCarSlice = createSlice({
    name: 'productsCar',
    initialState: [],
    reducers: {
      setProductsCar: (state, action) => {
        const productsCar = action.payload;
        return productsCar
    }
   }
})

export const getProductsCarthunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/cart', getConfig())
        .then((res) => dispatch(setProductsCar(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setProductsCar } = productsCarSlice.actions;

export default productsCarSlice.reducer;
