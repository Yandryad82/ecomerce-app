import { createSlice } from '@reduxjs/toolkit';

export const isOpacitySlice = createSlice({
    name: 'opacity',
    initialState: '',
    reducers: {
        setOpacity: (state, action) => {
            const opacity = action.payload;
            return opacity;
        }
    }
})

export const { setOpacity } = isOpacitySlice.actions;

export default isOpacitySlice.reducer;
