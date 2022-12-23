import React from "react";
import { useMediaQuery } from "react-responsive";

import "../node_modules/locomotive-scroll/src/locomotive-scroll.scss";
import "./App.scss";

import { Home, Nav } from "./components/";
import DesignProcess from "./components/DesignProcess/DesignProcess";
import NavMobile from "./components/Nav/NavMobile";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/Skills/Skills";

const App = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 850px)` });
  // useLocomotiveScroll();

  return (
    <>
      {isMobile ? <NavMobile /> : <Nav />}
      <main>
        <Home />
        <Portfolio />
        <DesignProcess />
        <Skills />
      </main>
    </>
  );
};

export default App;
