"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "@/css/swiper.css";

import { EffectCoverflow, Pagination } from "swiper/modules";

import data from "@/assets/data.json";
import Image from "next/image";

const SwiperSlideComponent = () => {
  return (
    <div className="container mx-auto min-h-[400px] py-10">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent text-center mt-10">
        Swiper Slide example
      </h1>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper mt-10"
      >
        {data.map((item) => (
<SwiperSlide key={item.id} className="!w-[250px]">
  <div className="bg-white rounded-xl shadow-md p-3">
    
    <div className="relative w-full h-[260px]">
      <Image
        src={item.image_url}
        alt={item.title}
        fill
        className="rounded-lg object-cover"
      />
    </div>

    <p className="text-center px-3 py-2 font-medium">
      {item.title}
    </p>

  </div>
</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlideComponent;