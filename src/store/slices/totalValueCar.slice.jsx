import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useEffect } from 'react';
import getConfig from '../../utils/getConfig';
import { getProductsCarthunk } from './productsCar.slice';

export const totalValueCarSlice = createSlice({
    name: 'totalCar',
    initialState: {},
    reducers: {
      setTotalCar: (state, action) => {
        const totalCar = action.payload;
        return totalCar;
      } 
    }
})


export const { setTotalCar } = totalValueCarSlice.actions;

export default totalValueCarSlice.reducer;
