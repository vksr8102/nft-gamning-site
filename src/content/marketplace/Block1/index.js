import Image from 'next/image'
import React from 'react'


function Block1() {
    return (
        <div className='w-full h-screen md:h-max flex justify-center items-center relative'>
            <div className='h-screen md:h-max flex justify-start md:justify-between md:items-center bg-gradient-to-t from-[#000]  w-full'>
                <div className='hidden md:flex w-full '>
                    <Image src="/1010.png" fill alt='' loading="lazy" className='!static' />
                </div>
                <div className='lg:!top-0 absolute w-full h-screen flex justify-center items-center'>
                    <div className="flex flex-col justify-evenly">
                        <div className='brightness-105'>
                            <Image src="/015.png" fill loading="lazy" alt='' className='!static' />
                        </div>
                        <div className=''>
                                    <div className='  h-full  text-center w-11/12'>
                                        <p className='text-[#fff] text-[1.5rem] md:text-[36px] font-bold'>7 to 10 days</p>
                                        <p className='text-[#fff] text-[1.8rem] md:text-[56px] font-bold  text-center homePageTextShadow'>COMING SOON...</p>
                                    </div>
                        </div>
                    </div>

                </div>

 
           
                <div className='hidden md:flex w-full'>
                    <Image src="/011.png" fill loading="lazy" alt='' className='!static' />
                </div>
            </div>
            <div className='w-full absolute !-bottom-10 z-10 mt-[400px] lg:-mt-0 md:flex   '>
                <Image src='/012.png' alt='' fill loading="lazy" className='!static' />
            </div>
        </div>
    )
}

export default Block1
