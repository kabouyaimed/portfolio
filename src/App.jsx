import { BrowserRouter } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Hero from "./components/Hero.jsx";
import Feedbacks from "./components/Feedbacks.jsx";
import Loader from "./components/Loader.jsx";
import Navbar from "./components/Navbar.jsx";
import Tech from "./components/Tech.jsx";
import Works from "./components/Works.jsx";
import StarsCanvas from "./components/canvas/Stars.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
