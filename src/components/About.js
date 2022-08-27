import React from "react";
import photo1 from "../images/1.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-start justify-center mx-auto max-w-4xl"
    >
      <h2 className="text-secondaryTextColor font-bold text-2xl after:w-40 after:h-[1px] after:-translate-y-[18px] after:translate-x-24 after:bg-primaryTextColor after:block">
        About
      </h2>
      <div className="sm:grid sm:grid-cols-3 gap-10">
        <div className="col-span-2">
          <p className="max-w-xl mt-6 text-lg">
            Hello, I'm Kamil. I enjoy programming since I was a little kid
            (I'm pretty old tho). I have started with C++ (I was a child
            thus so didnt understand much tho). Then I moved to Java, after
            that to Python and eventually to JS.
          </p>
          <p className="max-w-xl mt-6 text-lg">
            Profesionally I started with high school student tutoring high
            school students to pay for my studies. I thought them mostly
            math but occasionaly programming and physics also. Then I moved
            to one of big corporates where I became core banking system
            specialist responsible for customizing, developing and building
            inegration around core banking solutions. However banking
            systems tend to be huge, outdated, poor-performing and leaving
            enourmous technology debt. I crave swift solution and modern
            technologies
          </p>
          <p className="max-w-xl mt-6 text-lg">
            In free time I learn about neural network and how ridiculously
            they outperform people in some tasks.
          </p>
          <p className="max-w-xl mt-6 text-lg">
            Technologies I've been working with:
            <div className="grid grid-cols-2 mt-4">
              <div>Web development:</div>
              <div>Neural networks:</div>
              <ol className="list-disc list-inside font-code">
                <li>React 18</li>
                <li>JavaScript ES6+</li>
                <li>Tailwind CSS</li>
              </ol>
              <ol className="list-disc list-inside font-code">
                <li>TensorFlow 2</li>
                <li>Python 3.8</li>
                <li>Numpy</li>
              </ol>
            </div>
          </p>
        </div>
        <div className="max-w-[250px] hidden sm:block">
          <img alt="it's me mario" src={photo1}></img>
        </div>
      </div>
    </section>
  );
};

export default About;
