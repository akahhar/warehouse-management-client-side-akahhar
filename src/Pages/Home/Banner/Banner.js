import React from "react";
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img4 from "../../../images/banner/img-about1.jpg";
import img2 from "../../../images/banner/portfolio1-page.jpg";
import img1 from "../../../images/banner/slider-1.jpg";
import img3 from "../../../images/banner/slider-2.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <Swiper
        // spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
