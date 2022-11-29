import React from "react";
import Typed from "react-typed";
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
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 600px)` });

  return (
    <section id="home">
      <div className="container">
        <motion.div
          className="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            className="hero-intro"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={childVariants}>Hi there,</motion.h1>
            <motion.h3 variants={childVariants}>
              I'm <span>Chelize</span>
            </motion.h3>
          </motion.div>
          <motion.div
            className="hero-details"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={childVariants}>
              <Typed
                strings={[
                  `I Specialize in ${isMobile ? "<br />" : ""} Graphic Design`,
                  `I Specialize in ${
                    isMobile ? "<br />" : ""
                  } Digital Marketing`,
                  `I Specialize in ${isMobile ? "<br />" : ""} Branding`,
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop
              >
                <span></span>
              </Typed>
              <motion.p variants={childVariants}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                assumenda dolor eius.
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div
            className="cta"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.button className="btn-outline" variants={childVariants}>
              See my work
            </motion.button>
            <motion.button className="btn-solid" variants={childVariants}>
              Download CV
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
