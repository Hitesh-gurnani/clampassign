import React from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu,toggleMenu } from './connectWalletSlice';

function Navbar() {
    const dispatch=useDispatch();
  return (
    <>
    <div className='flex justify-between m-5'>
        <div className='text-black font-semibold'>Clamp</div>
        <button class="bg-black hover:bg-grey-800 text-white font-semibold py-2 px-4 rounded" onClick={()=>dispatch(toggleMenu())}>
        Connect wallet
        </button>
    </div>
    <hr class="h-px my-8 bg-gray-400 border-0 dark:bg-gray-300"/>
      </>
  )
}

export default Navbar