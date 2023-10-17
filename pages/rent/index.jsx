import { Authenticated } from '@/src/components/Authenticated';
import Block1 from '@/src/content/rent/block1/Block1'
import RentNav from '@/src/content/rent/nav/RentNav'
import React from 'react'
const backgroundImage ={
  backgroundImage: `url("/Rent Collection Bckgrnd.jpg")`,
    backgroundRepeat: 'no-repeat',
}
function Rent() {
  return (
    <div className='h-auto'>
        <RentNav/>
        <div className=' bg-cover screen screenview' style={backgroundImage}>
        <Block1/>
        </div>
    </div>
  )
}

Rent.getLayout = (page) => (
  <Authenticated>
    {page}
  </Authenticated>
);
export default Rent