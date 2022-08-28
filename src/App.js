import { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { addAndRemoveClasses } from "./utils";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills.js";
import Socials from "./components/Socials";
import Work from "./components/Work";

function App() {
  const [hamburgerOpen, setHamburgerOpen] = useState(true);

  const content = useRef();

  useEffect(() => {
    if (!hamburgerOpen) {
      addAndRemoveClasses("blur-md", null, content.current);
    } else {
      addAndRemoveClasses(null, "blur-md", content.current);
    }
  }, [hamburgerOpen]);

  function handleContentClick() {
    if (!hamburgerOpen) {
      setHamburgerOpen(true);
    }
  }

  return (
    <div className="bg-primaryBackground text-primaryTextColor font-poppins">
      <Navbar
        hamburgerOpen={hamburgerOpen}
        setHamburgerOpen={setHamburgerOpen}
      />
      <div
        ref={content}
        className="transition duration-500 px-8 md:px-20 lg:px-48 mx-auto w-full min-h-screen m-w"
        onClick={handleContentClick}
      >
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Work />
        </main>
      </div>
      <Socials />
    </div>
  );
}

export default App;
