import { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import { socket } from '@/src/services/Socket';
import Link from 'next/link';
import LogoutIcon from '@mui/icons-material/Logout';
import CancelIcon from '@mui/icons-material/Cancel';
import { authApi } from '@/src/mockes/auth';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/router';
import { mainApi } from '@/src/mockes/main';
import Spiner from '@/src/components/Spiner/Spiner';
 
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {sm:530,md:530,xs:250},
    height: 216,
    bgcolor: 'rgba(0, 0, 0, 0.50)',
      border: '2px solid #000',
    boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.8)',
    p: 2,
    display: "flex",
    justifyContent: "center",
    gap:3,
    alignItems: 'center',
    flexDirection: "column"
};



function Nav({setBalance,balance}) {
    const socketRef = useRef()
    const [ open, setOpen ] = useState( false );
    const [logoutOpen,setLogoutOpen] = useState(false)
    const [log,setLog] = useState(false)
    const [ qrScan, setQrScan ] = useState('')
    const [ linkApp, setLinkApp ] = useState( '' )
    const [ details, setDetails ] = useState('')
    const [isLoading,setIsLoading] = useState(false);
    const [alert,setAlert] = useState(false)
     
    const handleLogoutOpen = () => setLogoutOpen( true );
    const handleLogoutClose = () => setLogoutOpen( false );

    const handleOpen = () =>{
         setOpen( true );
         setAlert(false)
    }
    

    const handleLoadingOpen = () => setIsLoading(true);
    const handleLoadingClose = () => setIsLoading(false);

    const handleLogout = () => {
        setLog(true)
        localStorage.removeItem("AccessToken")
        localStorage.removeItem("XummToken")
        localStorage.removeItem("WalletAddress")
        setLog(false)
        setDetails('');
        setBalance(null)
        setQrScan("")
        handleLogoutClose();
    }  

    const isAuthenticated = async () =>{
      handleLoadingOpen();
        const result = await authApi.me();
        console.log(result)    
        if(result){
           setDetails(localStorage.getItem("WalletAddress"));
        } else {
       localStorage.removeItem("AccessToken")
       localStorage.removeItem("XummToken")
       localStorage.removeItem("WalletAddress")
        setDetails('');
        }
     handleLoadingClose();
    }


    useEffect( () => {
        socket.on("account-response", ( accountInfo ) => {
            localStorage.setItem( "AccessToken",  accountInfo?.access_token  )
            localStorage.setItem( "XummToken",  accountInfo?.xumm_token  )
            localStorage.setItem( "WalletAddress",  accountInfo?.wallet_address  )
             
            setDetails(accountInfo?.wallet_address)
             
            setOpen(false);
            // setAlert(false)
            router.push("/main")
            setAlert(false);
        } )
        socket.on("qr-response",( qr ) => {
            
            setQrScan( qr )

        } )
        socket.on("qr-app-response",( app ) => {
           
            setLinkApp( app )
        } )

       isAuthenticated();
 
    }, [socket] );

   
        const handleClick = () => {
            
            socket.emit("xumm-qr-code");
           
        }
         
        const handleClose = () => {
            setOpen( false );
            setQrScan("")
            setLinkApp("")
            
        }
    
 

    useEffect(()=>{
        const handleGetBalance =async () => {
            setIsLoading(true)
            if(details){
                const id = details || localStorage.getItem("WalletAddress")
                if(!id){
                    return
                }
                if(id){
                    setBalance(1)
                }
                    // const result = await mainApi.getTokenBalance(id.address ||id);
                    // console.log(result)
                    // if(result && result.success === true){ 
                    //         router.push("/main")
                    //         setBalance(result.data.crypto_wallet)
                    // }
            }
            setIsLoading(false)
        }
        handleGetBalance();
    },[balance,details])
 const router =useRouter();
    useEffect(() =>{
        // console.log(typeof router.query.login);
        if(router.query.login){
            setAlert(true)
            setOpen(true)
        } else{
         setAlert(false)
         setOpen
        }
    },[])
    return (
        <div className="w-full h-max   bg-[url('/nav.png')] bg-cover  flex justify-center overflow-hidden  ">

            <div className=" w-full h-[70%]    backdrop-brightness-50   flex justify-center items-center" >
                <div className=' h-max w-[96%] border-b-2 lg:border-b-4 border-[#00CDD5] flex justify-between items-center md:pr-4'>
                    <div className='h-max'>
                        <div className='w-[40%] h-[103px]  md:mt-0 md:w-1/2   cursor-pointer flex  items-center'>
                            <Image src='/Glowing Logo.png' alt='nav_image' className='!static' loading="lazy" fill   onClick={()=>router.push("/")} />
                            {/* <Image src='/mining.png' alt='nav_image' className='!static' fill loading="lazy"  /> */}
                            <p className='text-white uppercase font-medium md:text-4xl text-xl tracking-[1px] sm:tracking-[20px] md:tracking-[25px]'>CRYPTOLAND</p>
                        </div>
                    </div>
                    {
                        details ?
                            ( <div className='flex  gap-x-1 md:gap-x-5'>
                                <button className='bg-[#12110f]  text-[#fff] border-2 border-[#78E9C3] md:px-5 py-1 md:py-3 text-xs md:text-base lg:text-[20px] hover:text-[#fff] cursor-pointer hover:rounded-[2.4px] hover:bg-[#78E9C3] px-1 '>{details.length>10 ? details.substring(0,4)+"..."+details.slice(details.length-4,details.length) : details}</button>
                                <button onClick={handleLogoutOpen}
                                title='Logout'
                                className='bg-[#12110f] text-[#fff] border-2 border-[#78E9C3] md:px-5 py-1 md:py-3 text-xs md:text-base lg:text-[20px] hover:text-[#fff] cursor-pointer hover:font-semibold hover:bg-[#78E9C3] hover:rounded-[2.64px] duration-200 px-1'><LogoutIcon  title='Logout'/></button>
                                { log ? (<div className='dots'></div>):
                                (<Modal
                                    open={logoutOpen}
                                    onClose={handleLogoutClose}
                                     
                                >
                                    <Box sx={style} className="flex !justify-center !items-center   gap-6"> 
                                        <div className='h-max flex flex-col justify-center items-center'>
                                        <div className='text-white text-xl py-2 '>
                                            Are you sure you want to disconnect?
                                        </div>
                                        <div className='text-white text-lg w-[70%] flex justify-center gap-x-5'>
                                            <button onClick={handleLogoutClose}
                                            className='bg-[12110f] text-[#fff] border-2 border-[#78E9C3] md:px-5 py-1 md:py-3 text-sm md:text-base lg:text-[20px] hover:text-[#fff] cursor-pointer hover:rounded-[2.4px] hover:bg-[#78E9C3] px-2 rounded-md '>Cancel</button>
                                        <button onClick={handleLogout}
                                       
                                        className='bg-[12110f] text-[#fff] border-2 border-[#78E9C3] md:px-5 py-1 md:py-3 text-sm md:text-base lg:text-[20px] hover:text-[#fff] cursor-pointer hover:rounded-[2.4px]bg-[#78E9C3] hover:bg-red-800 hover:border-red-700 px-2 rounded-md'>Logout</button>
                                        </div>
                                        </div>
                                    </Box>
                                </Modal>)
                                }
                                </div> 
                            )
                            :
                            ( <button onClick={handleOpen} className='bg-[#12110f] text-[#fff] border-2 min-w-fit border-[#78E9C3] md:px-5 py-1 md:py-3 text-xs md:text-base lg:text-[20px] hover:text-[#fff] cursor-pointer   hover:bg-[#78E9C3] hover:rounded-[2.64px] duration-200 px-1 rounded-sm'><span className=' '>CONNECT WALLET</span></button> )
                    }
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >

                        {
                            qrScan && linkApp ?
                                ( <Box className=" w-full flex justify-center items-center absolute   overflow-auto max-h-full">
                                     <div className='w-[70%] md:w-[550px]'>
                                        <div className='bg-[#262626] opacity-80 pt-9 h-16 flex justify-between items-center px-5'>
                                            <div></div>
                                            <div className='text-gray-400'>Connect Wallet</div>
                                            <div  onClick={handleClose}   
                                            ><CancelIcon className='text-white cursor-pointer'/></div>
                                        </div>
                                        <div className='bg-[#1f1f1f] opacity-80 shadow-[0px_4px_10px_0px_rgba(0, 0, 0, 0.8)] h-full flex flex-col justify-between py-5 items-center text-center'>
                                                <div>
                                                <h4 className='text-white font-bold '>Connect using XUMM</h4>
                                                <p className='text-white font-semibold text-sm'>Add an account from a XUMM Wallet</p>
                                                </div>

                                                <div className='mt-4 bg-white rounded-xl flex flex-col justify-between  items-center py-5 '>
                                                    <div className=''>
                                                        <img src={qrScan}  alt='Qr-code' className='' />
                                                    </div>
                                                    <p className='text-sm text-center text-gray-500 px-2 w-[90%] '>Scan the QR code with your XUMM Wallet to proceed.</p>

                                                </div>
                                                <Link href={linkApp}
                                                className=' mt-5 bg-[12110f] text-[#fff] border-2 border-[#78E9C3] md:px-5 py-2 md:py-3 text-sm md:text-base lg:text-[20px] hover:text-[#fff] cursor-pointer   hover:bg-[#78E9C3] hover:rounded-[2.64px] duration-200 px-2 rounded-sm uppercase '>Open xumm app</Link> 

                                        </div>
                                     </div>
                                </Box> ) :
                                ( <Box sx={style}>
                                    <div className='flex flex-col justify-center items-center'>
                                       {alert && <p className='text-white md:text-[18px] text-sm'>Please first connect with wallet</p> }
                                      {!alert &&  <h2 id="modal-modal-title" className="text-[#fff]  uppercase text-[18px] tracking-[1.8px] font-normal " >
                                            Connect wallet
                                        </h2>}
                                        <div className=''>
                                            <Image src="/1014.png" fill alt='' className='!static' />
                                        </div>

                                    </div>

                                    <div onClick={handleClick}
                                        className='cursor-pointer flex py-2 justify-center items-center md:px-20 px-4 bg-gray-950 gap-2' style={{ borderRadius: "2px", border: "2px solid #78E9C3", background: "rgba(255, 255, 255, 0.07)", boxShadow: "0px 0px 14px 0px rgba(68, 182, 161, 0.90)" }}>
                                        <div className='w-10 h-10'>
                                            <Image fill alt='' src="/xumm.png" className='!static' />
                                        </div>
                                        <div className='text-[#fff] md:text-[18px] text-sm font-bold uppercasase tracking-[1.4px]'>
                                            XUMM APP
                                        </div>
                                    </div>
                                </Box> )
                        }

                    </Modal>
                </div>
            </div>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
          >
            <Spiner/>
      </Backdrop>

      {/* <Modal open={true} >
      <Box sx={style}>
        <div>
            <p className='text-white'>Please first connect with wallet</p>
        </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <h2 id="modal-modal-title" variant="h6" component="h2" className="text-[#fff]  uppercase text-[22px] tracking-[1.8px] font-normal " >
                                            Connect wallet
                                        </h2>
                                        <div className='h-full'>
                                            <Image src="/1014.png" fill alt='' className='!static' />
                                        </div>

                                    </div>

                                    <div onClick={handleClick}
                                        className='cursor-pointer flex py-2 justify-center items-center px-20 bg-gray-950 gap-2' style={{ borderRadius: "2px", border: "2px solid #78E9C3", background: "rgba(255, 255, 255, 0.07)", boxShadow: "0px 0px 14px 0px rgba(68, 182, 161, 0.90)" }}>
                                        <div className='w-10 h-10'>
                                            <Image fill alt='' src="/xumm.png" className='!static' />
                                        </div>
                                        <div className='text-[#fff] text-[18px] font-bold uppercasase tracking-[1.4px]'>
                                            XUMM APP
                                        </div>
                                    </div>
                                </Box> 
      </Modal> */}
        </div>
    )
}

export default Nav
