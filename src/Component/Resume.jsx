import React from "react";
import { FaGraduationCap, FaMedal, FaShoppingBag } from "react-icons/fa";
import Heading from "./Heading";
import Resume1 from "./Resume1";
import Footer from "./Footer";
import Knowledge from "./Knowledge";
export default function Resume() {
    return (
      <>
      <div className="container mx-auto py-20  ">
    <div className="bg-white py-20">
      <div className="">
        <Heading tittle={{ head: "Resume" }} />
      </div>

      <div className=" grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 bg">
        <div className="   ">
          <div className="flex space-x-3 text-2xl px-5 ">
            <div className="text-[#F95054] flex ">
              <FaGraduationCap />
            </div>
            <div className="">
              <h1 className="font-bold">Education</h1>
            </div>
          </div>
          <Resume1
            card={{
              color: "bg-[#FFF4F4]",
              date: "2015-2020",
              tittle: "BSCS",
              pahra: "NCBA&ECC",
            }}
          />

          <Resume1
            card={{
              color: "bg-[#EEF5FA]",
              date: "201  3-2015",
              tittle: "Computer Science",
              pahra: "Punjab Group Of College",
            }}
          />
          <Resume1
            card={{
              color: "bg-[#FCF4FF]",
              date: "2011-2013",
              tittle: "Matric",
              pahra: "Punjab Board",
            }}
          />
        </div>

        <div className="container-fluid  flex flex-col">
          <div className="flex space-x-2 text-2xl px-5">
            <div className="text-[#F95054] flex">
              <FaShoppingBag />
            </div>
            <div>
              <h1 className="font-bold">Experience</h1>
            </div>
          </div>

          <Resume1
            card={{
              color: "bg-[#FFF1FB]",
              date: "2016-2022",
              tittle: "BSCS",
              pahra: "NCBA&ECC",
            }}
          />

          <Resume1
            card={{
              color: "bg-[#F2F4FF]",
              date: "2016-2022",
              tittle: "BSCS",
              pahra: "NCBA&ECC",
            }}
          />

          <Resume1
            card={{
              color: "bg-[#FCF9F2]",
              date: "2016-2022",
              tittle: "BSCS",
              pahra: "NCBA&ECC",
            }}
          />
        </div>

        <div className="container-fluid flex flex-col">
          <div className="flex space-x-2 text-2xl px-5">
            <div className="text-[#F95054] flex">
              <FaMedal />
            </div>
            <div className="text-bold">
              <h1>Awards</h1>
            </div>
          </div>
          <Resume1
            card={{
              color: "bg-[#FFF4F4]",
              date: "2016-2022",
              tittle: "BSCS",
              pahra: "NCBA&ECC",
            }}
          />

          <Resume1
            card={{
              color: "bg-[#EEF5FA]",
              date: "2016-2022",
              tittle: "BSCS",
              pahra: "NCBA&ECC",
            }}
          />

          <Resume1
            card={{
              color: "bg-[#FCF4FF]",
              date: "2016-2022",
              tittle: "BSCS",
              pahra: "NCBA&ECC",
            }}
          />
        </div>
      </div>
      </div> 
    
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 bg-[#F8FBFB] py-4 container mx-auto ">
      <div className=" py-5 px-10">
        <h1 className="text-4xl py-3">working skills</h1>
        <div className=" flex justify-between ">
          <p className="text-gray-400 text-lg font-bold">web design</p>
          <p className="font-bold">80%</p>
        </div>
        <div className="w-full h-[7px] rounded bg-gray-200">
          <div className="bg-[#FF6464] h-[5px] w-[80%] rounded"></div>
        </div>

        <div className=" flex justify-between py-4 ">
          <p className="text-gray-400 text-lg font-bold">web design</p>
          <p className="font-bold">95%</p>
        </div>
        <div className="w-full h-[7px] rounded bg-gray-200">
          <div className="bg-[#9272D4] h-[5px] w-[95%] rounded"></div>
        </div>

        <div className=" flex justify-between py-4">
          <p className="text-gray-400 text-lg font-bold">Mobile</p>
          <p className="font-bold">65%</p>
        </div>
        <div className="w-full h-[7px] around bg-gray-200">
            <div className="bg-[#5185D4] h-[5px] w-[65%] rounded"></div>
        </div>

        <div className=" flex justify-between py-4">
          <p className="text-gray-400 text-lg font-bold">Mobile</p>
          <p className="font-bold">75%</p>
        </div>
        <div className="w-full h-[7px] around bg-gray-200">
            <div className="bg-[#CA56F2] h-[5px] w-[75%] rounded"></div>
        </div>
      </div>
          
      <div className=" py-5">
      <div className=" px-11">
            <h1 className="bg-[#F8FBFB] text-4xl py-3">Knowledges</h1>
          </div>
          <div className="flex flex-wrap gap-5 px-5">
            <Knowledge skill={{ dis: "HTML" }} />
            <Knowledge skill={{ dis: "CSS" }} />
            <Knowledge skill={{ dis: "BostStrap" }} />
            <Knowledge skill={{ dis: "JavaScript" }} />
            <Knowledge skill={{ dis: "Tailwind Css" }} />
            <Knowledge skill={{ dis: "React Tailwind" }} />
            <Knowledge skill={{ dis: "React Js" }} />
            <Knowledge skill={{ dis: "Social Media" }} />
            <Knowledge skill={{ dis: "Time Managment" }} />
            <Knowledge skill={{ dis: "Flexibility" }} />
            <Knowledge skill={{ dis: "Print" }} />
          </div>
        </div>
    
      </div>
      <div>
        <Footer foot={{ para: "© 2022 All Rights Reserved by Portfolio." }} />
       </div>
      </div>
      </>
   
  );
}
