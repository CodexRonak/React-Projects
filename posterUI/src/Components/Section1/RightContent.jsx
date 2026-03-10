import React from 'react'
import RightCard from './RightCard'


const RightContent = (props) => {
  return (
    <div id="rightContent" className='h-full w-2/3 p-6 flex gap-4 overflow-x-auto flex-nowrap'>
      {props.users.map(function (elem,idx) {
        
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro} color={elem.color}/>
      })}
    </div>
  )
}



export default RightContent