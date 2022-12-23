import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import "./nav-mobile.scss";

import CNLogo from "../../assets/Chelize Nell Logo - Mobile.svg";

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
  const isMobile = useMediaQuery({ query: `(max-width: 850px)` });

  const handleLink = () => {
    setTimeout(() => {
      setToggleNav(!toggleNav);
    }, 600);
  };

  return (
    <>
      <nav className={`nav-mobile ${toggleNav ? "nav-visible" : ""}`}>
        <div className="logo">
          <img src={CNLogo} alt="" />
        </div>
        <div
          id="mobileToggler"
          className={`${toggleNav ? "active" : ""}`}
          onClick={() => {
            setToggleNav(!toggleNav);
            document.body.style.overflowY = !toggleNav ? "hidden" : "auto";
          }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      {toggleNav && (
        <motion.ul
          className="navbar"
          variants={containerVariants}
          initial="initial"
          animate={toggleNav ? "animate" : "initial"}
        >
          <motion.div
            className="container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.li className="navbar-item" variants={childVariants}>
              <a
                href="#"
                className="navbar-item_link"
                onClick={isMobile && handleLink}
              >
                Home
              </a>
            </motion.li>
            <motion.li className="navbar-item" variants={childVariants}>
              <a
                href="#"
                className="navbar-item_link"
                onClick={isMobile && handleLink}
              >
                Portfolio
              </a>
            </motion.li>
            <motion.li className="navbar-item" variants={childVariants}>
              <a
                href="#"
                className="navbar-item_link"
                onClick={isMobile && handleLink}
              >
                About Me
              </a>
            </motion.li>
            <motion.li
              className="navbar-item"
              variants={childVariants}
              onClick={isMobile && handleLink}
            >
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
