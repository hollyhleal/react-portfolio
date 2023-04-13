import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import "./App.css";

function App() {
  return (
    <>
      <Router>
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
      </Router>
    </>
  );
}

export default App;
