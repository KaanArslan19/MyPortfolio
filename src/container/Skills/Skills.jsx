import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  const sortedExperiences = [...experiences].sort((a, b) => b.year - a.year);
  return (
    <>
      <h2 className="skills_head tracking-tighter">Skills & Experiences</h2>

      <div className="app__skills-container">
        <div className="app__skills-col app__skills-col--skills">
          <h3 className="app__skills-subhead">Skills</h3>
          <motion.div
            className="app__skills-list"
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skills.map((skill) => (
              <motion.div
                variants={itemVariants}
                className="app__skills-item"
                key={skill._id}
              >
                <div className="app__skills-icon">
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p>{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="app__skills-col app__skills-col--exp">
          <h3 className="app__skills-subhead">Experience</h3>
          <div className="app__skills-exp">
            {sortedExperiences.map((experience) => (
              <motion.div
                className="app__skills-exp-item"
                key={experience._id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
              >
                <span className="app__skills-exp-dot" />
                <span className="app__skills-exp-year">{experience.year}</span>
                {experience.works.map((work, index) => (
                  <div className="app__skills-exp-work" key={index}>
                    <h4 className="bold-text">{work.name}</h4>
                    <p className="app__skills-exp-company">{work.company}</p>
                    {work.desc && <p className="p-text">{work.desc}</p>}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
