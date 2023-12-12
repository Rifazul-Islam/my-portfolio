// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = ({ img1, img2, img3 }) => {
  return (
    <>
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <figure className="mt-3">
            <img className=" h-72 w-full" src={img1} alt="Shoes" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="mt-3">
            <img className=" h-72 w-full" src={img2} alt="Shoes" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="mt-3">
            <img className=" h-72 w-full" src={img3} alt="Shoes" />
          </figure>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
