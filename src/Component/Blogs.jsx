import React from "react";
import Heading from "./Heading";
import BlogCard from "./BlogCard";
import Pic1 from "../Assets/bost16.jpg";
import Pic2 from "../Assets/bost17.jpg";
import Pic3 from "../Assets/bost33.jpg";
import Pic4 from "../Assets/bost6.jpg";
import Pic5 from "../Assets/bost20.jpg";
import Pic6 from "../Assets/bost21.jpg";
import Footer from "./Footer";

export default function Blogs() {
  return (
    <div className="container mx-auto">
      <div className=" ">
        <Heading tittle={{ head: "Blogs" }} />
      </div>
      <div className="bg-white">
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-3 ">
          <BlogCard
            card={{
              src: Pic1,
              date: "177 April . Inspiration",
              head: "How to Own Your Audience by Creating an Email List.",
              bd: "bg-[#FCF4FF]",
            }}
          />

          <BlogCard
            card={{
              src: Pic2,
              date: "177 April . Inspiration",
              head: "How to Own Your Audience by Creating an Email List.",
              bd: "bg-[#EEFBFF]",
            }}
          />
          <BlogCard
            card={{
              src: Pic3,
              date: "177 April . Inspiration",
              head: "How to Own Your Audience by Creating an Email List.",
              bd: "bg-[#FFF0F0]",
            }}
          />

          <BlogCard
            card={{
              src: Pic4,
              date: "177 April . Inspiration",
              head: "How to Own Your Audience by Creating an Email List.",
              bd: "bg-[#FFF0F0]",
            }}
          />

          <BlogCard
            card={{
              src: Pic5,
              date: "177 April . Inspiration",
              head: "How to Own Your Audience by Creating an Email List.",
              bd: "bg-[#FFF0F0]",
            }}
          />

          <BlogCard
            card={{
              src: Pic6,
              date: "177 April . Inspiration",
              head: "How to Own Your Audience by Creating an Email List.",
              bd: "bg-[#FFF0F0]",
            }}
          />
        </div>
      </div>
      <div>
        <Footer foot={{ para: "© 2022 All Rights Reserved by Portfolio." }} />
      </div>
    </div>
  );
}
