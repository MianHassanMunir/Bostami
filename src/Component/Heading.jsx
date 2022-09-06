import React from 'react'

export default function Heading(props) {
  return (
    <div className='flex items-center  rounded-tl-3xl rounded-tr-3xl bg-white'>
         <strong className='p-20 py-8 text-4xl pt-4'>{props.tittle.head}</strong>
         <hr className='w-[10rem] h-1  bg-[#dd2476]' />

    </div>
  )
}
