import React, { useState } from "react";
import { motion } from "framer-motion";

import "./nav-mobile.scss";

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

const NavMobile = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <>
      <nav className={`${toggleNav && "nav-visible"}`}>
        <div className="logo">
          <div className="box">
            <span>CN</span>
          </div>
        </div>
        <div
          id="mobileToggler"
          className={`${toggleNav && "active"}`}
          onClick={() => setToggleNav(!toggleNav)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      {toggleNav && (
        <motion.ul
          className="navbar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            className="container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.li className="navbar-item" variants={childVariants}>
              <a href="#" className="navbar-item_link">
                Home
              </a>
            </motion.li>
            <motion.li className="navbar-item" variants={childVariants}>
              <a href="#" className="navbar-item_link">
                Portfolio
              </a>
            </motion.li>
            <motion.li className="navbar-item" variants={childVariants}>
              <a href="#" className="navbar-item_link">
                About Me
              </a>
            </motion.li>
            <motion.li className="navbar-item" variants={childVariants}>
              <a href="#" className="navbar-item_link">
                Contact
              </a>
            </motion.li>
          </motion.div>
        </motion.ul>
      )}
    </>
  );
};

export default NavMobile;
