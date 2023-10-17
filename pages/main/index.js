 
import Block1 from '@/src/content/main/Block1'
import Nav from '@/src/layout/Navbar'
import React, { useState } from 'react'
import { Authenticated } from '../../src/components/Authenticated';

function Main() {
  const [balance,setBalance] = useState(0 || null);
  return (
    <div className="w-full h-max bg-[url('/022.png')] bg-cover ">
        <Nav setBalance={setBalance}  balance={balance}/>
       <div className='h-full overflow-hidden'>
        <Block1 balance={balance}/>
       </div>
    </div>
  )
}




export default Main;