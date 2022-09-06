import React from 'react'

export default function About2(props) {
  return (
    
     <div className='bg-white py-5 ' >
        <div className={`${props.card.color} container_fluid py-10 rounded-xl flex`}>
        <div className='mx-5'>
        <img src={props.card.logo} alt="" className='w-28' />
        </div>    
        <div className=''>
          <strong className='text-2xl'>  {props.card.tittle}</strong>
          <p className='pt-3 text-gray-500'>{props.card.para}</p>
        </div>
        </div>
     </div>
    
  )
}
