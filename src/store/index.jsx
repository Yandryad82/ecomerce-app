import { configureStore } from '@reduxjs/toolkit'
import  categoryOffSlice  from './slices/categoryOff'
import  setQuantity  from './slices/IsCounterQuantity.slice'
import  isLoadingSlice  from './slices/isLoading'
import  isOpacitySlice from './slices/isOpacity'
import  loginSlice  from './slices/login.slice'
import  productsSlice  from './slices/poducts.slice'
import  productsCarSlice  from './slices/productsCar.slice'
import  setProductSelected  from './slices/productSelected.slice'
import  puchasesSlice  from './slices/puchases.slice'
import  setTotalCar  from './slices/totalValueCar.slice'
import  userNameSlaice  from './slices/userName.slaice'

export default configureStore({
    reducer: {
        isLoading: isLoadingSlice,
        products: productsSlice,
        categoryOff: categoryOffSlice,
        opacity: isOpacitySlice,
        puchases: puchasesSlice,
        productsCar: productsCarSlice,
        quantity: setQuantity,
        totalCar: setTotalCar, 
        productSelected: setProductSelected
    }
})
