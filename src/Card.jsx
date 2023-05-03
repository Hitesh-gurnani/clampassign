import React from 'react'
import imag from '../src/assets/DAI.svg'
import { toggleMenu } from './connectWalletSlice'
import { useDispatch } from 'react-redux';
import {AiOutlineRise} from 'react-icons/ai'
import {AiOutlineFall} from 'react-icons/ai'
function Card({element}) {
    const dispatch=useDispatch()
    console.log(element.indication)
  return (
    <div className='w-full justify-center gap-3 lg:gap-7 my-8 mx-1'>
        <div class="bg-white border shadow-md max-w-xs md:max-w-none overflow-hidden mx-5">
            <div className='flex flex-col justify-between '>
                <div>
                    <div className='flex'>
                    {
                    element.colors.map((el)=>{
                        return <div style={{'--color': el}}  className='bg-[--color] h-2 w-1/2'></div>
                    })
                }
                    </div>
                
                <div className='font-bold text-xl m-5'>{element.name}</div>
                <div className='flex justify-between m-2 mt-10'>
                {
                    <div className='m-3'>
                    <h3 className='text-xs m-1 text-slate-500 font-semibold'>Underling Tokens</h3>
                    <div className='flex '>
                        {
                            element.tokens.map((el)=>{
                               return <>
                            
                    <img src={el} alt="" className='w-6 h-6 m-1' />
                                </>
                            })
                        }
                    
                    </div>
                    
                    </div>
                }
                
                <div className='m-3 text-xs text-slate-500 font-semibold'>
                    <h3>Price change <br/> in (24 hrs) </h3>
                    <div className='text-lg text-black font-semibold flex justify-center items-center'>{element.price[0]=='-'?<AiOutlineFall/>:<AiOutlineRise/>} {element.price}</div>
                </div>
                </div>
                </div>
                <div className='bg-black'>
                {/* <blockquote class="max-w-2xl  mx-auto mb-4 bg-black"> */}
            <h3 class="text-lg text-center font-semibold text-gray-900 h-10  cursor-pointer dark:text-white" onClick={()=>dispatch(toggleMenu())}>Buy</h3>
{/*            
        </blockquote> */}
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Card