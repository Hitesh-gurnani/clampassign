import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { closeMenu, closeMenuLearn, handleMenuandWallet } from './connectWalletSlice';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {IoIosArrowBack} from 'react-icons/io'
import imga from '../src/assets/img1.svg'
import imga2 from '../src/assets/img2.svg'
function LearnMore() {
    const isLearnMoreOpen=useSelector((store)=>store.wallet.isLearnMoreOpen);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div>
        {
            isLearnMoreOpen && <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div class=" max-w-sm justify-center items-center p-4 w-full md:w-1/2   bg-white border border-gray-200 rounded-lg justify-center  shadow sm:p-6">
                <div className='flex justify-evenly '>
                <IoIosArrowBack className='h-7 w-7 cursor-pointer' onClick={()=>dispatch(handleMenuandWallet())}/>
            <h5 class=" m-auto mb-20 ml-15 text-base text-center font-bold text-gray-900 md:text-xl">
                What is a Wallet
                
            </h5>
            <AiOutlineCloseCircle className='h-7 w-7 cursor-pointer ' onClick={()=>dispatch(closeMenuLearn())} />
            </div>
            <div className='m-auto'>
            <div className='flex justify-center items-center mb-5'>
            <img src={imga} alt="" className='h-7 w-7'/>
           <div className='ml-3'>
                <div className='font-bold text-sm'>A Home for your Digital Assets</div>
                <p className=' text-slate-500 font-semibold  text-sm'>Wallets are used to send, receive, store, and display digital assets like <br/> Ethereum and NFTs.</p>
            </div>
           </div>
           <div className='flex justify-center items-center'>
            <img src={imga2} alt="" className='h-7 w-7'/>
           <div className='ml-3'>
                <div className='font-bold text-sm'>A New Way to Log In</div>
                <p className=' text-slate-500 font-semibold  text-sm'>Instead of creating new accounts and passwords on every website, just <br /> connect your wallet.</p>
            </div>
            </div>
            <div className='flex flex-col m-auto justify-center items-center mt-12'>
            <button class="bg-black hover:bg-grey-800 text-white font-semibold py-1 px-1 font-sm rounded " >
        Get a wallet
        </button>
        <div className='font-bold text-sm cursor-pointer mt-5' >Learn more</div>
            </div>
          
           
           </div>
            
        </div>
        </div>
        }
        
    </div>
  )
}

export default LearnMore