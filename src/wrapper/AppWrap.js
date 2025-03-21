import React from "react";
import { NavigationDots, SocialMedia } from "../components";
import { useEffect } from "react";
const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    useEffect(() => {
      const setVH = () => {
        document.documentElement.style.setProperty(
          "--vh",
          `${window.innerHeight * 0.01}px`
        );
      };
      setVH();
      window.addEventListener("resize", setVH);
      return () => window.removeEventListener("resize", setVH);
    }, []);
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
