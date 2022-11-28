import React from "react";
import { useMediaQuery } from "react-responsive";
import "./App.scss";

import { Home, Nav } from "./components/";
import NavMobile from "./components/Nav/NavMobile";

const App = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  return (
    <>
      {isMobile ? <NavMobile /> : <Nav />}
      <main>
        <Home />
      </main>
    </>
  );
};

export default App;
