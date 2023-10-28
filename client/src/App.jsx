import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Faq from "./components/Faq";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        {/* Wrapping content in a Router. Below is the syntax for routing */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
