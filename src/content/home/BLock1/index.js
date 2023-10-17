import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react'
import Countdown from 'react-countdown';
function Block1( { display } ) {
    const router = useRouter()
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
 
    let interval = useRef()

    const startTimer = () => {
        const countdownDateET = new Date('Oct 2, 2023 22:30:00');
        countdownDateET.setTime(countdownDateET.getTime()-countdownDateET.getTimezoneOffset()*60*1000)
        console.log(countdownDateET.setTime(countdownDateET.getTime() - countdownDateET.getTimezoneOffset() * 60 * 1000))
        interval = setInterval(() => {
          const now = new Date().getTime();
          const distance = countdownDateET - now;
    
          const daytime = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hourtime = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const sec = Math.floor((distance % (1000 * 60)) / 1000);
         
          if (distance < 0) {
            clearInterval(interval.current);
          } else {
            setDays(daytime.toString().padStart(2, '0'));
            setHours(hourtime.toString().padStart(2, '0'));
            setMinutes(min.toString().padStart(2, '0'));
            setSeconds(sec.toString().padStart(2, '0'));
          }
        });
      };
    
      useEffect(() => {
        startTimer();
        return () => {
          clearInterval(interval);
        };
      }, []);
    

    const Completionist = () => <span>You are good to go!</span>;
    const renderer = ( { days, hours, minutes, seconds, completed } ) => {
        if ( completed ) {
            // Render a completed state
            return <Completionist />;
        } else {

            return 
        }
    };
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
                        <div className='justify-center items-center flex  '>
                            {/* {
                                display === 'swapcommunity' ? ( <div className='h-full w-11/12 text-center'>
                                    <p className='text-[#fff] text-[1.5rem] md:text-[36px] font-bold'>10 to 21 days</p>
                                    <p className='text-[#fff] text-[1.8rem] md:text-[56px] font-bold  text-center homePageTextShadow'>COMING SOON...</p>
                                </div>

                                ) : ( display === 'marketplace' ? (
                                    <div className='  h-full  text-center w-11/12'>
                                        <p className='text-[#fff] text-[1.5rem] md:text-[36px] font-bold'>7 to 10 days</p>
                                        <p className='text-[#fff] text-[1.8rem] md:text-[56px] font-bold  text-center homePageTextShadow'>COMING SOON...</p>
                                    </div>
                                ) : ( display === "dex" ? ( <div className='h-full w-11/12   text-center '>
                                    <p className='text-[#fff] text-[1.5rem] md:text-[36px] font-bold'>5 to 10 days</p>
                                    <p className='text-[#fff] text-[1.8rem] md:text-[56px] font-bold text-center homePageTextShadow'>COMING SOON...</p>
                                </div> ) : ( <div className=' w-full text-center'>
                                    <h2 className='text-[#fff] text-2xl md:text-3xl font-semibold py-0 md:py-5 text-center'>BEGIN YOUR CONQUEST IN</h2>
                                    <div className='text-center text-3xl md:text-5xl font-bold  text-shadow-lg text-[#fff] counterTextShadow'>{days}:{hours}:{minutes}:{seconds}</div>

                                    <div className='text-base font-normal text-[#fff] lg:text-gray-300 '>
                                        Sept 30, 2023
                                    </div>
                                </div> )
                                ) )
                            } */}
                                 
                                <button onClick={()=> router.push("/main")}
                                className='w-fit md:w-fit px-5 bg-[#12110f] text-[#fff] border-2 border-[#78E9C3] py-2  text-sm md:text-lg lg:text-2xl hover:text-[#fff] cursor-pointer  hover:bg-[#78E9C3] rounded-[2.64px] duration-200'>ENTER THE GAME</button>
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
