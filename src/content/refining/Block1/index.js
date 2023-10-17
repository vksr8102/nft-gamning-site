import Image from 'next/image'
import React from 'react'

function Block1() {
  return (
    <div className="w-full   h-max bg-[url('/nav.png')] bg-cover  flex justify-center">
            <div className="backdrop-brightness-50 w-full h-max  mt-0 flex justify-center items-center" >
                <div className='w-[96%] border-b-2 md:-mt-4 lg:border-b-4 border-[#00CDD5] flex justify-start items-center pr-4'>
                    <div className='w-[8%]'>
                        <Image src="/In-Game Actions Screen 15.png" fill alt='' className='!static'/>
                    </div>
                    <div className='w-1/2'>
                     <Image src='/refining.png' fill  alt='nav_image' className='!static'  />                     
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Block1
