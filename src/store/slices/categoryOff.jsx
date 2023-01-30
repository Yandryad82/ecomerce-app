import { createSlice } from '@reduxjs/toolkit';

export const categoryOffSlice = createSlice({
    name: 'categoryOff',
    initialState: true,
    reducers: {
        setCategoryOff: (state, action) => {
            const categoryOff = action.payload;
            return categoryOff;
        }
    }
})

export const { setCategoryOff } = categoryOffSlice.actions;

export default categoryOffSlice.reducer;
