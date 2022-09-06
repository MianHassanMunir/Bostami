import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";

import Slide from "../Assets/bost10.png";
import Slide1 from "../Assets/bost11.png";
import Slide2 from "../Assets/bost12.png";
import Slide3 from "../Assets/bost13.png";
import Slide4 from "../Assets/bost14.png";

export default function Slider() {
  return (
    <div className="py-20 bg-[#F8FBFB] rounded-xl">
      <h1 className="text-center text-4xl font-bold pb-10">Clients</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        speed={2000}
        autoplay={{
          delay: 2500,
          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }
        }}
        
        modules={[Autoplay]}
        className="mySwiper"
        
      >
        
  
        <SwiperSlide>
          <img src={Slide} className="py-4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide1} className="py-2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide4} className="py-2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide} className="py-4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide1} className="py-2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} className="py-2" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}