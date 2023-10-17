import React from 'react'

function Block2() {
  return (
    <div className='w-full h-screen md:h-max flex justify-center items-center relative'>
            <div className='h-max flex justify-center items-center bg-gradient-to-t from-[#000] '>
                    <div className='hidden md:flex'>
                        <img src="/desktop5-1010.svg" alt='' className=''/>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3  md:w-max lg:w-[30%] h-full -trasnslate-y-10 md:translate-y-0 bg-blend-multiply'>
                        <img src="/desktop5-015.svg" alt='' className='brightness-105 w-max'/>
                        <button className='w-1/2 md:w-full bg-[#12110f] text-[#fff] border-2 border-[#78E9C3] py-2 text-lg hover:text-[#fff] cursor-pointer hover:font-semibold hover:bg-[#78E9C3] rounded-[2.64px] duration-200'>ENTER THE GAME</button>
                    </div>
                    <div className='hidden md:flex'>
                        <img src="/desktop5-011.svg" alt='' className=''/>
                    </div>
            </div>
            <img src='/desktop5-012.svg' alt='' className='absolute z-10 translate-y-48 hidden md:flex'/>
    </div>
  )
}

export default Block2
