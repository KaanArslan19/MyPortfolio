import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import "./Header.scss";

const Header = () => {
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
              <p className="text-lg md:text-xl mb-4 text-brown-color">
                Hi, My name is
              </p>
              <h1 className="text-focus-in  head-text">Kaan Arslan.</h1>
              <h2 className="head-text-desc text-brown-color">
                I build projects using the latest web technologies.
              </h2>
              <div className="head-text-content max-w-[850px] text-gray-color">
                <p>
                  As an electrical and electronic engineer with a focus on
                  interface design and communication between hardware and motion
                  control software, I've honed my skills in making machines work
                  seamlessly.
                </p>
                <p>
                  Now, I've made the decision to switch my career towards
                  building web and mobile applications for clients. This
                  transition aligns with my proven expertise and allows me to
                  continue delivering outstanding experiences in a new realm.
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
