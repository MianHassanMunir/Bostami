import React from "react";
import Heading from "./Heading";
import About2 from "./About2";
import Footer from "./Footer";
import Side from "../Assets/HAS.jpeg";
import { BsPhone } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";
import Pic1 from "../Assets/bostami1.svg";
import Pic2 from "../Assets/bostami2.svg";
import Pic3 from "../Assets/bostami3.svg";
import Pic4 from "../Assets/bostami4.svg";
import Pic5 from "../Assets/bostami5.svg";
import Pic6 from "../Assets/bostami6.svg";
import Slider from "./Slider";
export default function About() {
  return (
    <>
      <div className="container mx-auto py-20   ">
        <div className="bg-white">
          <div className=" ">
            <Heading tittle={{ head: "About Us" }} />
          </div>
          <div className="grid  lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 bg-white py-3">
            <div className=" px-10 col-span-1">
              <img
                src={Side}
                alt=""
                className="lg:w-80 lg:h-80  md:w-[80%] mx-auto rounded-xl "
              />
            </div>
            <div className="  col-span-2  lg:p-0 p-16  ">
              <h2 className="text-black text-2xl py-2">Who am i?</h2>
              <p className="text-xl md:text-start text-center text-gray-500 lg:w-[80%]">
                I'm Creative Director and UI/UX Designer from Sydney, Australia,
                working in web development and print media. I enjoy turning
                complex problems into simple, beautiful and intuitive designs.
              </p>

              <p className="text-xl md:text-start text-center text-gray-500 lg:w-[80%]">
                My aim is to bring across your message and identity in the most
                creative way. I created web design for many famous brand
                companies
              </p>
              <div className="py-3">
                <h1 className="text-black text-2xl">Personal Info</h1>
                <div className="grid lg:grid-cols-2 sm:grid-cols-1">
                  <div className="flex items-center space-x-3 py-4">
                    <div className="bg-white ">
                      <BsPhone className="text-2xl text-[#dd2476] rounded" />
                    </div>
                    <div>
                      <p>Phone</p>
                      <p>0323 4959302</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="bg-white">
                      <HiLocationMarker className="text-2xl text-[#dd2476] rounded" />
                    </div>
                    <div>
                      <p>Location</p>
                      <p>Lahore,Pakistan </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-white">
                      <HiOutlineMail className="text-2xl text-[#dd2476] rounded" />
                    </div>
                    <div>
                      <p>Email</p>
                      <p>mian.hassanmunir11@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 py-4">
                    <div className="bg-white ">
                      <AiOutlineCalendar className="text-2xl text-[#dd2476] rounded" />
                    </div>
                    <div>
                      <p>Birthday</p>
                      <p>August 16,1995</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white px-1">
            <strong className="px-12 text-3xl">What I do!</strong>

            <div className="container mx-auto grid  lg:grid-cols-3  md:grid-cols-2 gap-5">
              <About2
                card={{
                  logo: Pic1,
                  tittle: "Ui/Ux Design",
                  color: "bg-[#FCF4FF]",
                  para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
                }}
              />

              <About2
                card={{
                  color: "bg-[#FEFAF0]",
                  logo: Pic2,
                  tittle: "Ui/Ux Design",
                  para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
                }}
              />

              <About2
                card={{
                  color: "bg-[#FCF4FF]",
                  logo: Pic3,
                  tittle: "Ui/Ux Design",
                  para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
                }}
              />

              <About2
                card={{
                  color: "bg-[#FFF4F4]",
                  logo: Pic4,
                  tittle: "Ui/Ux Design",
                  para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
                }}
              />
              <About2
                card={{
                  color: "bg-[#FFF0F8]",
                  logo: Pic5,
                  tittle: "Ui/Ux Design",
                  para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
                }}
              />
              <About2
                card={{
                  color: "bg-[#F3FAFF]",
                  logo: Pic6,
                  tittle: "Ui/Ux Design",
                  para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
                }}
              />
            </div>
          </div>
          <div >
            <Slider />
          </div>
        <div className="py-20">
          <Footer foot={{ para: "© 2022 All Rights Reserved by Portfolio." }} />
        </div>
        </div>
      </div>
    </>
  );
}
