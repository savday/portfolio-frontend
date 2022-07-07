import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Hero.scss";

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

const Hero = () => {
  return (
    <div className="app__hero app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__hero-info"
      >
        <div className="app__hero-badge">
          <div className="badge-cmp app__flex">
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hi, my name is</p>
              <h1 className="hero-head-text">Savannah Day</h1>
              <hr></hr>
              <p className="hero-subhead-text">
                Building the web for the future
              </p>
              <p className="hero-paragraph p-text">
              I’m a software engineer focused on building (and occasionally
              designing) unique user-centered web applications. Currently, I’m focused
              on building exceptional, digital experiences at Studio Aprés.
            </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__hero-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
    </div>
  );
};

export default AppWrap(Hero, "home");
