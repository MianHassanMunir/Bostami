import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Img1 from "../Assets/bostPhone.png";
import Img2 from "../Assets/bost19.png";
import Img3 from "../Assets/bostMap.png";

export default function Contact() {
  return (
    < div className="container mx-auto p-10">
    
      <div className="container_flud bg-white rounded-2xl">
      <div className=" ">
        <Heading tittle={{ head: "Contact" }} />
      </div>                                             
      <div className="grid md:grid-cols-3 grid-cols-1  gap-10">
        <div className="md:col-span-1 col-span-3">
          <div className="flex justify-around py-5 my-3 bg-[#FCF4FF] rounded-2xl md:mx-10 mx-0">
            <img src={Img1} className="h-10"/>
            <div>
              <p className="font-bold">Phone:</p>
              <p className="text-gray-600">+92 308 4883741</p>
              <p className="text-gray-600">+92 309 1469686</p>
            </div>
          </div>
          <div className="flex justify-around py-5 my-3 bg-[#FCF4FF] rounded-2xl lg:mx-10 mx-0">
            <img src={Img2} className="h-10"/>
            <div>
              <p className="font-bold">Email:</p>
              <p className="text-gray-600">talha846812@gmail.com</p>
              <p className="text-gray-600">talha452513@gmail.com</p>
            </div>
          </div>
          <div className="flex justify-around py-5 my-3 bg-[#FCF4FF] rounded-2xl lg:mx-10 mx-0">
            <img src={Img3} className="h-10"/>
            <div>
              <p className="font-bold">Location:</p>
              <p className="text-gray-600">Country Pakistan</p>
              <p className="text-gray-600">Lahore Cantt</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 col-span-3 mx-10 my-5 bg-[#F8FBFB] rounded-2xl">
          <div className="mx-10">
          <p className="text-2xl py-4 text-gray-400">I'm always open to discussing product</p>
          <p className="text-2xl font-bold">design work or partnerships.</p>
          <div className="flex flex-col">
            <input type="text" placeholder={`Name*`} className="bg-[#F8FBFB] inpot my-5 outline-none  border-b-2 px-3 py-2"/>
            <input type="text" placeholder="Email*" className="bg-[#F8FBFB] inpot my-5 outline-none border-b-2 px-2 py-2"/>
            <input type="text"  placeholder="Message*" className="bg-[#F8FBFB] inpot my-5 outline-none border-b-2 px-2 py-2"/>
          </div>
          <button className="rounded border-2 hover:border-none  hover:bg-gradient-to-r from-[#F74D56] to-[#DF2774] duration-500 hover:text-white  border-gray-400 px-5 py-2">Submit</button>
          </div>
        </div>
      </div>
      <div>
        <Footer foot={{ para: "© 2022 All Rights Reserved by Portfolio." }} />
      </div>
    </div>

    </div>
  )
}
