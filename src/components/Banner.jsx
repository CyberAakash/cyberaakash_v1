/* eslint-disable no-undef */
// import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Navigation, Autoplay } from "swiper";


// const images = [
//   { image: require("/images/FBW1.jpg") }, // Each of these objects are passed to the `src` prop of every image
//   { image: require("/images/FBW2.jpg") },
//   { image: require("/images/FBW1]3.jpg") },
// ];

function Banner() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        grabCursor={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        // height={1000}
        // width={800}
        // removeClippedSubviews={false}
        // loadMinimal
        // loadMinimalSize={3}
        className="mySwiper mx-10 mt-40 mb-20 px-10 pt-14 grid place-content-center place-items-center max-w-[800px] h-fit sm:h-full overflow-hidden"
      >
        <SwiperSlide className="h-screen text-center grid place-content-center place-items-center text-white bg-transparent">
          <img
            src="/images/FBW1.png"
            className="w-full min-h-full object-contain "
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="h-screen text-center grid place-content-center place-items-center text-white bg-transparent">
          <img
            src="/images/FBW2.png"
            className="w-full min-h-full object-contain "
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="h-screen text-center grid place-content-center place-items-center text-white bg-transparent">
          <img
            src="/images/FBW6.png"
            className="w-full min-h-full object-contain "
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="h-screen text-center grid place-content-center place-items-center text-white bg-transparent">
          <img
            src="/images/FBW7.png"
            className="w-full min-h-full object-contain "
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Banner;
