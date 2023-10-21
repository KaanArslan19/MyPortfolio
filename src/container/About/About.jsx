import React, { useState } from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

import { images } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { useMediaQuery } from "react-responsive";

const About = () => {
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  const [swiper, setSwiper] = useState(null);
  const [swiperMobile, setSwiperMobile] = useState(null);

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const isMidDevice = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  const marginAdjust = !isMobile ? "app_responsive_projects-marginAdjust" : "";
  const projectSizeAdjust = !isMidDevice
    ? "app_responsive_projects-sizeAdjust"
    : "";
  const projectImagesMobile = [
    images.realtormobile,
    images.twittermobile,
    images.ecommercemobile,
  ];
  const projectImagesWeb = [
    images.realtorweb,
    images.twitterweb,
    images.ecommerceweb,
  ];

  const activeButton = () => {
    const buttonElement = document.getElementById(`${swiper?.activeIndex}`);
    const btnElList = document.querySelectorAll(".button-projects");
    btnElList.forEach(() => {
      document
        .querySelector(".active-button")
        ?.classList.remove("active-button");
    });

    buttonElement?.classList.add("active-button");
  };

  return (
    <>
      <div className="app__portfolio d-flex flex-column flex ">
        <div className="d-flex flex-column flex align-items-center mb-2">
          <h2 className="about-head ">
            User Experience is <span className="design-text">the Key</span>{" "}
            <br /> to have good Business
          </h2>
        </div>

        <div
          className={`app_responsive_projects ${projectSizeAdjust} row justify-content-center`}
        >
          {!isMobile && (
            <div className="app_responsive_design_mac d-flex col-10 justify-content-center p-0">
              <img className="frame" src={images.macframe} alt="mac-frame" />
              <Swiper
                slidesPerView={1}
                effect="fade"
                modules={[EffectFade, Pagination]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  waitForTransition: true,
                }}
                className="swiper d-flex"
                onSwiper={(swiper) => {
                  setSwiper(swiper);
                }}
                onActiveIndexChange={() => activeButton()}
              >
                {projectImagesWeb.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="project_image d-flex justify-content-center align-items-end">
                      <img className="" src={item} alt="Mobile-images" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
          <div
            className={`app_responsive_design_phone ${marginAdjust} d-flex align-items-end p-0 ${
              isMobile ? "col-10 " : "col-2"
            }`}
          >
            <img
              className="phone_frame"
              src={images.phoneframe}
              alt="phone-frame"
            />
            <Swiper
              slidesPerView={1}
              effect="fade"
              modules={[EffectFade, Pagination]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="swiper d-flex"
              onSwiper={(swiper) => {
                setSwiperMobile(swiper);
              }}
              onActiveIndexChange={() => activeButton()}
            >
              {projectImagesMobile.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="project_image d-flex justify-content-center align-items-end">
                    <img className="" src={item} alt="Mobile-images" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {!isMidDevice ? (
          <div className="button-wrapper ">
            <button
              id="0"
              className="button-projects"
              onClick={() => {
                swiper.slideTo(0);
                swiperMobile.slideTo(0);
                activeButton();
              }}
            >
              Realtor Clone
            </button>

            <button
              id="1"
              className={`button-projects`}
              onClick={() => {
                swiper.slideTo(1);
                swiperMobile.slideTo(1);
                activeButton();
              }}
            >
              Twitter Clone
            </button>
            <button
              id="2"
              className="button-projects"
              onClick={() => {
                swiper.slideTo(2);
                swiperMobile.slideTo(2);
                activeButton();
              }}
            >
              E-Commerce Site
            </button>
          </div>
        ) : (
          <a
            href="https://github.com/KaanArslan19"
            className="all-projects-wrap"
            target="_blank"
          >
            <button
              id="allprojects-button"
              className="button-projects all-projects "
            >
              See all of my projects
            </button>
          </a>
        )}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
