import {createSlice} from '@reduxjs/toolkit'
const connectWalletSlice=createSlice({
    name:'connectWalletSlice',
    initialState:{
        isMenuOpen:false,
        isLearnMoreOpen:false,
        isScannerOpen:false,
        selectedWallet:''
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false
        },
        toggleMenuLearn:(state)=>{
            state.isLearnMoreOpen=!state.isLearnMoreOpen
        },
        closeMenuLearn:(state)=>{
            state.isLearnMoreOpen=false
        },
        handleMenuandWallet:(state)=>{
            state.isLearnMoreOpen=false
            state.isMenuOpen=true;
        },
        handleMenuandScanner:(state)=>{
            state.isScannerOpen=true;
            state.isMenuOpen=false;
        },
        handleMenuandScannerClose:(state)=>{
            state.isMenuOpen=true;
            state.isScannerOpen=false;
        },
        selectedWalletDetails:(state,action)=>{
            state.selectedWallet=action.payload
            state.isScannerOpen=true;
            state.isMenuOpen=false;
        }
    }
})

export default connectWalletSlice.reducer
export const{toggleMenu,closeMenu,selectedWalletDetails,toggleMenuLearn,closeMenuLearn,handleMenuandWallet,handleMenuandScanner,handleMenuandScannerClose} =connectWalletSlice.actions