import React from "react";
import Cube from "./Cube";

const Hero = () => {
  return (
    <section
      id="hero"
      className="mx-auto max-w-4xl flex justify-start items-center gap-8"
    >
      <div className="flex flex-col items-start justify-center min-h-screen">
        <h1 className="text-secondaryTextColor">Hello, my name is</h1>
        <h2 className="text-5xl text-slate-100">Kamil Koziół</h2>
        <p className="max-w-xl mt-6 text-lg">
          I used to be a core banking systems specialist in one of the
          biggest corporation. I quitted to put my passion in first place
          and follow my dream of becoming fullstack developer.
        </p>
      </div>
      <Cube />
    </section>
  );
};

export default Hero;
