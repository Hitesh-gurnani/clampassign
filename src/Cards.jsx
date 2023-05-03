import React from 'react'
import Card from './Card'
import data from './data.js'
import ConnectWallet from './ConnectWallet'
import { useSelector } from 'react-redux';
import LearnMore from './LearnMore';
import Scanner from './Scanner';
function Cards() {
    const isMenuOpen = useSelector((store)=>store.wallet.isMenuOpen)
    const isLearnMoreOpen=useSelector((store)=>store.wallet.isLearnMoreOpen)
    const isScannerOpen=useSelector((store)=>store.wallet.isScannerOpen)
  return (
    <>
    <div className='border-2 rounded w-11/12 m-auto justify-center backdrop-blur-sm bg-white/30'>
        
        <h4 className='m-5 text-slate-500 font-semibold '>Buy any crypto index anytime, anywhere.  </h4>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1  '>
        
        {
            data.map((element)=>{
                return (
                <>
                  <Card element={element}/>
                </>
                )
            })
        }
       
    </div>
    </div>
    {isMenuOpen && <ConnectWallet/>}
    {isLearnMoreOpen && <LearnMore/>}
    {isScannerOpen && <Scanner/>}
  
    
    </>
  )
}

export default Cards