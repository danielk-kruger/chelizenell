import React, { useState, useRef } from "react";
import { useIntersection } from "../../hooks/IntersectionObserver";
import { skills_list } from "../../utils/skillsList";
import { Progress } from "./Progress";

import "./skills.scss";

const Skills = () => {
  const [isInView, setIsInView] = useState(false);
  let skillRef = useRef();

  useIntersection(skillRef, () => {
    setIsInView(true);
  });

  return (
    <section id="skills">
      <div className="container">
        <div className="skills-intro">
          <h1>Skills</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            unde animi veritatis architecto minima?
          </p>
        </div>
        <div className="skills-wrapper">
          {skills_list.map(({ title, rate, animDelay }, index) => (
            <div className="skills-progress" key={index} ref={skillRef}>
              <h2
                className={isInView ? "slideIn" : ""}
                style={{ transitionDelay: `${animDelay}ms` }}
              >
                {title}
              </h2>
              <Progress rate={rate} isInView={isInView} animDelay={animDelay} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
