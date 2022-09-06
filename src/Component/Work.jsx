import React from "react";
import Heading from "./Heading";
import BlogCard from "./BlogCard";
import Pic1 from "../Assets/bost22.jpg";
import Pic2 from "../Assets/bost4.jpg";
import Pic3 from "../Assets/bost7.jpg";
import Pic4 from "../Assets/bostgreen.jpg";
import Pic5 from "../Assets/bost5.jpg";
import Pic6 from "../Assets/bost16.jpg";
import Pic7 from "../Assets/bost20.jpg";
import Pic8 from "../Assets/bost6.jpg";
import Pic9 from "../Assets/bost9.jpg";
import Footer from "./Footer";
export default function Work() {
  return (
    <div className="container mx-auto p-10">
    <div className="bg-white">
      <div className=" ">
        <Heading tittle={{ head: "Works" }} />
      </div>
      <div className="container mx-auto m">
          <ul className="flex justify-end space-x-4 text-1xl font-bold mx-10 text-gray-400">
            <li className="text-red-500">All</li>
            <li className="hover:text-red-500">Video</li>
            <li className="hover:text-red-500">Web Design</li>
            <li className="hover:text-red-500">Logo</li>
            <li className="hover:text-red-500">Web Devlopment</li>
          </ul>
        </div>
      <div className="bg-white">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-3">
          <BlogCard
            card={{
              src: Pic1,
              date: "UI/UX",
              head: "Chul urina",
              bd: "bg-[#FFF0F0]",
            }}
          />

          <BlogCard
            card={{
              src: Pic2,
              date: "Web Design",
              head: "Aura Dione",
              bd: "bg-[#FFF3FC]",
            }}
          />

          <BlogCard
            card={{
              src: Pic3,
              date: "Logo",
              head: "Chul urina",
              bd: "bg-[#FFF0F0]",
            }}
          />

          <BlogCard
            card={{
              src: Pic4,
              date: "Video",
              head: "Chul urina",
              bd: "bg-[#E9FAFF]",
            }}
          />

          <BlogCard
            card={{
              src: Pic5,
              date: "UI/UX",
              head: "Chul urina",
              bd: "bg-[#FFFAE9]",
            }}
          />

          <BlogCard
            card={{
              src: Pic6,
              date: "Video",
              head: "Chul urina",
              bd: "bg-[#F4F4FF]",
            }}
          />

          <BlogCard
            card={{
              src: Pic7,
              date: "UI/UX",
              head: "Chul urina",
              bd: "bg-[#FFF0F8]",
            }}
          />

          <BlogCard
            card={{
              src: Pic8,
              date: "Web Design",
              head: "Chul urina",
              bd: "bg-[#FFF0F8]",
            }}
          />

          <BlogCard
            card={{
              src: Pic9,
              date: "Logo",
              head: "Chul urina",
              bd: "bg-[#FCF4FF]",
            }}
          />
        </div>
      </div>
      <div>
        <Footer foot={{ para: "© 2022 All Rights Reserved by Portfolio." }} />
      </div>
    </div>
    </div>
  );
}
