import { createSlice } from '@reduxjs/toolkit';

export const userNameSlaice = createSlice({
    name: 'userName',
    initialState: 'Yandry',
    reducers: {

    }
})

export const {  } = userNameSlaice.actions;

export default userNameSlaice.reducer;
