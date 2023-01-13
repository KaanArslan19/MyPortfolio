import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./Testimonial.scss";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  const projectImagesWeb = [images.realtorweb, images.twitterweb];

  return (
    <>
   


   
      <Swiper
        slidesPerView={1}
        navigation
        effect="fade"
        modules={[EffectFade]}
        autoplay={{ delay: 300 }}
        className="swiper"
      >
         <div className="">

        {projectImagesWeb.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="">
              <img className="test_image" src={item} alt="image-slider" />
            </div>
          </SwiperSlide>
        ))}
        </div>
      </Swiper>
    
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
