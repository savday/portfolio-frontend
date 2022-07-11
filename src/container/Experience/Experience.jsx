import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { images } from '../../constants';
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Experience.scss";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      data = data.sort((a, b) => a.order - b.order);
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });

  }, []);

  return (
    <>
      <h2 className="head-text">Experience</h2>

      <div className="app__experience-container">


        <motion.div className="app__experience-exp">
          {experiences?.map((experience) => (
            <motion.div className="app__experience-exp-item" key={experience.year}>
              <div className="app__experience-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__experience-exp-works">
                {experience?.works?.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__experience-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                      <p className="p-text desc">{work.desc}</p>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__experience-list">
        <h2 className="head-text">Technologies I've been working with lately</h2>
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__experience-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="experience-resume-button-wrap">
          <a href="https://cdn.sanity.io/files/trmgews6/production/98a2d8300acbdd8ec98918f248cbe4d06973460f.pdf" target="_blank" rel="noreferrer" className="experience-resume-card p-text">Download Resume</a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experience, "app__experience", "experience"),
  "experience",
  "app__blackbg"
);
