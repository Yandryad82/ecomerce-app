import { configureStore } from '@reduxjs/toolkit'
import  categoryOffSlice  from './slices/categoryOff'
import  isLoadingSlice  from './slices/isLoading'
import  isOpacitySlice from './slices/isOpacity'
import  loginSlice  from './slices/login.slice'
import  productsSlice  from './slices/poducts.slice'
import  userNameSlaice  from './slices/userName.slaice'

export default configureStore({
    reducer: {
        isLoading: isLoadingSlice,
        products: productsSlice,
        categoryOff: categoryOffSlice,
        opacity: isOpacitySlice
    }
})
