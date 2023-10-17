import Block1 from '@/src/content/swapcommunity/Block1'
import NavBar from '@/src/layout/NavBarMain'
import React from 'react'

function index() {
  return (
    <div className="w-full lg:h-screen h-[100vh] ">
    <NavBar />
    <div className="bg-[url('/104.png')] bg-cover py-10">
      <Block1 />
    </div>
  </div>
  )
}

export default index
