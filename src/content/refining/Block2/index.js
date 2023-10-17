import Image from 'next/image'
import React, { useState } from 'react'

const backgroundImageStyle = {
    backgroundImage: `url("/Mining Screen 4.png")`,
    backgroundRepeat: 'no-repeat',
    
};
function Block2() {
    const [increment,setIncrement] = useState(0)
    const handleIncrement = ()=>{
        setIncrement(increment+5)
    }
    const handleDecrement = ()=>{
        if(increment >0){

            setIncrement(increment-5)
        }
    }
  return (
    <>
            <div className='bg-contain  m-[10px_47px] p-[91px_61px]  flex justify-between' style={backgroundImageStyle}>
                <div className='h-[100vh] overflow-scroll scroll-hide'>
                    <div className='flex items-center '>
                        <div className=''>
                            <Image src="/Refining Screen 2.png"  alt=""  height={93} width={93}  />
                        </div>
                        <div className='relative'>
                            <Image src="/Group 18.svg"  alt="" className='' height={31} width={216}  />
                            <p className='absolute right-4 top-[-3px] Balthazar uppercase text-[#00CDD5] text-[25px]'>Foreman</p>
                        </div>
                    </div>
                    <div className='flex items-center py-1'>
                        <div className=''>
                            <Image src="/Refining Screen 3.png"  alt=""  height={93} width={93}  />
                        </div>
                        <div className='relative'>
                            <Image src="/Group 18.svg"  alt="" className='' height={31} width={216}  />
                            <p className='absolute right-4 top-[-3px] Balthazar uppercase text-[#00CDD5] text-[25px]'>Miner</p>
                        </div>
                    </div>
                    <div className='flex  items-center py-1'>
                        <div className=''>
                            <Image src="/In-Game Actions Screen 16.png"  alt=""  height={93} width={93}  />
                        </div>
                        <div className='relative'>
                            <Image src="/Group 18.svg"  alt="" className='' height={31} width={216}  />
                            <p className='absolute right-4 top-[-3px] Balthazar uppercase text-[#00CDD5] text-[25px]'>Miner</p>
                        </div>
                    </div>
                    <div className='flex  items-center py-1 '>
                        <div className=''>
                            <Image src="/In-Game Actions Screen 17.png"  alt=""  height={93} width={93}  />
                        </div>
                        <div className='relative '>
                            <Image src="/Group 18.svg"  alt="" className='' height={31} width={216}  />
                            <p className='absolute right-5 top-[-3px]  Balthazar uppercase text-[#00CDD5] text-[25px]'>Miner</p>
                        </div>
                    </div>
                    <div className='flex  items-center '>
                        <div className=''>
                            <Image src="/03 29.png"  alt=""  height={93} width={93}  />
                        </div>
                        <div className='relative'>
                            <Image src="/Group 18.svg"  alt="" className='' height={31} width={216}  />
                            <p className='absolute right-4 top-[-3px] Balthazar uppercase text-[#00CDD5] text-[25px]'>Miner</p>
                        </div>
                    </div>
                    <div className='flex  items-center '>
                        <div className=''>
                            <Image src="/03 29.png"  alt=""  height={93} width={93}  />
                        </div>
                        <div className='relative'>
                            <Image src="/Group 18.svg"  alt="" className='' height={31} width={216}  />
                            <p className='absolute right-4 top-[-3px] Balthazar uppercase text-[#00CDD5] text-[25px]'>Miner</p>
                        </div>
                    </div>
                    <div className='flex  items-center '>
                        <div className=''>
                            <Image src="/03 29.png"  alt=""  height={93} width={93}  />
                        </div>
                        <div className='relative'>
                            <Image src="/Group 18.svg"  alt="" className='' height={31} width={216}  />
                            <p className='absolute right-4 top-[-3px] Balthazar uppercase text-[#00CDD5] text-[25px]'>Miner</p>
                        </div>
                    </div>
                    <div className='flex  items-center '>
                        <div className=''>
                            <Image src="/03 29.png"  alt=""  height={93} width={93}  />
                        </div>
                        <div className='relative'>
                            <Image src="/Group 18.svg"  alt="" className='' height={31} width={216}  />
                            <p className='absolute right-4 top-[-3px] Balthazar uppercase text-[#00CDD5] text-[25px]'>Miner</p>
                        </div>
                    </div>
                </div>
                <div className='h-[100vh] flex justify-center items-center'>
                <Image src="/03 26.png"  alt=""  height={207} width={195}  />
                </div>
                <div>
                    <p className='text-2xl text-white pt-[30px]'>
                        5%
                    </p>
                    <p className='text-2xl text-white py-[30px]'>
                        5%
                    </p>
                    <p className='text-2xl text-white py-[30px]'>
                        5%
                    </p>
                    <p className='text-2xl text-white py-[30px]'>
                        5%
                    </p>
                    <p className='text-2xl text-white py-[30px]'>
                        5%
                    </p>
                </div>
                <div>
                    <p className='text-2xl text-white pt-[30px]'>
                        5%
                    </p>
                    <p className='text-2xl text-white py-[30px]'>
                        5%
                    </p>
                    <p className='text-2xl text-white py-[30px]'>
                        5%
                    </p>
                    <p className='text-2xl text-white py-[30px]'>
                        5%
                    </p>
                    <p className='text-2xl text-white py-[30px]'>
                        5%
                    </p>
                </div>
                <div>
                    <p className='text-[25px] uppercase text-[#00CDD5] text-center Balthazar'>Available Cryptopium <br/>ORE  FOR REFINING:</p>
                    <p className='text-[31px]  text-white text-center Balthazar'>547 Cryptopium Ore</p>
                    <p className='text-[24px] uppercase text-[#00CDD5] text-center Balthazar pt-[83px] '>How MUCH WOULD  <br/>YOU LIKE TO REFINE?</p>
                    <div className='flex justify-center py-1 gap-2 mb-10 '>
                    <div className='bg-[#666666] p-2 border-2 border-white flex justify-center items-center  '>
                        <p>{increment}<span className=' text-classic '>/545</span></p>
                    </div>
                    <div className='flex-col flex gap-2 ' >
                    <div className=' clip-trangle bg-white p-[4px_8px] flex justify-center items-center cursor-pointer' onClick={handleIncrement}>
                        <p className='text-xs'>+5</p>
                    </div>
                    <div className=' clip-trangle bg-[#FF6767] p-[4px_8px]  rotate-180 flex justify-center items-center cursor-pointer' onClick={handleDecrement}>
                        <p className=' rotate-180 text-xs' >+5</p>
                    </div>
                    </div>
                    
                    </div>
                <div className='flex flex-col items-center gap-2'>
                    <p className=" text-classic uppercase text-2xl">REFINE NOW!</p>
                    <img src="/03 27.png" alt="" />
                </div>    
                </div>
                
            </div>
            <div className='w-full'>
<img src='/In-Game Actions Screen 8.png' className='h-[53px]'/>
   </div>
        </>
  )
}

export default Block2
