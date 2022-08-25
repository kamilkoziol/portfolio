import React from "react";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-start justify-center mx-auto max-w-4xl">
      <h2 className="text-secondaryTextColor font-bold text-2xl after:w-40 after:h-[1px] after:-translate-y-[18px] after:translate-x-24 after:bg-primaryTextColor after:block">
        About
      </h2>
      <div className="grid">
        <p className="max-w-xl mt-6 text-lg">
          I used to be a core banking systems specialist in one of the
          biggest corporation. I quitted to put my passion in first place
          and follow my dream of becoming fullstack developer.
        </p>
        <div>
          <img src="../images/1.jpg"></img>
        </div>
      </div>
    </section>
  );
};

export default About;
