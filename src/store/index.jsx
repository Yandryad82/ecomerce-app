import { configureStore } from '@reduxjs/toolkit'
import  isLoadingSlice  from './slices/isLoading'
import  loginSlice  from './slices/login.slice'
import  productsSlice  from './slices/poducts.slice'
import  userNameSlaice  from './slices/userName.slaice'

export default configureStore({
    reducer: {
        isLoading: isLoadingSlice,
        products: productsSlice
    }
})
