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
      <div className="d-flex flex-row justify-content-center"></div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
