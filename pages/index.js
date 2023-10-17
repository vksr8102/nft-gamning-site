import Image from 'next/image'
import { Inter } from 'next/font/google'
import Block1 from '@/src/content/home/BLock1'
import NavBar from '@/src/layout/NavBarMain'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
   
  
  return (
   <>
    <div className="w-full lg:h-screen h-[100vh] ">
      <NavBar />
      <div className="bg-[url('/104.png')] bg-cover py-10">
        <Block1 />
      </div>
    </div>
   </>
  )
}
