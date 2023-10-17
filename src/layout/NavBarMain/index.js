import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

function NavBar() {
    const router= useRouter()
    
    return (
        <div className='w-full  h-max bg-[url("/desktop5-2.svg")]   bg-cover bg-blend-multiply  bg-gradient-to-b from-[#17313a] to-[#282219]'>
            <div className="bg-[url('/nav.png')] bg-cover">
                <div className='w-[96%]  flex flex-col md:flex-row md:justify-between justify-center items-center pr-4'>
                <div className='h-max'>
                        <div className='w-[40%] h-[103px]  md:mt-0 md:w-1/2   cursor-pointer flex  items-center'>
                            <Image src='/Glowing Logo.png' alt='nav_image' className='!static' loading="lazy" fill   onClick={()=>router.push("/")} />
                            {/* <Image src='/mining.png' alt='nav_image' className='!static' fill loading="lazy"  /> */}
                            <p className='text-white uppercase font-medium md:text-4xl text-xl tracking-[10px] sm:tracking-[20px] md:tracking-[25px]'>CRYPTOLAND</p>
                        </div>
                    </div>
                    {/* <div className='text-[#78E9C3] text-2xl md:text-2xl lg:text-4xl font-normal text-center'>OWN. EARN. CONQUER</div> */}
                    <div className='text-[#fff] w-11/12 md:w-[40%] lg:w-[35%] flex justify-between items-center text-[3.5vw]'>
                        <button className={`hover:text-[#00FFF0] text-center NavMainTextShadow  md:text-base lg:text-[22px] font-normal   `} onClick={()=> router.push("https://community.cryptoland.io/welcome")}>MARKETPLACE</button>
                        <button className={`hover:text-[#00FFF0] text-center NavMainTextShadow md:text-base lg:text-[22px] font-normal   `} onClick={()=> router.push("https://arcade.cryptoland.io/")}>ARCADE</button>
                        <button className={`hover:text-[#00FFF0] text-center NavMainTextShadow md:text-base lg:text-[22px] font-normal  `} onClick={()=> router.push("https://community.cryptoland.io/")}>COMMUNITY</button>
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

export default NavBar
