import React, { useState } from "react";
import { HiXCircle } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar py-4 md:text-xl">
      {/*       <a href={images.cv} download>
        <span className="app__navbar_CV flex items-center">Resume</span>
      </a> */}

      <ul className="app__navbar-links ">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li
            className="app__flex text-sm xl:text-[16px] "
            key={`link-${item}`}
          >
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <FiMenu onClick={() => setToggle(true)} />

        {toggle && (
          <div>
            <HiXCircle onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
