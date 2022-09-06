import React from "react";
import { BsMoonStars, BsList } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import {FiCodesandbox} from "react-icons/fi"
import {BsPerson} from "react-icons/bs";
import {FaBlogger} from "react-icons/fa";
import {TiContacts} from "react-icons/ti";
import  {RiPagesLine} from "react-icons/ri";
import Img1 from "../Assets/logo-remove.png";
import { Link } from "react-router-dom";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
    {/* <div className="main"> */}
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-transparent mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img src={Img1} alt="" className="h-20" />
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <BsList />
              {/* <i className="fas fa-bars"></i> */}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col justify-between lg:w-auto w-full lg:flex-row list-none lg:ml-auto">
             <Link to="/">
              <li className="py-2 pr-4 pl-5 mx-2 flex items-center   text-lg text-white rounded bg-[#F84F55]">
                <div className="mr-2 text3xl">
                <AiOutlineHome/>
                </div>
                Home
              </li>
              </Link>
              <Link to="/about">
              <li className="py-2 pr-4 pl-5 flex items-center mx-2 text-lg hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] bg-white rounded hover:text-white">
              <div className="mr-2">
                <BsPerson/>
                </div>
                About
              </li>
              </Link>

              <Link to="/resume">
              <li className="py-2 pr-4 pl-5 mx-2 flex items-center text-lg hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] bg-white rounded hover:text-white">
              <div className="mr-2">
                <RiPagesLine/>
                </div>
                Resume
              </li>
              </Link>

              <Link to='/work'>
              <li className="py-2 pr-4 pl-5 mx-2 text-lg flex items-center hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] bg-white rounded hover:text-white">
              <div className="mr-2">
                <FiCodesandbox/>
                </div>
                Works
              </li>
              </Link>

              <Link to='/blog'>
              <li className="py-2 pr-4 pl-5 mx-2 text-lg flex items-center hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] bg-white rounded hover:text-white">
                <div className="mr-2">
                 <FaBlogger/>
                </div>
                Blogs
              </li>
              </Link>

              <Link to='/contact'>
              <li className="py-2 pr-4 pl-5 mx-2 text-lg flex items-center hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] bg-white rounded hover:text-white">
              <div className="mr-2">
                <TiContacts/>
                </div>
                Contact
              </li>
              </Link>
            </ul>
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white">
              <BsMoonStars />
            </div>
          </div>
        </div>
      </nav>
    {/* </div> */}
      
    </>
  );
}
//     </div>
//   );
// }