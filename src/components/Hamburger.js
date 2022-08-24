import React, { useEffect, useRef } from "react";
import { addAndRemoveClasses } from "../utils";

const Hamburger = ({ hamburgerOpen, setHamburgerOpen }) => {
  const h1 = useRef();
  const h2 = useRef();
  const h3 = useRef();

  const handleHamburgerOpenClose = () => {
    setHamburgerOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!hamburgerOpen) {
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
  }, [hamburgerOpen]);

  return (
    <div
      id="hamburger"
      className="w-8 h-8 flex flex-col justify-between cursor-pointer bg:hidden"
      onClick={handleHamburgerOpenClose}
    >
      <div className="hamburger-layer transform" ref={h1}></div>
      <div className="hamburger-layer transform" ref={h2}></div>
      <div className="hamburger-layer transform" ref={h3}></div>
    </div>
  );
};

export default Hamburger;
