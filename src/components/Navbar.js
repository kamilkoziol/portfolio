import React, { useEffect, useRef, useState } from "react";
import { addAndRemoveClasses } from "../utils";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(true);

  const h1 = useRef();
  const h2 = useRef();
  const h3 = useRef();

  const handleHamburgerOpenClose = () => {
    console.log("asdf");
    setHamburgerOpen((prev) => !prev);
    moveSidenav();
  };

  const moveSidenav = () => {
    if (hamburgerOpen) {
      addAndRemoveClasses(
        ["rotate-45", "translate-y-4"],
        null,
        h1.current
      );
      addAndRemoveClasses(["opacity-0"], null, h2.current);
      addAndRemoveClasses(
        ["-rotate-45", "-translate-y-3"],
        null,
        h3.current
      );
    } else {
      addAndRemoveClasses(
        null,
        ["rotate-45", "translate-y-4"],
        h1.current
      );
      addAndRemoveClasses(null, ["opacity-0"], h2.current);
      addAndRemoveClasses(
        null,
        ["-rotate-45", "-translate-y-3"],
        h3.current
      );
    }
  };

  return (
    <header className="px-16 bg-red-200 fixed top-0 left-0 w-full h-28">
      <nav className="flex justify-between items-center w-full h-full max-w-screen-lg mx-auto">
        <div className="">logo</div>
        <div
          id="hamburger"
          className="w-8 h-8 flex flex-col justify-between cursor-pointer lg:hidden"
          onClick={handleHamburgerOpenClose}
        >
          <div className="hamburger-layer transform" ref={h1}></div>
          <div className="hamburger-layer transform" ref={h2}></div>
          <div className="hamburger-layer transform" ref={h3}></div>
        </div>
        <ul className="lg:flex items-center justify-between hidden">
          <li className="before:content-['01.'] nav-item">About</li>
          <li className="before:content-['02.'] nav-item">Projects</li>
          <li className="before:content-['03.'] nav-item">Skills</li>
          <li className="before:content-['04.'] nav-item">Education</li>
          <li className="before:content-['05.'] nav-item">Contact</li>
          <li className="ml-6">Resume</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
