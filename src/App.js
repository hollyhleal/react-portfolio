import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import About from "./components/pages/About/About.js";
import Portfolio from "./components/pages/Portfolio/Portfolio.js";
import Contact from "./components/pages/Contact/Contact.js";
import Resume from "./components/pages/Resume/Resume.js";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
        </style>
        <Header />
        <Routes>
          <Route exact path="/react-portfolio" element={<About />} />
          <Route
            exact
            path="/react-portfolio/portfolio"
            element={<Portfolio />}
          />
          <Route exact path="/react-portfolio/contact" element={<Contact />} />
          <Route exact path="/react-portfolio/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
