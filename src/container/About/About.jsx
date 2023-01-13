import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";
import { images } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";
import SimpleImageSlider from "react-simple-image-slider";

let isMobile = true;

const About = () => {
  const [abouts, setAbouts] = useState([]);
  SwiperCore.use([Autoplay, Navigation, Pagination]);

  const [width, setWidth] = useState(window.innerWidth);
  const projectImagesMobile = [images.realtormobile, images.twittermobile];
  const projectImagesWeb = [images.realtorweb, images.twitterweb];
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
    isMobile = window.innerWidth < 1400 ? true : false;
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      {console.log(width)}
      <div className="app__portfolio">
        <h2 className="head-text">
          I Know that <span>Good Design</span> <br />
          means <span>Good Business</span>
        </h2>

        {/*       {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
           
          </motion.div>
        ))} */}

        <div className="app_responsive_projects ">
          {!isMobile && (
            <div className="app_responsive_design_mac app__flex ">
              <img className="frame" src={images.macframe} alt="mac-frame" />

              <div className="project_image app__flex">
                <img
                  className="web_image"
                  src={images.realtorweb}
                  alt="Mobile-images"
                />
              </div>
            </div>
          )}

          <div className="app_responsive_design_phone app__flex">
            <img
              className="phone_frame"
              src={images.phoneframe}
              alt="phone-frame"
            />
            <Swiper
              slidesPerView={1}
              effect="fade"
              modules={[EffectFade]}
              autoplay={{ delay: 3000 }}
              className="swiper"
            >
              {projectImagesMobile.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="project_image app__flex">
                    <img
                      className="phone_image"
                      src={item}
                      alt="Mobile-images"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
