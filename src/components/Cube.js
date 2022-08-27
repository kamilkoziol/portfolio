import React from "react";

const Cube = () => {
  const react = require("../images/logos/react.png");
  const tailwind = require("../images/logos/tailwind.png");
  const javascript = require("../images/logos/javascript.png");
  const python = require("../images/logos/python.png");
  const tf = require("../images/logos/tensorflow.png");
  const github = require("../images/logos/github.png");
  return (
    <div className="w-32 h-32 flex justify-center items-center cube-container">
      <div className="relative text-4xl cube w-20 h-20 flex justify-center items-center">
        <div className="cube-side cube-front">
          <img alt="react-logo" src={react} />
        </div>
        <div className="cube-side cube-back">
          <img alt="javascript-logo" src={javascript} />
        </div>
        <div className="cube-side cube-left">
          <img alt="github-logo" src={github} />
        </div>
        <div className="cube-side cube-right">
          <img alt="tailwind-logo" src={tailwind} />
        </div>
        <div className="cube-side cube-top">
          <img alt="tf-logo" src={tf} />
        </div>
        <div className="cube-side cube-bottom">
          <img alt="python-logo" src={python} />
        </div>
      </div>
    </div>
  );
};

export default Cube;
