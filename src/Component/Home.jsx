import React from 'react'
import { BsFacebook, BsLinkedin, BsPinterest, BsTwitter } from 'react-icons/bs'
import Img from "../Assets/hassan.jpg"
import btimg from "../Assets/bost5.png"
export default function Home() {
  return (
    <>
   
      <div className='grid grid-cols-1 z-10 '>
        <div className='flex flex-col items-center mt-5'>
        <div className=''>
          <img src={Img} alt=""  className='h-60 w-60 rounded-full'/>
        </div>
         <div className='text-3xl font-bold p-2 '>
            <h1>Hassan Munir </h1>
         </div>
         <div className='text-gray-600 p-3'>
            <h2>Web Developer</h2></div>
         <div className='   flex p-3'>
            <i className='bg-white rounded m-2 p-2 hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476]'>
                <BsFacebook  className='text-2xl hover:text-white text-blue-900'/>
                </i>
            <i className='bg-white rounded m-2 p-2 hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476]'>
               < BsTwitter className='text-2xl hover:text-white text-blue-700'/>
            </i>
            <i className='bg-white rounded m-2 p-2 hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476]'>
               <BsPinterest className='text-2xl hover:text-white text-red-700'/>
            </i>
            <i className='bg-white rounded m-2 p-2 hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476]'>
                <BsLinkedin className='text-2xl hover:text-white text-cyan-700'/>
            </i>
         </div>
         <div className='p-5'>
            <button className='flex justify-center items-center px-8 py-3 rounded-full bg-gradient-to-r from-[#fa5252] to-[#dd2476] '>
                <img src={btimg} alt="" className='mr-2 ' />
                <h2>Download CV</h2>
            </button>
         </div>
        </div>
      
         </div>

{/* </div> */}
    </>
  )
}
