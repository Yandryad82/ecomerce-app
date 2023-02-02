import { createSlice } from '@reduxjs/toolkit';

export const productSelectedSlice = createSlice({
    name: 'productSelected',
    initialState: {},
    reducers: {
      setProductSelected: (state, action) => {
        const productSelected = action.payload;
        return productSelected
      }
    }
})

export const { setProductSelected } = productSelectedSlice.actions;

export default productSelectedSlice.reducer;
