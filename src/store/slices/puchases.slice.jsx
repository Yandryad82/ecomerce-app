import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading';

export const puchasesSlice = createSlice({
    name: 'puchases',
    initialState: [],
    reducers: {
        setPuchases: (state, action) => {
            const puchases = action.payload;
            return puchases
        }
    }
})

export const getPuchasesThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/purchases/', getConfig())
    .then((res) => dispatch(setPuchases(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
}

export const purchasesCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post("https://e-commerce-api-v2.academlo.tech/api/v1/purchases",{} , getConfig())
        .then((res) => dispatch(getProductsCarthunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setPuchases } = puchasesSlice.actions;

export default puchasesSlice.reducer;
