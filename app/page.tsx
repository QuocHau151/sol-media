"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
export default function Page() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="/assets/img/1.jpg" width={1920} height={1080} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/assets/img/2.jpg" width={1920} height={1080} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/assets/img/3.jpg" width={1920} height={1080} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/assets/img/4.jpg" width={1920} height={1080} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/assets/img/5.jpg" width={1920} height={1080} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/assets/img/6.jpg" width={1920} height={1080} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/assets/img/7.jpg" width={1920} height={1080} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/assets/img/8.jpg" width={1920} height={1080} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/assets/img/9.jpg" width={1920} height={1080} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
