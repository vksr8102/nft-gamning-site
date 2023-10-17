import Spiner from '@/src/components/Spiner/Spiner'
import { Avatar, Box, CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
const backgroundImageStyle = {
    backgroundImage: `url("/Stats Box.png")`,
    backgroundRepeat: 'no-repeat',
  };
function BlockLeft({activeResult,result,avalible,active,setActive,setAvalible,handleCheckboxChange,handleActive,selectedIds,fetchMoremining,loading,fetchMoreActivemining,handleAvalible,handleSelectAll,selectAll,handleCancleAll,isSelectAll}) {
   console.log(result,avalible);
console.log(activeResult);
  return (
    <div className='sm:h-[550px] md:[650px] lg:h-[800px] h-[450px] ' >
        <div className='flex md:gap-2  relative'>
        <div className={`flex items-center  justify-between sm:gap-[20%] gap-[1%] xl:gap-[4%] xl:mt-[0%] md:gap-[12%] mb-1 2xl:gap-[10%] w-3/5 pr-2 sm:pr-[100px]  lg:gap-[1%] lg:mt-[3px] md:mt-[.5px] sm:mt-1  ml-[20px] mt-[-1%] sm:ml-[60px] lg:ml-[50px] lg:pr-[50px]   margin`}>
      {avalible? <img src={'/AVAILABLE_selected.png'} className={` h-[30px] w-[100px] md:h-[40px] md:w-[180px] xl:h-[40px] xl:w-[180px] lg:w-[100px] lg:h-[30px] cursor-pointer manageimg active`}  />:
        <img src={'/AVAILABLE_deselected.png'} className={`h-[30px] w-[100px] md:h-[40px] md:w-[180px] xl:h-[40px] xl:w-[180px] lg:w-[100px] lg:h-[30px]  cursor-pointer manageimg active`}  onClick={handleAvalible}/>}
      {active? <img src={'/ACTIVE_selected.png'} className={` h-[30px] w-[100px] md:h-[40px] md:w-[180px] xl:h-[40px] xl:w-[180px] lg:w-[100px] lg:h-[30px]  cursor-pointer  manageimg active`}  />:
        <img src={'/ACTIVE_deselected.png'} className={` h-[30px] w-[100px] md:h-[40px] md:w-[180px] xl:h-[40px] xl:w-[180px] lg:w-[100px] lg:h-[30px]cursor-pointer manageimg active`}  onClick={handleActive}/>}
        </div>
       
        </div>
        {/* <div className='  scroll-hide overflow-auto md:max-h-[100vh] sm:max-h-[100vh] max-h-[340px] md:ml-[40px] md:mr-[50px] ml-[40px] xl:px-6 mr-[30px] md:mt-[30px] pt-6 sm:mt-[50px] mt-[30px]'> */}
        <div id='infinite' className='  scroll-hide overflow-auto md:h-[82%] lg:h-[83%]  sm:h-[83.5%] h-[83.5%] sm:mt-[15px]  sm:mr-[80px] mt-[5px]  ml-[45px] mr-[35px] sm:ml-[60px] md:mr-20 md:ml-16  lg:mx-20 lg:mt-6 lg:pt-0  pt-2 pb-10 screencard '>
        {loading && <div className='right-[25%]  bottom-[50%] fixed   w-[100%] z-[100]'  >
<Spiner/>
        </div>  } 
        {avalible && 
          <>
        {result&&result?.data&&result?.data?.rows&&result?.data?.rows?.length===0 ?  
            <>
            {result&&result.data&&result.data?.message&&result?.data?.message !==null &&
               <div className='md:h-[400px] w-full flex justify-center items-center z-50  '>
               <div className='md:h-[300px] md:w-[400px] border-2 p-4 mt-20 border-[#FF7200] rounded-xl box-shodow flex justify-center items-center'>
      <p className='text-white text-lg font-mono text-center'>{result.data.message} </p>
               </div>
          </div>
           }
           </>
          :
         <InfiniteScroll
         dataLength={result?.data?.rows?.length>0 && result?.data?.rows?.length}
         next={fetchMoremining}
         hasMore={result?.data?.rows?.length!==result?.data?.count}
         loader={loading}
         scrollableTarget="infinite"
       >
        <div className='flex justify-end pr-4 pb-5 py-2 md:pr-4 sm:pr-10'>
        {selectAll?<button className='p-1 border border-white bg-transparent hover:bg-black text-white rounded-md uppercase text-xs' onClick={handleSelectAll}
          >
Select All
</button>:<button className='p-1 border border-white bg-transparent hover:bg-black text-white rounded-md uppercase text-xs' onClick={handleCancleAll}
          >
clear
</button>}


        </div>
        {result&&result.data&&result.data?.message&&result?.data?.message !==null &&
               <div className='md:h-[400px] w-full flex justify-center items-center z-50  '>
               <div className='md:h-[300px] md:w-[400px] border-2 p-4 mt-20 border-[#FF7200] rounded-xl box-shodow flex justify-center items-center'>
      <p className='text-white text-lg font-mono text-center'>{result.data.message} </p>
               </div>
          </div>
           }
        <div className={` grid lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-[10px] sm:gap-[20px] xl:grid-col-3  `}>
       
    { result&&result.data&&result.data.rows&&result.data.rows?.length>0 &&
    <>
   

{ result&&result.data&&result.data.rows&&result?.data?.rows?.length>0 && result.data.rows.map((item)=>(
    <>

     <div className=' ' id={item?.id}>
    <div  className='w-full lg:w-full md:w-full sm:w-full xl:w-full border-[3px] border-[#FF7200] p-[2px] cursor-pointer' onClick={()=>handleCheckboxChange(item.id)}>
<Box sx={{border:"1px solid #fff",position:"relative"}}>

    <input type="checkbox" checked={selectedIds.includes(String(item.id))} value={selectedIds?.includes(String(item.id))} name="" id='' className='absolute top-1 left-1 cursor-pointer z-50 ' onChange={() => handleCheckboxChange(item.id)} />
    <img src={item&&item.nft_web_image} className=' xl:h-[70%] lg:h-[70%] md:h-[70%] h-[70%] sm:h-[70%] h-[138px] w-[100%]  object-cover'  />
</Box>
<div className=' '>
<div>
    <p className='text-center text-white md:text-[12px] font-semibold sm:text-[12px] text-[10px] uppercase  '>Name: <span className='text-[#44B6A1]'>{item&&item.nft_name}</span> </p>
</div>
<div className='p-[3px]'>
<p className=' text-white text-[8px] xl:text-[12px]  font-semibold uppercase'>POSITION :  <span className='text-[#44B6A1]'> {item&&item.nft_subclass}</span> </p>
<p className=' text-white text-[8px]  xl:text-[12px]  font-semibold uppercase'>Daily Cost :  <span className='text-[#44B6A1]'> {item&&item.base_cost}</span> </p>
<p className=' text-white text-[8px] xl:text-[12px]   font-semibold uppercase'>Daily Production :   <span className='text-[#44B6A1]'> {item.base_production} </span> </p>
<p className=' text-white text-[8px] xl:text-[12px]   font-semibold uppercase'>Tax % :   <span className='text-[#44B6A1]'> {item.base_tax} </span> </p>
<p className=' text-white text-[8px] xl:text-[12px]   font-semibold uppercase'>Theft % :   <span className='text-[#44B6A1]'> {item.base_theft} </span> </p>
<p className=' text-white text-[8px] 2xl:text-[14px]   font-semibold uppercase'>Free Action :   <span className='text-[#44B6A1]'> {item?.free_action ===1  ? "free":"Paid"} </span> </p>
</div>
</div>
       </div>
       </div> 
      
    </>
    ))}
    </>
}
        </div>
    </InfiniteScroll>
}
    </>
}
        {active && 
        <>
        {activeResult&&activeResult?.data&&activeResult?.data?.rows&&activeResult?.data?.rows?.length===0 ?  
        <>
        {activeResult&&activeResult.data&&activeResult.data?.message&&activeResult?.data?.message !==null &&
            <div className='md:h-[400px] w-full flex justify-center items-center z-50  '>
            <div className='md:h-[300px] md:w-[400px] border-2 p-4 mt-20 border-[#FF7200] rounded-xl box-shodow flex justify-center items-center'>
   <p className='text-white text-lg font-mono text-center'>{activeResult.data.message} </p>
            </div>
       </div>
       }
       </>
      :
      <InfiniteScroll
      dataLength={activeResult?.data?.rows?.length>0 &&activeResult?.data?.rows?.length}
      next={fetchMoreActivemining}
      hasMore={activeResult?.data?.rows?.length!==activeResult?.data?.count}
      loader={loading}
      scrollableTarget="infinite"
      >
         {activeResult&&activeResult.data&&activeResult.data?.message&&activeResult?.data?.message !==null &&
            <div className='md:h-[400px] w-full flex justify-center items-center z-50  '>
            <div className='md:h-[300px] md:w-[400px] border-2 p-4 mt-20 border-[#FF7200] rounded-xl box-shodow flex justify-center items-center'>
   <p className='text-white text-lg font-mono text-center'>{activeResult.data.message} </p>
            </div>
       </div>
       }
        <div className={` grid lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-[10px] sm:gap-[20px] xl:grid-col-3  `}>
     

    {activeResult&&activeResult.data&&activeResult.data?.rows&&activeResult?.data?.rows?.length>0 &&
    <>

{ activeResult&&activeResult.data&&activeResult.data.rows&&activeResult?.data?.rows?.length>0 && activeResult.data.rows.map((item)=>(
    <>
    <div className='flex justify-center ' id={item?.id}>
    <div  className='w-full lg:w-full md:w-full sm:w-full xl:w-full border-[3px] border-[#FF7200] p-[2px] cursor-pointer' onClick={()=>handleCheckboxChange(item.id)}>
<Box sx={{border:"1px solid #fff",position:"relative"}} >
    

    <img src={item&&item.nft_web_image} className=' xl:h-[70%] lg:h-[70%] md:h-[70%] h-[70%] sm:h-[70%] h-[138px] w-[100%]  object-cover'  />
</Box>
<div className=''>
<div >
    <p className='text-center text-white md:text-[12px] font-semibold sm:text-[12px] text-[10px] uppercase  '>Name: <span className='text-[#44B6A1]'>{item&&item.nft_name}</span> </p>
</div>
<div className='p-[3px]'>
<p className=' text-white text-[8px] xl:text-[12px]  font-semibold uppercase'>POSITION :  <span className='text-[#44B6A1]'> {item&&item.nft_subclass}</span> </p>
<p className=' text-white text-[8px]  xl:text-[12px]  font-semibold uppercase'>Daily Cost :  <span className='text-[#44B6A1]'> {item&&item.base_cost}</span> </p>
<p className=' text-white text-[8px] xl:text-[12px]   font-semibold uppercase'>Daily Production :   <span className='text-[#44B6A1]'> {item.base_production} </span> </p>
<p className=' text-white text-[8px] xl:text-[12px]   font-semibold uppercase'>Tax % :   <span className='text-[#44B6A1]'> {item.base_tax} </span> </p>
<p className=' text-white text-[8px] xl:text-[12px]   font-semibold uppercase'>Theft % :   <span className='text-[#44B6A1]'> {item.base_theft} </span> </p>
<p className=' text-white text-[8px] 2xl:text-[14px]   font-semibold uppercase'>Free Action :   <span className='text-[#44B6A1]'> {item?.free_action ===1  ? "free":"Paid"} </span> </p>
</div>
</div>
       </div>
     
       </div>  
    </>
    ))}
    </>
}
        </div>
        </InfiniteScroll>
}
</>
}
</div>
    </div>
  )
}

export default BlockLeft