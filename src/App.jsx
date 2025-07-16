import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import Contact from "./pages/contact";
import Workflow from "./pages/workflow";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/workflow" element={<Workflow />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
