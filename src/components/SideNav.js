import React, { useEffect, useRef } from "react";
import { addAndRemoveClasses } from "../utils";

const SideNav = ({ hamburgerOpen }) => {
  const sideNav = useRef();
  useEffect(() => {
    if (!hamburgerOpen) {
      addAndRemoveClasses(null, "translate-x-full", sideNav.current);
    } else {
      addAndRemoveClasses("translate-x-full", null, sideNav.current);
    }
  }, [hamburgerOpen]);
  return (
    <div
      ref={sideNav}
      className="fixed top-0 right-0 lg:hidden z-10 h-screen bg-green-200 transition duration-500 translate-x-full"
    >
      <div className="w-screen max-w-xs font-bold overflow-y-auto flex gap-4 flex-col justify-between items-center text-black pt-32">
        <a href="#" className="before:content-['01.'] sidenav-item">
          About
        </a>
        <a href="#" className="before:content-['02.'] sidenav-item">
          Projects
        </a>
        <a href="#" className="before:content-['03.'] sidenav-item">
          Skills
        </a>
        <a href="#" className="before:content-['04.'] sidenav-item">
          Education
        </a>
        <a href="#" className="before:content-['05.'] sidenav-item">
          Contact
        </a>
        <a href="#" className="sidenav-item">
          Resume
        </a>
      </div>
    </div>
  );
};

export default SideNav;
