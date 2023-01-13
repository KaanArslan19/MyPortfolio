import React from "react";
import { motion } from "framer-motion";


import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

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



const Header = () => (
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
            <h2 className="head-text-desc">I build projects using the latest web technologies.</h2>
            <p className="p-text-head-desc">
              I'm an electric and electronic engineer specialized in interface
              design. I like to craft solid and scalable frontend projects with
              great user experiences.
            </p>
          </div>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      
    
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={{ scale: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-circles"
    >
      {[images.nextjs, images.react, images.css, images.javascript, images.tailwind, images.sanity].map((circle, index) => (
        <div className="app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
