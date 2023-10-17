import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Block2({display,open,setOpen}) {
    // console.log(display)
    return (
        
            <div className='bg-[#00000080] border-2 border-[#02d4dc]   w-[332px] h-[400px]  p-1  flex justify-center items-center   relative  '>
                <div className='absolute top-2 right-2 text-white cursor-pointer lg:hidden   block'>
                    <p className=' text-xl font-bold' onClick={()=>setOpen(false)}>x</p>
                </div>
                <div className='w-[310px] h-[380px] border-2 border-[#02d4dc] p-2   text-center flex flex-col justify-between'>
                    <div>
                    <p className='text-[#fff] font-normal text-lg pt-5'>In-Game action:</p>
                    <p className='text-[#44B6A1] font-medium   text-2xl uppercase '>{display.name}</p>
                    </div>
                    <div>
                        <Image src={"/106.png"} alt='' className='!static' fill/>
                    </div>
                    <p className='text-white font-normal text-xl text-center'>
                    {display.desc}
                    </p>
                 <Link href={display.url}>   <button className='mx-10 mb-5 mt-1 text-[#fff] border-2 border-[#02d4dc] px-5  py-3  text-[20px]   lg:text-[20px] hover:text-[#fff] cursor-pointer   hover:bg-[#02d4dc] hover:rounded-[2.64px] duration-200 rounded-sm '>CONTINUE</button> </Link>
                </div>
            </div>
        // </div>
    )
}

export default Block2
