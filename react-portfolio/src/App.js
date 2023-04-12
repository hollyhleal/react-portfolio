import { HeaderContent } from "semantic-ui-react";
import siteHeader from "./components/Header";
// import navigation from ;
// import project from ;
// import footer from ;

function App() {
  return (
    <div className="App">
      <HeaderContent>{siteHeader}</HeaderContent>
      {/* <Navigation />
      <div>
        <Project />
      </div>
      <Footer /> */}
    </div>
  );
}

export default App;
