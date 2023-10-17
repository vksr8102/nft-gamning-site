import { miningApi } from '@/src/mockes/mining';
import {  Avatar, Backdrop, Box, CircularProgress,  Modal,   } from '@mui/material';
import { socket } from '@/src/services/Socket';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import BlockLeft from '../BlockLeft/BlockLeft';
import { collectApi } from '@/src/mockes/collect';
import Spiner from '@/src/components/Spiner/Spiner';
import { authApi } from '@/src/mockes/auth';
const backgroundImageStyle = {
    backgroundImage: `url("/Stats Box.png")`,
    backgroundRepeat: 'no-repeat',
  };

    const backgroundImageStyle2 = {
        backgroundImage: `url("/nft bener 2.png")`,
        backgroundRepeat: 'no-repeat',
    };
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: {sm:530,md:530,xs:250},
    maxWidth:450,
      bgcolor: 'rgba(0, 0, 0, 0.8)',
        border: '2px solid #000',
      boxShadow: '0px 4px 10px 0px rgba(0, 0, 0,0.8)',
      p: 2,
      display: "flex",
      justifyContent: "center",
      gap:3,
      alignItems: 'center',
      flexDirection: "column"
  };
    const modalstyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      height:"100vh",
      width:"100vw",
      bgcolor: 'rgba(0, 0, 0, 0.3)',
     
      display: "flex",
      justifyContent: "center",
      gap:3,
      alignItems: 'center',
      flexDirection: "column"
  };
    const modalstylee = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      height:"100vh",
      width:"50vw",
      bgcolor: 'rgba(0, 0, 0, 0.3)',
     
      display: "flex",
      justifyContent: "center",
      gap:3,
      alignItems: 'center',
      flexDirection: "column"
  };
    function Block1() {
        const [result,setResult]=useState()
        const [activeResult,setActiveResult]=useState()
        const [isLoading,setIsLoading] = useState(false)
        const [day,setDay] = useState(null)
        const [selectedIds, setSelectedIds] = useState([]);
        const [miningTotalCost,setMiningTotalCost] = useState({})
        const [miningTotalCostDiloge,setMiningTotalCostDiloge] = useState(false)
        const [miningState,setMiningState] = useState({})
        const [avalible,setAvalible]=useState(false)
        const [active,setActive]=useState(false)
        const [page,setPage] = useState(1)
        const [activePage,setActivePage] = useState()
        const [pageSize,setPageSize] =useState(9)
        const [activePageSize,setActivePageSize] =useState(10)
        const [openDiloge,setOpenDiloge] = useState(false)
        const [sendMine,setSendMine] = useState()
        const [update,setUpdate] = useState([])
        const [update1,setUpdate1] = useState([])
        const [uniqueKeys, setUniqueKeys] = useState(new Set());
        const [loading, setLoading] = useState(false);
        const [stepar,setStepar] =useState(false)
        const [hasUserBefore,setHasUserBefore] = useState()
        const [isSelectAll, setIsSelectAll] = useState(false);
        const[number, setNumber] = useState([])
        const [selectAll,setSelectAll] = useState(true)
        const [userBalance,setUserBalance] = useState()
        const [free,setFree] = useState(false)

       
// console.log(update);
const handleSelectAll = () => {

  
  // If not all items are selected, select all items
  let data = [];
  let allIds = result?.data?.rows?.map((item) => String(item.id)) || [];

  // Update the state using the callback form of setState
  let updatedIds = []
  setSelectedIds((prevIds) => {
    // Log the previous state for debugging
    // console.log("Previous state:", prevIds);
    // Combine previous ids with the new ids
     updatedIds = [...prevIds, ...allIds];

    // Log the updated state for debugging
    // console.log("Updated state:", updatedIds);

    // Return the updated state
    return updatedIds;
  });
  
  // console.log(selectedIds)
  
  // Other logic...
  setNumber(["0"]);
  setIsSelectAll(true);
  setSelectAll(false);
};

const fetchUserTotalBalance =async()=>{
  const res = await authApi.userTotalBalance()
  setUserBalance(res)
  }

  useEffect(()=>{
    fetchUserTotalBalance()
  },[])

 
  useEffect(() => {
    if(selectedIds){
      const id = result&&result.data&&result.data.rows&&result?.data?.rows?.length>0 && result.data.rows.some((item)=>{
        // console.log(item?.free_action,selectedIds.includes(String(item?.id)));
        return item?.free_action === 1 && selectedIds.includes(String(item?.id))
      })
      // console.log(id)
      if(id){
        setFree(true)
        setDay("1")
      }else{
       setDay(null)
       setFree(false)
      }
    }
  }, [selectedIds]);
useEffect(()=>{
  socket.on("progressUpdate",(item)=>{
    console.log("hello");
console.log(item);
    setUpdate(item?.message);
  })
  console.log("hello world");
},[socket])


//---------->Has User Visit Before function


const fetchUserBefore=async()=>{
try {
  const responseData = await collectApi.getUserHasRentedBefore()
setHasUserBefore(responseData)
} catch (error) {
  console.log(error);
}
}


       const handleDilogeClose  = ()=>{
        setOpenDiloge(false)
        setDay(null)
       }
       const handleAvalible = async()=>{
         handleOpen()
        setAvalible(true)
        setActive(false)
        const miningStateResult = await collectApi.getTotalCollectStats()
    setMiningState(miningStateResult)
        setPage(1)
        setActivePage(1)
        const collectResult = await collectApi.getCollect(page,pageSize)
    setResult(collectResult)
    handleClose()
     }  

const handleActive = async()=>{
  handleOpen()
    setActive(true)
    setAvalible(false)
    setActivePage(1)
    const miningStateResult = await collectApi.getTotalCollectStats()
    setMiningState(miningStateResult)
    setPage(1)
    const activemine = await collectApi.getActiveCollect(activePage,pageSize)
    setActiveResult(activemine)
    handleClose()
    setSelectedIds([])

}

const handleClose = ()=>setIsLoading(false)
const handleOpen = ()=>setIsLoading(true)

const fetchMining = async()=>{
    handleOpen();
    const collectResult = await collectApi.getCollect(page, pageSize)
    setResult(collectResult)
    handleAvalible()
    const miningStateResult = await collectApi.getTotalCollectStats()
    setMiningState(miningStateResult)
    handleClose();
}

const handleCalculateMiningTotalCost = async()=>{
  try {
    if(hasUserBefore?.data){
      if( day && selectedIds&& selectedIds?.length>0){
          handleOpen()
          const res =  isSelectAll  ? await collectApi.calculateCollectTotalCost(number,day,userBalance?.data?.is_pro,userBalance?.data?.pro_type): await collectApi.calculateCollectTotalCost(selectedIds,day,userBalance?.data?.is_pro,userBalance?.data?.pro_type)
          if(res){
              setMiningTotalCost(res)
              setOpenDiloge(false)
              setMiningTotalCostDiloge(true)
          }
          else{
              alert(`failed to calculate`)
          }
      }
      else{
        alert("please select a date or card  ")
      }
    }else{
      if(selectedIds&& selectedIds?.length>0){
     const res =  await collectApi.calculateCollectTotalCost(selectedIds,'1')
     if(res){
      setMiningTotalCost(res)
      setOpenDiloge(false)
      setMiningTotalCostDiloge(true)
  }else{
    alert("please select a  card  ")
  }
}
  else{
      alert(`failed to calculate`)
  }
    }
      handleClose()
  } catch (error) {
      console.log(error);
      
  }
  }
//-->useEffect Events
useEffect(()=>{
  // fetchUserBefore()
    fetchMining()
    setUpdate([])
   
},[])
// console.log(hasUserBefore);
// console.log(result&& result);


//-------->function for handle checked card
const handleCheckboxChange = (id,freeAction) => {
  
  id= id.toString()
  if(!isSelectAll){
   
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  }
  else{

    
      setSelectedIds([]);
      setIsSelectAll(false)
      setSelectAll(true)
      
  
  }
  };

const wallet_address = localStorage.getItem("WalletAddress")
const data ={
    "nftIds": selectedIds,
    "duration":day,
    "wallet_address": wallet_address
}
const handleSendMine = async()=>{
    
try {
    setStepar(true)
    setSelectAll(true)
    setMiningTotalCostDiloge(false)
    setPage(1)
    const response = await collectApi.sendtoCollect(data)
    console.log(response);
    if(response?.success ===true){
      setStepar(false)
        setSendMine(response)
        toast.success(response.data,{
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        const userresData= await authApi.userTotalBalance()
        setUserBalance(userresData)
        setMiningTotalCostDiloge(false)
        handleOpen()
        const collectResult = await collectApi.getCollect(page,pageSize)
        setResult(collectResult)
        handleActive()
        setSelectedIds([])
       
        setActive(true)
        // setUpdate([])
        
    }else{
       toast.error(response.message,{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
        setSelectedIds([])
setStepar(false)
}
handleClose()
setTimeout(()=>{
  setDay(null)
  
},2000)
setIsSelectAll(false)
} catch (error) {
    console.log(error);
}
}

 const value =['1','3','7','15','30']

 //-->infinite scroolbar
 const fetchMoremining=async()=>{
  setLoading(true)
   const collectResult = await collectApi.getCollect(page+1,pageSize)
   setResult((prevResult) => {
    if (!prevResult) {
      return collectResult; 
    }
    return {
      ...prevResult,
      data: {
        ...prevResult.data,
        rows: [...prevResult.data.rows, ...collectResult.data.rows],
      },
    };
  });
  setPage(page + 1);
  setLoading(false)
 }
 const fetchMoreActivemining=async()=>{
  setLoading(true)
   const collectResult = await collectApi.getActiveCollect(activePage+1,pageSize)
   setActiveResult((prevResult) => {
    if (!prevResult) {
      return collectResult; 
    }
    return {
      ...prevResult,
      data: {
        ...prevResult.data,
        rows: [...prevResult.data.rows, ...collectResult.data.rows],
      },
    };
  });
  setActivePage(activePage + 1);
  setLoading(false)
 }

// console.log(sendMine);
//-------> function for select All 



const handleCancleAll = ()=>{
  setSelectedIds([])
  setSelectAll(true)
}
const handleCancel = ()=>{
  setMiningTotalCostDiloge(false)
  setIsSelectAll(false)
  setSelectAll(true)
    setDay(null) 
   setSelectedIds([])
}



// console.log(selectedIds);
// console.log(activeResult);
// console.log(miningState);
// console.log(isSelectAll)
// console.log(miningTotalCost);
console.log(result);
  return (
    <div className=''>
        
    <div className=' md:py-[0px]   flex gap-6  flex-col md:flex-col lg:flex-row  '>
          <div className='lg:w-[50%]  flex-[4] mt-10  '   >
          <div className='w-full relative pl-4 md:pl-4 '>
                                {/* <Image src="/nft bener 2.png" alt='' fill className='!static' /> */}
                                {/* <img src="/nft bener 1.png" alt="" className='sm:h-[90vh] md:[100vh] lg:h-[100vh] h-[70vh]  w-screen'/> */}
                                <img src="/New Border_Drk Bckgrnd.png" alt="" className='sm:h-[550px] md:h-[650px] lg:h-[800px] h-[450px]  w-screen screen'/>
                                <div className='absolute top-1 left-0 right-0  sm:h-[550px] md:h-[650px] lg:h-[800px] h-[450px]  screen'>
                                <BlockLeft active={active} avalible={avalible} result={result} activeResult={activeResult} setAvalible={setAvalible} setActive={setActive} handleActive={handleActive} handleCheckboxChange={handleCheckboxChange} setSelectedIds={setSelectedIds} selectedIds={selectedIds}  fetchMoremining={fetchMoremining} loading={loading} fetchMoreActivemining={fetchMoreActivemining}  handleAvalible={handleAvalible} handleSelectAll={handleSelectAll} handleCancleAll={handleCancleAll} selectAll={selectAll} isSelectAll={isSelectAll}/>
    </div>
                            </div>
      </div>
     
       
      <div className='  flex-[4] w-full sm:h-[700px] h-[690px] lg:h-[810px] mt-1  z-10 relative md:bg-cover bg-none bg-color screen' > 
<div className=' relative overflow-x-clip z-20'>
<img src="/Banker Lady Isolated.png" alt="" className='absolute z-10 sm:h-[700px] h-[500px] lg:h-[800px]   md:top-[-130px] md:right-[-10px] sm:right-[-130px] sm:top-[-160px] right-[-100px]  top-[-90px]'/>
        </div>
        <div className=' ml-2 pt-2 '>
   <div className=' md:pl-4 pt-6 md:ml-0 ml-10 relative z-30 flex xl:justify-center lg:justify-start  justify-center'>
    <img src='/Vector 1.png' className='md:w-[270px] max-w-[300px] w-[220px]  h-[79px] md:h-[89px] '/>
    <div className=' absolute md:top-3 md:ml-[-10px] lg:ml-2 xl:ml-[-35px] ml-[-15px]  md:w-[215px] sm:w-[200px] w-[150px]  h-[100%] flex justify-center items-center top-3 z-40'>
  {avalible && <h1 className='md:text-[20px] text-[14px] text-[#74FAFF]'>You have  {result &&result.data&& result.data.count}  lands that are not collecting rent.</h1>}
  {active && <h1 className='md:text-[20px] text-[14px] text-[#74FAFF]'> You have   {activeResult &&activeResult?.data&& activeResult?.data?.count} lands that are collecting rent. </h1>}
   </div>
    </div>
   <div className='flex   items-center py-2  md:w-[300px] w-[50%] sm:w-[300px]  gap-3 px-3 uppercase' >
    <div>
      <div><p className='text-white' >Select Duration</p></div>
      <div className='flex gap-2 items-center pt-3'>
      {value.map((item)=>(
          <>
        <div className={`h-[20px] min-w-[20px]  p-1 border font-semibold   border-black rounded-sm cursor-pointer flex justify-center items-center z-50  ${  (free && item === '1') ? 
          "bg-teal-500 text-white hover:bg-teal-500 box-shadow" :
          (( day === item) ? 
            "bg-teal-500 text-white hover:bg-teal-500 box-shadow" :
            "bg-white hover:bg-[#74FAFF] hover:text-white"
          )
      }`} onClick={()=>
        { !free && setDay(item) } } key={item} >{item}</div></>))}
       
      </div>
    </div>
    <img src="/Collect Rent Icon_NEW.png" alt=""  className='sm:h-[150px] sm:w-[150px] h-[80px] w-[80px] z-50 cursor-pointer' onClick={handleCalculateMiningTotalCost}/>
   </div>
   </div>
   <div className='pl-7 m-0'>
   <div className='flex gap-5 items-center pt-8 '>
<img src='/03 6.png'/>
<p className='lg:text-[20px] md:text-[18px] sm:text-[16px]  text-[3.5vw] font-semibold text-white z-20 uppercase'>Crypto<span className='md:text-sm text-[10px] font-semibold  z-20 uppercase   text-[#00CDD5] '>.........................  {parseFloat(userBalance && userBalance&&userBalance?.data?.crypto_wallet/100000000).toFixed(4)}</span></p>
   </div>
   <div className='flex gap-5 items-center pt-8 '>
<img src='/03 6.png'/>
<p className='lg:text-[20px] md:text-[18px] sm:text-[16px]  text-[3.5vw] font-semibold text-white z-20 uppercase'>Xrp<span className='md:text-sm text-[10px] font-semibold  z-20 uppercase   text-[#00CDD5] '>.........................  {parseFloat( userBalance && userBalance.data && userBalance?.data?.wallet).toFixed(4)}</span></p>
   </div>
   <div className='flex gap-5 items-center pt-8 '>
<img src='/03 6.png'/>
<p className='lg:text-[20px] md:text-[18px] sm:text-[16px]  text-[3.5vw] font-semibold text-white z-20'>Total Days Mined<span className='md:text-sm text-[10px] font-semibold  z-20 uppercase   text-[#00CDD5] '>.........................  {miningState&&miningState.data&&miningState.data.totalDaysMined}</span></p>
   </div>
   <div className='flex gap-5 items-center pt-8'>
<img src='/03 6.png'/>
<p className='lg:text-[20px] md:text-[18px] sm:text-[16px]  text-[3.5vw] font-semibold text-white z-20'>Total Cost for Mining<span className='md:text-sm text-[10px] font-semibold  z-20 uppercase   text-[#00CDD5] '>.........................{miningState&&Object.keys(miningState)?.length>0&&miningState.data&&miningState.data.totalCostForMining}</span></p>
   </div>
   <div className='flex gap-5 items-center pt-8'>
<img src='/03 6.png'/>
<p className='mlgtext-[20px]  md:text-[18px] sm:text-[16px] text-[3.5vw] font-semibold text-white z-20'>Crypto Total Mined<span className='md:text-sm text-[10px] font-semibold  z-20 uppercase   text-[#00CDD5] '>.........................{miningState&&Object.keys(miningState)?.length>0&&miningState.data&&miningState.data.totalCryptoMined}</span></p>
   </div>
   <div className='flex gap-5 items-center pt-8'>
<img src='/03 6.png'/>
<p className='lg:text-[20px] md:text-[18px] sm:text-[16px]  text-[3.5vw] font-semibold text-white z-20'>Total Taxes<span className='md:text-sm text-[10px] font-semibold  z-20 uppercase   text-[#00CDD5] '>.........................{miningState&&Object.keys(miningState)?.length>0&&miningState.data.totalTaxes&&miningState.data.totalTaxes}</span></p>
   </div>
   <div className='flex gap-5 items-center pt-8'>
<img src='/03 6.png'/>
<p className='lg:text-[20px] md:text-[18px] sm:text-[16px]  text-[3.5vw] font-semibold text-white z-20'>Crypto Total Theft<span className='md:text-sm text-[10px] font-semibold  z-20 uppercase   text-[#00CDD5] '>.........................{miningState&&Object.keys(miningState)?.length>0&&miningState.data&&miningState.data.totalCryptoTheft}</span></p>
   
   </div>
   <div className='flex gap-5 items-center pt-8'>
<img src='/03 6.png'/>
<p className='lg:text-[20px] md:text-[18px] sm:text-[16px]  text-[3.5vw] font-semibold text-white z-20'>Crypto Total Net<span className='md:text-sm text-[10px] font-semibold  z-20 uppercase   text-[#00CDD5] '>.........................{miningState&&Object.keys(miningState)?.length>0&&miningState.data.totalCryptoNet&&miningState.data.totalCryptoNet}</span></p>
   
   </div>
 <div className='mt-5 flex justify-center '>
    </div> 
   </div>
  
 </div> 
 </div>
 <div className='w-full '>
<img src='/In-Game Actions Screen 8.png' className='h-[20px] w-[100vw]' />
   </div>
 

{/* Diloge Box For Send Mine */}
<Modal
                                    open={miningTotalCostDiloge}
                                    aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                    <Box sx={{ width: '100%', }}>
     
      <p className='text-[20px] text-center text-white'>COST STATS</p>
    </Box> 
                                        <div className='absolute top-3 right-2 text-white text-xl cursor-pointer  h-[20px] w-[20px] flex justify-center items-center border border-white rounded-[50%]' onClick={()=>{setMiningTotalCostDiloge(false)
                                        setDay(null) 
                                        setSelectedIds([])}}><p className='pb-1'>x</p></div>

                                        {/* Table Start */}

                                        <div className='text-white-100  md:w-full w-full mt-6     border border-white '> 
                                        <div>
                                       <div  className='flex  justify-between items-center border-l border-white px-4 border-b  border-r  '>

                                       <p className=' md:text-sm text-[10px] font-semibold text-white z-20 uppercase flex-[2] border-r border-white flex justify-start py-2'>crypto Cost  </p>
                                       <p className='md:text-sm text-[10px] font-semibold  z-20 uppercase flex justify-end flex-[2]  text-[#00CDD5] px-2'>{miningTotalCost&&miningTotalCost.data&&miningTotalCost.data['totalCost'] ? (
    `${parseFloat(miningTotalCost?.data['totalCost']).toFixed(4)}/${parseFloat(userBalance && userBalance&&userBalance?.data?.crypto_wallet/100000000).toFixed(4)}`
  ): null} Available  </p>
                                        </div> 
                                       <div  className='flex  justify-between items-center border-l border-white px-4 border-b  border-r  '>

                                       <p className=' md:text-sm text-[10px] font-semibold text-white z-20 uppercase flex-[2] border-r border-white flex justify-start py-2'>Xrp Cost  </p>
                                       <p className='md:text-sm text-[10px] font-semibold  z-20 uppercase flex justify-end flex-[2]  text-[#00CDD5] px-2'>{miningTotalCost&&miningTotalCost.data&&miningTotalCost.data['xrp_cost'] ? (
    `${parseFloat(miningTotalCost?.data['xrp_cost']).toFixed(4)}/${
      parseFloat( userBalance && userBalance.data && userBalance?.data?.wallet).toFixed(4)}`
  ): null} Available  </p>
                                        </div> 
                                        <div  className='flex  justify-between items-center border-l border-white px-4 border-b  border-r  '>
                                        <p className=' md:text-sm text-[10px] font-semibold text-white z-20 uppercase flex-[2] border-r border-white flex justify-start py-2'>Production</p> 
                                        <p className='md:text-sm text-[10px] font-semibold  z-20 uppercase flex justify-end flex-[2]  text-[#00CDD5] px-2 '>{miningTotalCost&&Object.keys(miningTotalCost)?.length>0&&miningTotalCost.data['totalProduction']? parseFloat(miningTotalCost&&Object.keys(miningTotalCost)?.length>0&&miningTotalCost.data['totalProduction']).toFixed(4) : null}</p> 
                                        </div>
                                        <div className='flex  justify-between items-center border-l border-white px-4 border-b  border-r  '>
                                        <p className=' md:text-sm text-[10px] font-semibold text-white z-20 uppercase flex-[2] border-r border-white flex justify-start py-2'>Tax  </p>
                                        <p className='md:text-sm text-[10px] font-semibold  z-20 uppercase flex justify-end flex-[2]  text-[#00CDD5] px-2 '>{miningTotalCost&&Object.keys(miningTotalCost)?.length>0&&miningTotalCost.data['totalTax']? parseFloat(miningTotalCost&&Object.keys(miningTotalCost)?.length>0&&miningTotalCost.data['totalTax']).toFixed(4) : null}</p>
                                        </div>
                                        </div>
                                        {/* row 2 */}
                                        <div className=''>
                                        <div className='flex  justify-between items-center border-l border-white px-4 border-b  border-r  '>
                                        <p className=' md:text-sm text-[10px] font-semibold text-white z-20 uppercase flex-[2] border-r border-white flex justify-start py-2'>Theft </p>
                                        <span className='md:text-sm text-[10px] font-semibold  z-20 uppercase flex justify-end flex-[2]  text-[#00CDD5] px-2 '>{miningTotalCost&&Object.keys(miningTotalCost)?.length>0&&miningTotalCost.data['totalTheftAmount']? parseFloat(miningTotalCost&&Object.keys(miningTotalCost)?.length>0&&miningTotalCost.data['totalTheftAmount']).toFixed(4) : null}</span>
                                        </div>
<div className='flex  justify-between items-center border-l border-white px-4 border-b  border-r  '>
<p className=' md:text-sm text-[10px] font-semibold text-white z-20 uppercase flex-[2] border-r border-white flex justify-start py-2'>Net </p>
<p className='md:text-sm text-[10px] font-semibold  z-20 uppercase flex justify-end flex-[2]  text-[#00CDD5] px-2'>{miningTotalCost&&Object.keys(miningTotalCost)?.length>0&&miningTotalCost.data['totalNet']? parseFloat(miningTotalCost&&Object.keys(miningTotalCost)?.length>0&&miningTotalCost.data['totalNet']).toFixed(4) : null}</p>
</div>
</div>
                                        </div>
                                        <div className='flex justify-center gap-6 w-full mt-6'>
                                        <button  className='bg-[12110f] text-[#fff] border-2 border-[#78E9C3] md:px-2 py-1 md:rounded-md px-1 md:py-2 text-sm md:text-base lg:text-[20px] hover:text-[#fff] cursor-pointer hover:font-semibold hover:bg-[red] hover:rounded-[2.64px] duration-200' onClick={()=>{setMiningTotalCostDiloge(false)
                                        setDay(null) 
                                        setSelectedIds([])
                                        setIsSelectAll(true)
                                        }} >Cancel </button>
                                        <button  className='bg-[12110f] text-[#fff] border-2 border-[#78E9C3] md:px-2 py-1 md:rounded-md px-1 md:py-2 text-sm md:text-base lg:text-[20px] hover:text-[#fff] cursor-pointer hover:font-semibold hover:bg-[#78E9C3] hover:rounded-[2.64px] duration-200' onClick={handleSendMine} >Confirm Action</button>
                                        </div>   
                                 </Box>
                                    
                                    </Modal>
                                    <Backdrop
  sx={{ color: '#fff', zIndex:100 }}
  open={isLoading}
  onClick={handleClose}
>
  <Spiner/>
</Backdrop>


<ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light" />

{/* modal for socket event */}
<Modal open={stepar}>
<Box sx={modalstyle}>
<Spiner/>
<p className='text-white'>{update}</p>
</Box>
</Modal>
     </div>
  )
}

export default Block1