import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import siteHeader from "./components/Header";
// import navigation from ;
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
