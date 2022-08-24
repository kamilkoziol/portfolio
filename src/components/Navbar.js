import React, { useEffect, useRef, useState } from "react";
import { addAndRemoveClasses } from "../utils";
import Hamburger from "./Hamburger";
import SideNav from "./SideNav";

const Navbar = (props) => {
  const [lastPos, setLastPos] = useState(window.scrollY);

  const navBar = useRef();

  useEffect(() => {
    function handleHideNavbar(e) {
      const currentPos = window.scrollY;
      if (lastPos < currentPos) {
        addAndRemoveClasses("-translate-y-full", null, navBar.current);
      } else if (lastPos > currentPos) {
        addAndRemoveClasses(null, "-translate-y-full", navBar.current);
      }
      if (currentPos === 0) {
        console.log("inside");
        addAndRemoveClasses(
          "h-28",
          ["h-20", "shadow-lg", "opacity-80"],
          navBar.current
        );
      } else {
        addAndRemoveClasses(
          ["h-20", "shadow-lg", "opacity-80"],
          "h-28",
          navBar.current
        );
      }
      setLastPos(currentPos);
    }

    window.addEventListener("scroll", handleHideNavbar);
    return () => window.removeEventListener("scroll", handleHideNavbar);
  });

  return (
    <div>
      <header
        ref={navBar}
        className="px-16 bg-primaryBackground fixed top-0 left-0 w-full h-28 z-20 transform transition duration-500"
      >
        <nav className="flex justify-between items-center w-full h-full max-w-screen-lg mx-auto">
          <div className="">logo</div>
          <Hamburger
            hamburgerOpen={props.hamburgerOpen}
            setHamburgerOpen={props.setHamburgerOpen}
          />
          <ul className="bg:flex items-center justify-between hidden">
            <li className="before:content-['01.'] nav-item">About</li>
            <li className="before:content-['02.'] nav-item">Projects</li>
            <li className="before:content-['03.'] nav-item">Skills</li>
            <li className="before:content-['04.'] nav-item">Education</li>
            <li className="before:content-['05.'] nav-item">Contact</li>
            <li className="ml-6">Resume</li>
          </ul>
        </nav>
      </header>
      <SideNav
        hamburgerOpen={props.hamburgerOpen}
        setHamburgerOpen={props.setHamburgerOpen}
      />
    </div>
  );
};

export default Navbar;
