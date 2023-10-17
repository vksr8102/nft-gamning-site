import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

function RentNav() {
    const router = useRouter()
  return (
    <div className='w-full  h-max bg-[url("/desktop5-2.svg")]   bg-cover bg-blend-multiply  bg-gradient-to-b from-[#17313a] to-[#282219]'>
    <div className="bg-[url('/nav.png')] bg-cover">
        <div className='w-[96%]  flex flex-col md:flex-row md:justify-between justify-center items-center pr-4'>
        <div className='w-11/12 mt-1 md:mt-0 md:w-1/2  cursor-pointer flex gap-2  items-center pl-2'>
                <Image src='/Glowing Logo.png' alt='nav_image' className='!static' loading="lazy" height={100} width={100} onClick={()=>router.push("/main")} />
                {/* <Image src='/mining.png' alt='nav_image' className='!static' fill loading="lazy"  /> */}
                <p className='text-white uppercase md:text-4xl text-xl sm:text-2xl  tracking-[6px] md:tracking-[25px] flex gap-2 md:gap-4'>Collect <span>Rent</span> </p>
            </div>
            {/* <div className='text-[#78E9C3] text-2xl md:text-2xl lg:text-4xl font-normal text-center'>OWN. EARN. CONQUER</div> */}
            <div className='text-[#fff] w-11/12 md:w-[40%] lg:w-[35%] flex justify-between items-center text-[3.5vw]'>
                
            </div>
        </div>
    </div>
    <div>
        <div className='absolute  -translate-y-[12px] md:-translate-y-4 lg:-translate-y-3 h-9  w-full'>
            <Image src='/105.png' fill alt='' loading="lazy" className='' />
        </div>
    </div>

</div>
  )
}

export default RentNav