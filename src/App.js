import { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { addAndRemoveClasses } from "./utils";

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
    <div className="bg-primaryBackground text-textColor">
      <Navbar
        hamburgerOpen={hamburgerOpen}
        setHamburgerOpen={setHamburgerOpen}
      />
      <div
        ref={content}
        className="transition duration-500"
        onClick={handleContentClick}
      >
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
        <div className="text-9xl">content</div>
      </div>
    </div>
  );
}

export default App;
