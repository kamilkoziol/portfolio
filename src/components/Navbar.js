import React from "react";
import { addAndRemoveClasses } from "../utils";
import Hamburger from "./Hamburger";
import SideNav from "./SideNav";

const Navbar = (props) => {
  return (
    <div>
      <header className="px-16 bg-red-200 fixed top-0 left-0 w-full h-28 z-20">
        <nav className="flex justify-between items-center w-full h-full max-w-screen-lg mx-auto">
          <div className="">logo</div>
          <Hamburger
            hamburgerOpen={props.hamburgerOpen}
            setHamburgerOpen={props.setHamburgerOpen}
          />
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
      <SideNav hamburgerOpen={props.hamburgerOpen} />
    </div>
  );
};

export default Navbar;
