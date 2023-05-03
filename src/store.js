import {configureStore} from '@reduxjs/toolkit'
import connectWalletSlice from './connectWalletSlice'
const store=configureStore({
    reducer:{
        wallet:connectWalletSlice
    }
})

export default store