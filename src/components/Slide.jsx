import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swiper.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import Slide01 from "../assets/img/slide/Slide-WS789-01.webp"
import Slide02 from "../assets/img/slide/Slide-WS789-02.webp"
import Slide03 from "../assets/img/slide/Slide-WS789-03.webp"
import Slide04 from "../assets/img/slide/Slide-WS789-04.webp"
import Slide05 from "../assets/img/slide/Slide-WS789-05.webp"
import Slide06 from "../assets/img/slide/Slide-WS789-06.webp"
import Slide07 from "../assets/img/slide/Slide-WS789-07.webp"
import Slide08 from "../assets/img/slide/Slide-WS789-08.webp"

function Slide() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      loop={true}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide><img src={Slide01} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Slide02} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Slide03} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Slide04} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Slide05} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Slide06} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Slide07} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Slide08} alt="" /></SwiperSlide>
    </Swiper>
  )
}

export default Slide