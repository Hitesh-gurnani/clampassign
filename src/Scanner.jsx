import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleMenuandScanner, handleMenuandScannerClose } from './connectWalletSlice';
import {IoIosArrowBack} from 'react-icons/io'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import QRcode from 'react-qr-code'

function Scanner() {
    const dispatch=useDispatch();
    const isScannerOpen=useSelector((store)=>store.wallet.isScannerOpen);
    const selectedWallet=useSelector((store)=>store.wallet.selectedWallet)
    const [qrimage,setqrimage]=useState("")
    useEffect(()=>{
        setqrimage(selectedWallet)
    },[])
  return (
    <div>
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div class=" max-w-sm justify-center items-center p-4 w-1/2 bg-white border border-gray-200 rounded-lg justify-center  shadow sm:p-6">
            <div className='flex justify-evenly '>
            <IoIosArrowBack className='h-7 w-7 cursor-pointer' onClick={()=>dispatch(handleMenuandScannerClose())}/>
        <h5 class=" m-auto mb-10 ml-15 text-base text-center font-bold text-gray-900 md:text-xl">
            Scan with {selectedWallet}
        </h5>
        <AiOutlineCloseCircle className='h-7 w-7 cursor-pointer ' onClick={()=>dispatch(handleMenuandScannerClose())} />
        </div>
        <div className='flex justify-center items-center'>
        <QRcode size="250" value={qrimage}></QRcode>
        </div>
       
            <hr class="h-px  my-8 bg-gray-400 border-0 dark:bg-gray-300"/>
      
        <div className='flex justify-between'>
            <a href="#" class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                
                Dont have a {selectedWallet}?</a>
                <button class="bg-[#dadce1] hover:bg-grey-800 text-black font-semibold px-2 py-1 font-sm rounded " >
        Get
        </button>
        </div>
    </div>
  
    </div>
   
        
    </div>
  )
}

export default Scanner