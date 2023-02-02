import { createSlice } from '@reduxjs/toolkit';

export const counterQuantitySlice = createSlice({
    name: 'quantity',
    initialState: 1,
    reducers: {
      setQuantity: (state, action) => {
        const quantity = action.payload;
        return quantity;
      }
    }
})

export const { setQuantity } = counterQuantitySlice.actions;

export default counterQuantitySlice.reducer;
