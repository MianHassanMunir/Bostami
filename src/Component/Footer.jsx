import React from 'react'

export default function Footer(props) {
  return (
    <div className='bg-white'>
        <p className='text-center text-gray-400 py-5'>{props.foot.para}</p>
    </div>
  )
}