import Block1 from '@/src/content/refining/Block1'
import Block2 from '@/src/content/refining/Block2'
import React from 'react'

function Refining() {
    return (
        <div className="  bg-no-repeat bg-[url('/0321.png')] bg-cover ">
            <Block1/>
            <div className='h-full overflow-hidden'>
                <Block2/>
            </div>
        </div>
    )
}

export default Refining
