import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import "../../../../styles/scroll.module.css"
import { Box, Dialog, Modal, Tooltip } from '@mui/material'
import Block2 from '../Block2'
import DilogeBox from '../dilogeBox'
import { useRouter } from 'next/router'
import useMediaQuery from '@mui/material/useMediaQuery';
import { mainApi } from '@/src/mockes/main'
import Loader from '@/src/components/Loader/Loader'
const style = {
    transform: 'translate(-50%, -50%)',
    width: {sm:530,md:530,xs:250},
    height:' auto',
    bgcolor: 'rgba(0, 0, 0, 0.50)',
      border: '2px solid #000',
    boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 1)',
    p: 4,
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    flexDirection: "column",
    
};

const ImgData = [
    {   
        i:1,
        id:1,
        img1: "/0217.png",
        img2: "/In-Game Action Icons/Mining Icon.png",
        text: "MINE",
        desc:"Toil the dangerous mines of CryptoLand to convert precious Cryptopium into CRYPTO that can be used to Forge Weapons, Merge Items, Raid, Govern and Rule.",
        opacity:100,
        url:"/mining"
        
    },
    {
        i:2,
        id:2,
        img1: "/0217.png",
        img2: "/In-Game Action Icons/RefineIcon.png",
        text: "REFINE",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        opacity: 30,
        url:"/refining"
    },
    {
        i:3,
        id:3,
        img1: "/0217.png",
        img2: "/In-Game Action Icons/Forge Icon.png",
        text: "FORGE",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        opacity:30,
        url:"/forging"
    },
    {
        i:4,
        id:4,
        img1: "/0217.png",
        img2: "/In-Game Action Icons/Govern Icon.png",
        text: "GOVERN",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        opacity:30,
        url:"/governing"
    },
    {
        i:5,
        id:5,
        img1: "/0217.png",
        img2: "/In-Game Action Icons/Rule Icon.png",
        text: "Rule",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        opacity:30,
        url:"/rule"
    },
    {
        i:6,
        img1: "/0217.png",
        img2: "/In-Game Action Icons/MarketPlace Icon.png",
        text: "Market Place",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        opacity:30,
        url:"/marketplace"
    },
    {
        i:7,
        img1: "/0217.png",
        img2: "/CollectRentIcon_NEW.png",
        text: "Collect Rent",
        desc:"Send out the collectors. The peasants living on your properties need to pay their taxes for your continued protection..",
        opacity:100,
        url:"/rent"
    },
    {
        i:8,
        img1: "/0217.png",
        img2: "/In-Game Action Icons/Thieve Icon.png",
        text: "Thieve",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        opacity:30,
        url:"/thief"
    },
    {
        i:9,
        img1: "/0217.png",
        img2: "/In-Game Action Icons/Raid Icon.png",
        text: "Raid",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        opacity:30,
        url:"/raid"
    },
    {
        i:10,
        img1: "/0217.png",
        img2: "/In-Game Action Icons/Open Loot Box Icon.png",
        text: "Open Loot Box",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        opacity:30,
       url:"/openlootbox"
    },
    {
        i:11,
        img1: "/0217.png",
        img2: "/In-Game Action Icons/Mint Icon.png",
        text: "MINT",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        opacity:30,
        url:"/mint"
    },
]

