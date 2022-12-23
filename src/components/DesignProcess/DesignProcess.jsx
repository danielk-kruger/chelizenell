import React from "react";
import { design_process } from "../../utils/process";
import { motion } from "framer-motion";
import "./design_process.scss";

const DesignProcess = () => {
  const wrapperVariant = {
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

  const leftVariant = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1.0,
        ease: "easeInOut",
      },
    },
  };

  const rightVariant = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1.0,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="process">
      <div className="container">
        <div className="process-intro">
          <h1>Design Process</h1>
          <p>
            these four steps are crucial for ensuring that the design process is
            focused, creative, and effective, and that the final design meets
            the needs of the client
          </p>
        </div>
        <motion.div className="process-wrapper">
          {design_process.map(
            ({ title, description, animDirection }, index) => {
              return (
                <motion.div
                  key={index}
                  className="step"
                  variants={wrapperVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: "some",
                    margin: "30px",
                  }}
                >
                  <motion.div
                    className="number"
                    variants={
                      animDirection === "left" ? leftVariant : rightVariant
                    }
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <h1>{index + 1}</h1>
                  </motion.div>
                  <motion.div
                    className="step-content"
                    variants={
                      animDirection === "left" ? leftVariant : rightVariant
                    }
                    viewport={{ once: true }}
                  >
                    <h2>{title}</h2>
                    <p>{description}</p>
                  </motion.div>
                </motion.div>
              );
            }
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default DesignProcess;
