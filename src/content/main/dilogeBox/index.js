import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function DilogeBox({display,open,setOpen}) {
    // console.log(display)
    return (
        
            <div className='  border-2 border-[#02d4dc] md:w-[332px] md:h-[400px] p-1  flex justify-center items-center h-auto w-auto  relative  '>
                <div className='absolute top-2 right-2 text-white cursor-pointer lg:hidden md:hidden block'>
                    <p className=' text-xl font-bold' onClick={()=>setOpen(false)}>x</p>
                </div>
                <div className='border-2 border-[#02d4dc] p-2 md:w-[310px] md:h-[380px] text-center flex flex-col justify-between'>
                    <div>
                    <p className='text-[#fff] font-normal text-lg pt-5'>In-Game action:</p>
                    <p className='text-[#44B6A1] font-medium md:text-2xl text-base uppercase '>{display.name}</p>
                    </div>
                    <div>
                        <Image src={"/106.png"} alt='' className='!static' fill/>
                    </div>
                    <p className='text-white font-normal md:text-xl text-xs text-center'>
                    {display.desc}
                    </p>
                 <Link href={display.url}>   <button className='mx-10 mb-5 text-[#fff] border-2 border-[#02d4dc] md:px-5 py-1 md:py-3 text-sm md:text-base lg:text-[20px] hover:text-[#fff] cursor-pointer   hover:bg-[#02d4dc] hover:rounded-[2.64px] duration-200 px-1 rounded-sm my-2'>CONTINUE</button> </Link>
                </div>
            </div>
        // </div>
    )
}

export default DilogeBox
