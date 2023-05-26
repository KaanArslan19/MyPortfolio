import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";
import { useMediaQuery } from "react-responsive";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="app__flex">
            <div style={{ marginLeft: 20 }}>
              <p className="p-text-head">Hi, My name is </p>
              <h1 className="text-focus-in head-text">Kaan Arslan.</h1>
              <h2 className="head-text-desc">
                I build projects using the latest web technologies.
              </h2>
              <div className="head-text-content">
                <p>
                  An electric and electronic engineer specialized in interface
                  design and communication between various hardware and motion
                  control software to make the machines work.
                </p>
                <p>
                  Decided to switch career to build web and mobile applications
                  for clients which is similar to the area that I had proven
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
