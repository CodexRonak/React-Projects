import React from 'react'
import {ArrowRight} from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div className='h-full w-full top-0 left-0 absolute p-6 flex flex-col justify-between'>
            <h2 className='h-8 w-8 rounded-full bg-white text-center justify-center flex text-lg font-bold'>{props.id}</h2>
            <p className='mt-60 text-white leading-relaxed text-shadow-md'>{props.intro}</p>
            <div className='flex justify-between rounded-full p-0'>
                <button style={{backgroundColor:props.color}} className='text-white px-8 font-semibold py-2 rounded-full'>{props.tag}</button>
                <button className='text-white px-2 py-2 font-bold rounded-full '><ArrowRight /></button>
            </div>
        </div>
  )
}

export default RightCardContent