function Block1({balance}) {

    const matches = useMediaQuery('(min-width:1000px)');
    const router = useRouter();
    const[loading,setLoading] = useState(false)
    
    const [display,setDisplay] = useState({name:"",desc:"",show:false,url:""})
    const [open,setOpen] = useState(false)
    const [bright,setBright] = useState(false)
    const handleClose = ()=>setOpen(false)
    const handleOpen = ()=>setOpen(true)

 
    const [isHovered, setIsHovered] = useState("brightness-[0.3]");
    const [checkbox,setCheckBox] =useState(null)
    const [box,setBox] =useState(null)

    const handleMouseEnter = (val) => { 
        setCheckBox(val)
      setIsHovered("brightness-[1]");
    };
  
    
    const handleMouseLeave = () => {
        setCheckBox(null)
      setIsHovered("brightness-[0.3]");
    };
    // console.log(isHovered)
    const handleBlock = (item) => {
        setBox(item.i-1)
        setIsHovered("brightness-[1]");
        handleOpen()
        setDisplay({name:item.text,desc:item.desc,show:true,url:item.url})
    }
     
    // useEffect(()=>{
    //     const handleGetBalance =async () => {
    //         const id = address ||localStorage.getItem("WalletAddress")
    //         if(!id){
    //             return
    //         }
    //             const result = await mainApi.getTokenBalance( id.address ||id);
    //             console.log(result)
    //             if(result && result.success === true){ 
    //                     router.push("/main")
                    
    //                     setBalance(result.data)
    //                 }
    //     }
    //     handleGetBalance();
    // },[balance])

    const handleBrightness = () => {
        if(bright ){
            handleClose()
            setDisplay({name:"",desc:"",show:false,url:""})
            setBright(false)

        }else{
            setBright(true)
        }
    }
    return (
        <>
        
            (<div className='w-full h-screen relative  mt-10 flex justify-center md:justify-start'>
          
                <div className="w-11/12 md:w-[100%]  lg:w-[60%] z-30 !absolute md:mt-8 lg:mt-16 lg:ml-10 mx-auto h-screen">
                            <div className='z-10 absolute md:top-[9px] md:!left-[45px] top-[5px] left-[1.35rem] sm:left-[2.5rem] capitalize w-full md:w-1/2 flex   '>
                                <h1 className='text-[3.2vw] md:text-[3vw] lg:text-[1.9vw] font-bold text-[#fff] pl-[1px] sm:ml-1 uppercase sm:mt-1 lg:mt-[2px] 2xl:mt-[6px] md:mt-[4px] xl:mt-[3px]'>in game actions</h1>
                            </div>
                            <div className='w-full relative'>
                                <Image src="/In Game Actions Border_Drk Bcgkrnd.png" alt='' fill className='!static' />
                            </div>
                            {/* ml-[40px] sm:ml-[53px] md:ml-[20px] lg:ml-[48px] md:-mt-5 lg:-mt-1 2xl:ml-20  sm:mt-1 */}
                            <div className='w-11/12 absolute z-10 -top-7 md:-top-10 lg:-top-16 mx-auto left-3 sm:left-4 md:left-8 lg:left-6 xl:left-9 flex justify-start text-white md:text-3xl sm:text-lg text-sm '>
                                <p>SELECT YOUR NEXT IN-GAME ACTION</p>
                            </div>
                            <div className='absolute z-10 flex flex-wrap items-center  shadow-[0px_100px_30px_-1px_rgba(0,0,0,1)] overflow-auto scroll-hide  w-[90%] h-full  mx-auto justify-center !top-6 sm:!top-12 lg:!top-10  xl:!top-10 2xl:!top-14  left-[0px] right-0 bottom-0 pt-8' >
                                <div className='z-10 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   w-full h-full !top-0 left-0 right-0 sm:!pl-7 sm:pr-5 max-h-fit scroll-hide  pb-48 md:pb-36  overflow-y-auto overflow-x-hidden pt-2'>
                                    {
                                        ImgData.map(( item,index ) => (
                                            <div key={index}
                                            data-title={item.opacity===100 ? (balance > 0 ? null : "Please connect your XUMM Wallet") : null}
                                            className={`pr-2 pl-[1.5rem] sm:pl-[0.7rem] relative `} 
                                            onClick={handleBrightness}
                                            >
                                                <div   onClick={()=> {balance>0 && item.opacity === 100  ? handleBlock(item) :""} }
                                                className={`relative  hover:shadow-[0px_0px_6px_4px_#02D6DE] duration-200 ease-in transition-all w-full`} 
                                                onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} >
                                                     
                                                    <Box className={`w-full relative ${index=== box && bright ? "brightness-[1]"    : (balance>0&&item.opacity ===100 ? (index === checkbox ? "brightness-100" :"brightness-[0.3]"):null)} `}  >
                                                        <Image src="/0217.png" alt='' fill className={`!static bg-cover`}  />
                                                    </Box>
                                                    <div  
                                                    className={`z-20 absolute w-full h-full top-0 left-0 right-0 bottom-0  ${balance>0 && item.opacity === 100 ? null :"bg-[#000000b8]"}`}>
                                                    </div>
                                                      
                                                        <div className={`z-10 absolute object-fit w-full h-full top-0 left-0 right-0 bottom-0  p-[10px]
                                                         opacity-${item.opacity}`}  

                                                        >
                                                            <Image   src={item.img2} alt='' fill className='!static items-center'/>
                                                        </div>
                                                   
                                                    </div><div>
                                                </div>
                                          
                                                    <h2  className={`text-center uppercase text-[#02D6DE] text-[26px] font-medium  opacity-${item.opacity}`}>{item.text}</h2>
                                            </div>
                                        ) )
                                    }


                                </div>
                            </div>
                    </div>

                    {
              !matches ? (<Dialog   aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description" open={open} onClose={handleClose} className={`${balance && display.show ===true  ? "flex":"hidden"}`} sx={{display:"flex",justifyContent:"center"}}>
                        <div className='w-full bg-gray-900  mx-auto   '>
                            <Block2 display={display} open={open} setOpen={setOpen}/>
                        </div>
                    </Dialog>) :(
                        <div className={`absolute right-20  top-[20%] h-[150vh] ${balance && display.show=== true  ? "flex":"hidden"} `} >
                        <Block2 display={display}/>
                    </div>
                    )
                 
                }
                    
                  
            </div>)
   
        </>
    )
}

export default Block1
