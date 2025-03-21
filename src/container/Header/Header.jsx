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
            <div>
              <p className="text-lg md:text-xl mb-4 text-brown-color">
                Hi, My name is
              </p>
              <h1 className="text-focus-in  head-text">Kaan Arslan.</h1>
              <h2 className="head-text-desc text-brown-color tracking-tighter">
                I build projects using the latest web technologies.
              </h2>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
