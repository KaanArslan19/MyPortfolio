import React, { useEffect, useRef, useState } from "react";

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
import "swiper/css/effect-fade";

import { useMediaQuery } from "react-responsive";

const About = () => {
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  const [swiper, setSwiper] = useState(null);
  const [swiperMobile, setSwiperMobile] = useState(null);

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const isMidDevice = useMediaQuery({
    query: "(max-width: 1400px)",
  });
  const marginAdjust = !isMobile ? "app_responsive_projects-marginAdjust" : "";
  const projectSizeAdjust = !isMidDevice
    ? "app_responsive_projects-sizeAdjust"
    : "";
  const projects = [
    { name: "Hexbox", web: images.hexbox_web, mobile: images.hexbox_mobile },
    {
      name: "E-commerce",
      web: images.next_ecomm_mac,
      mobile: images.next_ecomm_mobile,
    },
    { name: "Delcapo", web: images.delcapo_web, mobile: images.delcapo_mobile },
    { name: "Landing Page", web: images.akk_web, mobile: images.akk_mobile },
    { name: "ARS Concept", web: images.ars_web, mobile: images.ars_mobile },
  ];
  const [active, setActive] = useState(0);
  const tabsRef = useRef(null);

  useEffect(() => {
    const bar = tabsRef.current;
    const tab = bar?.children[active];
    if (!tab) return;
    bar.scrollTo({
      left: tab.offsetLeft - (bar.clientWidth - tab.clientWidth) / 2,
      behavior: "smooth",
    });
  }, [active]);

  const selectProject = (index) => {
    swiper?.slideToLoop(index);
    swiperMobile?.slideToLoop(index);
    setActive(index);
  };

  return (
    <>
      <div className="app__portfolio d-flex flex-column flex  ">
        <div className="d-flex flex-column flex align-items-center ">
          <p className="about-eyebrow">Featured Projects</p>
          <h2 className="about-head text-center tracking-tighter mb-4  ">
            Seamless Journeys <br />
            <span className="design-text">Unlocking Success</span>{" "}
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
                loop
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
                onRealIndexChange={(s) => setActive(s.realIndex)}
              >
                {projects.map((project) => (
                  <SwiperSlide key={project.name}>
                    <div className="project_image d-flex justify-content-center align-items-end">
                      <img className="" src={project.web} alt={project.name} />
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
              loop
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
              onRealIndexChange={(s) => setActive(s.realIndex)}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.name}>
                  <div className="project_image d-flex justify-content-center align-items-end">
                    <img className="" src={project.mobile} alt={project.name} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="project-tabs" ref={tabsRef} role="tablist">
          {projects.map((project, index) => (
            <button
              key={project.name}
              type="button"
              role="tab"
              aria-selected={active === index}
              className={`project-tab ${active === index ? "is-active" : ""}`}
              onClick={() => selectProject(index)}
            >
              {project.name}
              {active === index && (
                <span className="project-tab-progress" key={active} />
              )}
            </button>
          ))}
        </div>
        <a
          href="https://github.com/KaanArslan19"
          className="all-projects-link"
          target="_blank"
          rel="noreferrer"
        >
          See all of my projects →
        </a>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "showcase",
  "app__whitebg"
);
