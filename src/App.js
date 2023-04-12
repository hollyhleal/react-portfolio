import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import siteHeader from "./components/Header";
import Navigation from "./components/Navigation";
// import project from ;
// import footer from ;

function App() {
  return (
    <>
      <Router>
        {siteHeader}
        <Navigation />
        <Routes>
          <Route path="/" element={<aboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
