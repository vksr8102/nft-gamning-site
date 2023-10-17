
import { Authenticated } from '@/src/components/Authenticated'
import Block1 from '@/src/content/mining/Block1/Block1'
import MiningNav from '@/src/content/mining/nav/MiningNav'
import NavBar from '@/src/layout/NavBarMain'
import React from 'react'

function Mining() {
  return (
    <div className=''>
        <MiningNav/>
        <div className='bg-[url("/104.png")] bg-cover screen screenview'>
        <Block1/>
        </div>
    </div>
  )
}

Mining.getLayout = (page) => (
  <Authenticated>
    {page}
  </Authenticated>
);

export default Mining