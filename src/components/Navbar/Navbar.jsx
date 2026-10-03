import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiMenu, FiX } from "react-icons/fi";

import "./Navbar.scss";

const SECTIONS = ["home", "showcase", "work", "skills", "contact"];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!toggle) return;
    const onKey = (e) => e.key === "Escape" && setToggle(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [toggle]);

  return (
    <nav className="app__navbar py-4 md:text-xl">
      <img className="app__navbar-logo" src="/logo.png" alt="logo" />

      <ul className="app__navbar-links ">
        {SECTIONS.map((item) => (
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
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={toggle}
          onClick={() => setToggle(true)}
        >
          <FiMenu />
        </button>
      </div>

      {createPortal(
        <div className={`app__sidemenu ${toggle ? "open" : ""}`}>
          <div className="app__sidemenu-backdrop" onClick={() => setToggle(false)} />
          <aside className="app__sidemenu-panel" aria-hidden={!toggle}>
            <header>
              <img src="/logo.png" alt="logo" />
              <button
                type="button"
                aria-label="Close menu"
                tabIndex={toggle ? 0 : -1}
                onClick={() => setToggle(false)}
              >
                <FiX />
              </button>
            </header>
            <ul>
              {SECTIONS.map((item) => (
                <li key={item} className={active === item ? "active" : ""}>
                  <a
                    href={`#${item}`}
                    tabIndex={toggle ? 0 : -1}
                    onClick={() => setToggle(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>,
        document.body
      )}
    </nav>
  );
};

export default Navbar;
