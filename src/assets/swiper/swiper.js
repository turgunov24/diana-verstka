import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//assets
import Image from "../images/maldives.jpg";
import Image2 from "../images/maldives2.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "./swiper.css";

// import required modules
import { Scrollbar } from "swiper";

export default function MySwiper() {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Image} alt="SwiperImage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} alt="SwiperImage" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
