import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import { BsGithub, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/effect-fade";

import { client, urlFor } from "../client";
import { images } from "../constants";
import "./ProjectDetails.scss";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
};

const img = (source, width) =>
  urlFor(source).width(width).auto("format").url();

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(undefined); // undefined = loading, null = not found
  const [others, setOthers] = useState([]);
  const [swiper, setSwiper] = useState(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setProject(undefined);
    setActive(0);
    window.scrollTo(0, 0);
    client
      .fetch('*[_type == "works" && _id == $id][0]', { id: projectId })
      .then((data) => setProject(data || null))
      .catch(() => setProject(null));
    client
      .fetch(
        '*[_type == "works" && defined(description)] | order(_createdAt asc){_id, title, thumbnail}'
      )
      .then(setOthers);
  }, [projectId]);

  useEffect(() => {
    if (project) document.title = `${project.title} — Kaan Arslan`;
    return () => {
      document.title = "Kaan Arslan";
    };
  }, [project]);

  const index = others.findIndex((p) => p._id === projectId);
  const prev = index > 0 ? others[index - 1] : null;
  const next = index >= 0 && index < others.length - 1 ? others[index + 1] : null;

  const goTo = (i) => {
    swiper?.slideToLoop(i);
    setActive(i);
  };

  return (
    <div className="pd">
      <header className="pd__topbar">
        <Link to="/" className="pd__logo">
          <img src="/logo.png" alt="Kaan Arslan" />
        </Link>
        <a href="/#work" className="pd__back">
          <BsArrowLeft /> Back to projects
        </a>
      </header>

      {project === undefined && (
        <div className="pd__container pd__skeleton" aria-busy="true">
          <div className="pd__skeleton-line pd__skeleton-line--sm" />
          <div className="pd__skeleton-line pd__skeleton-line--lg" />
          <div className="pd__skeleton-line" />
          <div className="pd__skeleton-device" />
        </div>
      )}

      {project === null && (
        <div className="pd__container pd__notfound">
          <h1>Project not found</h1>
          <p>It may have been moved or removed.</p>
          <a href="/#work" className="pd__btn">
            See all projects
          </a>
        </div>
      )}

      {project && (
        <>
          <section className="pd__container pd__hero">
            <motion.div {...fadeUp}>
              <div className="pd__tags">
                {project.tags
                  ?.filter((t) => t !== "All")
                  .map((tag) => (
                    <span key={tag} className="pd__tag">
                      {tag}
                    </span>
                  ))}
              </div>
              <h1 className="pd__title">{project.title}</h1>
              {project.shortDescription && (
                <p className="pd__tagline">{project.shortDescription}</p>
              )}
              {project.codeLink && (
                <div className="pd__actions">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="pd__btn"
                  >
                    <BsGithub /> Source code
                  </a>
                </div>
              )}
            </motion.div>
          </section>

          {project.images?.length > 0 && (
            <motion.section className="pd__container pd__showcase" {...fadeUp}>
              <div className="pd__device">
                <img
                  className="pd__device-frame"
                  src={images.macframe}
                  alt=""
                  aria-hidden="true"
                />
                <div className="pd__device-screen">
                  <Swiper
                    modules={[EffectFade, Autoplay]}
                    effect="fade"
                    loop
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    onSwiper={setSwiper}
                    onRealIndexChange={(s) => setActive(s.realIndex)}
                  >
                    {project.images.map((item, i) => (
                      <SwiperSlide key={item._key || i}>
                        <img
                          src={img(item, 1400)}
                          alt={item.alt || `${project.title} screenshot ${i + 1}`}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              {project.images.length > 1 && (
                <div className="pd__thumbs">
                  {project.images.map((item, i) => (
                    <button
                      key={item._key || i}
                      type="button"
                      className={`pd__thumb ${active === i ? "is-active" : ""}`}
                      onClick={() => goTo(i)}
                      aria-label={`Show screenshot ${i + 1}`}
                    >
                      <img src={img(item, 240)} alt="" loading="lazy" />
                    </button>
                  ))}
                </div>
              )}
            </motion.section>
          )}

          <motion.section className="pd__container pd__overview" {...fadeUp}>
            <h2 className="pd__section-title">Overview</h2>
            <p>{project.description || project.shortDescription}</p>
          </motion.section>

          {project.bulletPoints?.length > 0 && (
            <motion.section className="pd__container" {...fadeUp}>
              <h2 className="pd__section-title">Key features</h2>
              <div className="pd__features">
                {project.bulletPoints.map((item, i) => (
                  <div className="pd__feature" key={i}>
                    <span className="pd__feature-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {(prev || next) && (
            <nav className="pd__container pd__pager" aria-label="More projects">
              {prev ? (
                <Link to={`/project-details/${prev._id}`} className="pd__pager-card">
                  <img src={img(prev.thumbnail, 400)} alt="" loading="lazy" />
                  <div>
                    <span>
                      <BsArrowLeft /> Previous
                    </span>
                    <strong>{prev.title}</strong>
                  </div>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link
                  to={`/project-details/${next._id}`}
                  className="pd__pager-card pd__pager-card--next"
                >
                  <div>
                    <span>
                      Next <BsArrowRight />
                    </span>
                    <strong>{next.title}</strong>
                  </div>
                  <img src={img(next.thumbnail, 400)} alt="" loading="lazy" />
                </Link>
              )}
            </nav>
          )}
        </>
      )}
    </div>
  );
};

export default ProjectDetails;
