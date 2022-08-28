import React, { useEffect, useRef } from "react";
import { addAndRemoveClasses, handleScroll } from "../utils";

const SideNav = ({ hamburgerOpen, setHamburgerOpen }) => {
  const sideNav = useRef();
  useEffect(() => {
    if (!hamburgerOpen) {
      addAndRemoveClasses(null, "translate-x-full", sideNav.current);
    } else {
      addAndRemoveClasses("translate-x-full", null, sideNav.current);
    }
  }, [hamburgerOpen]);

  useEffect(() => {
    function handleResize() {
      const width = document.body.clientWidth;
      if (width > 900) {
        setHamburgerOpen(true);
      }
    }
    window.addEventListener("resize", handleResize);
    return function cleanup() {
      window.removeEventListener("resize", handleResize);
    };
  }, [setHamburgerOpen]);

  return (
    <div
      ref={sideNav}
      className="fixed top-0 right-0 lg:hidden z-10 h-screen bg-secondaryBackground transition duration-500 translate-x-full"
    >
      <div className="w-screen max-w-xs font-bold overflow-y-auto flex gap-4 flex-col justify-between items-center pt-32">
        <div
          onClick={() => {
            setHamburgerOpen(true);
            handleScroll("about");
          }}
          className="before:content-['01.'] sidenav-item"
        >
          About
        </div>
        <div
          onClick={() => {
            setHamburgerOpen(true);
            handleScroll("projects");
          }}
          className="before:content-['02.'] sidenav-item"
        >
          Projects
        </div>
        <div
          onClick={() => {
            setHamburgerOpen(true);
            handleScroll("skills");
          }}
          className="before:content-['03.'] sidenav-item"
        >
          Skills
        </div>
        <div className="before:content-['04.'] sidenav-item">
          Work and education
        </div>
        <div className="before:content-['05.'] sidenav-item">Contact</div>
        <div className="sidenav-item">Resume</div>
      </div>
    </div>
  );
};

export default SideNav;
