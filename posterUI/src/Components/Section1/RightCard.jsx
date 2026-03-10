import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 rounded-4xl shrink-0 overflow-hidden relative bg-black'>

        <img className='object-cover h-full w-full opacity-70' src={props.img} alt="" />

        <RightCardContent id={props.id +1} tag={props.tag} intro={props.intro} color={props.color}/>

    </div>
  )
}

export default RightCard