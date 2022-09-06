import React from 'react'

export default function Resume1(props) {
  return (
    <div className='bg-white py-5'>
      <div className={`${props.card.color} container-fluid py-5 rounded-3xl`}>
        <div className='px-10 py-5'>
            <p className='text-xl'>{props.card.date}</p>
            <h1 className='text-2xl'>{props.card.tittle}</h1>
            <p className='text-xl'>{props.card.pahra}</p>
        </div>
      </div>
    </div>
  )
}
