import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import img1 from "../assets/banner/banner-1.jpg";
import img2 from "../assets/banner/banner-4.jpg";
import img3 from "../assets/banner/banner-5.jpg";
import { Fade, Slide } from "react-awesome-reveal";
const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      effect="fade"
      speed={2000}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      onSwiper={(swiper) => swiper}
      onSlideChange={() => "slide change"}
      className="w-full h-[500px]"
    >
      <SwiperSlide>
        <div className="w-full h-full relative">
          <img
            src={img3}
            alt="Career Assessment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-5">
          <Fade delay={500} duration={1200}> <h1 className="text-4xl md:text-6xl font-bold mb-4">
            "Delight in Every Bite – Explore, Order, and Enjoy with FoodHive!"
            </h1>
            <p className="text-lg md:text-xl">
              Explore your favorite food in your favorite place FoodHive.
            </p></Fade>
                <Slide direction="down" duration={800}><div className="space-x-3 mt-10">
                <button className="btn btn-warning">All Foods</button>
                <button className="btn btn-outline btn-warning">Contuct Us</button>
                </div></Slide>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full relative">
          <img
            className="w-full h-full object-cover"
            src={img2}
            alt="Interview Preparation"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-5">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
            "Delight in Every Bite – Explore, Order, and Enjoy with FoodHive!"
            </h1>
            <p className="text-lg md:text-xl">
              Explore your favorite food in your favorite place FoodHive.
            </p>
                <div className="space-x-3 mt-10">
                <button className="btn btn-warning">All Foods</button>
                <button className="btn btn-outline btn-warning">Contuct Us</button>
                </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full relative">
          <img
            className="w-full h-full object-cover"
            src={img1}
            alt="Academic Counseling"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-5">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
            "Delight in Every Bite – Explore, Order, and Enjoy with FoodHive!"
            </h1>
            <p className="text-lg md:text-xl">
              Explore your favorite food in your favorite place FoodHive.
            </p>
                <div className="space-x-3 mt-10">
                <button className="btn btn-warning">All Foods</button>
                <button className="btn btn-outline btn-warning">Contuct Us</button>
                </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
