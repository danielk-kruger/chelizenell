import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import "./home.scss";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const Home = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 600px)` });
  // const paintElement = useRef();

  return (
    <section id="home">
      <div className="container">
        <div className="hero">
          <motion.div
            className="hero-intro"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1>Hi there!</motion.h1>
            <motion.h3>
              I'm <span>Chelize</span>
            </motion.h3>
            <motion.p variants={childVariants}>
              A graphic designer with a passion for creating visually stunning
              and effective designs for a range of clients.
            </motion.p>
          </motion.div>

          <motion.div
            className="cta"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.button className="btn-outline" variants={childVariants}>
              See My Portfolio
            </motion.button>
            <motion.button className="btn-solid" variants={childVariants}>
              Let's get in touch!
            </motion.button>
          </motion.div>
        </div>
        {/* TODO add an animated <Scroll down> indicator */}
        {/* <Portfolio /> */}
      </div>
    </section>
  );
};

export default Home;
