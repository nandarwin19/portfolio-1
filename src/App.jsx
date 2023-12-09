import { BrowserRouter } from "react-router-dom";

import {
  Contact,
  Hero,
  Navbar,
  Skills,
  StarsCanvas,
  About,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center bg-opacity-70">
          {/* <div className="bg-[#000000]"> */}
          <Navbar />
          <Hero />
        </div>
        <div className="relative z-0">
          <Skills />
        </div>

        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <About />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
