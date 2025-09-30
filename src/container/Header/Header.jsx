import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import "./Header.scss";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="app__flex">
            <div>
              <p className="text-lg md:text-xl mb-4 text-brown-color">
                Hi, My name is
              </p>
              <h1 className="text-focus-in head-text">Kaan Arslan.</h1>
              <h2 className="head-text-desc text-brown-color tracking-tighter">
                I build projects using the latest web technologies.
              </h2>

              {isMobile ? (
                <div className="head-text-content max-w-[850px] text-gray-color">
                  <p>
                    I'm a self-motivated and creative full-stack developer with
                    a strong focus on crafting intuitive and user-friendly web
                    applications.
                  </p>
                </div>
              ) : (
                <div className="head-text-content max-w-[850px] text-gray-color">
                  <p>
                    I'm a self-motivated and creative full-stack developer with
                    a strong focus on crafting intuitive and user-friendly web
                    applications. Currently contributing to digital service
                    delivery for the Queensland Government, I apply a
                    detail-oriented and problem-solving approach to maintain and
                    enhance public-facing platforms.
                  </p>
                  <p>
                    My background in automation engineering also gives me a
                    solid foundation in human-machine interface design and
                    systems thinking, which I leverage to create seamless
                    digital experiences.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
