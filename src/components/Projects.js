import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const simpleProjects = [
    {
      title: "Calculator",
      description: "Simple calculator, you all know calculators right?",
      technologies: ["JavaScript", "CSS"],
      img: "calculator.png",
      link: "https://kamilkoziol.github.io/small-projects/calculator/calculator.html",
    },
    {
      title: "Clock",
      description:
        "Intervals, timeouts, basic JS to create this basic clock.",
      technologies: ["JavaScript", "CSS"],
      img: "clock.png",
      link: "https://kamilkoziol.github.io/small-projects/clock/clock.html",
    },

    {
      title: "Drum Machine",
      description:
        "That one is actually pretty good. Allows to assign a sound from hard drive to one of 16 pads and assign unique key to each pad to play the rythm.",
      technologies: ["JavaScript", "CSS"],
      img: "drummachine.png",
      link: "https://kamilkoziol.github.io/small-projects/drumkit/drumkit.html",
    },
    {
      title: "Fake YT",
      description: "Fake Youtube layout made in CSS",
      technologies: ["CSS"],
      img: "fake-yt.png",
      link: "https://kamilkoziol.github.io/small-projects/fake-yt/index.html",
    },
    {
      title: "Stopwatch",
      description: "Allows to stop, start, reset and measure lap times",
      technologies: ["JavaScript", "CSS"],
      img: "stopwatch.png",
      link: "https://kamilkoziol.github.io/small-projects/stopwatch/stopwatch.html",
    },
  ];

  const advancedProjects = [
    {
      title: "Sorting comparator",
      description:
        "Allows to compare sorting speed of different algorithms. Not very beautiful tho.",
      technologies: ["React", "CSS"],
      img: "sort-visulaizer.png",
      link: "https://kamilkoziol.github.io/sorting-visualizer-js/",
    },
    {
      title: "2048",
      description:
        "Everyone knows this game, simple implementation of it. Handles different sizes of board.",
      technologies: ["React", "Tailwind CSS"],
      img: "2048.png",
      link: "https://kamilkoziol.github.io/2048-clone/",
    },
    {
      title: "Sorting comparator",
      description:
        "Allows to compare sorting speed of different algorithms. Not very beautiful tho.",
      technologies: ["React", "CSS"],
      img: "sort-visulaizer.png",
      link: "https://kamilkoziol.github.io/sorting-visualizer-js/",
    },
    {
      title: "2048",
      description:
        "Everyone knows this game, simple implementation of it. Handles different sizes of board.",
      technologies: ["React", "Tailwind CSS"],
      img: "2048.png",
      link: "https://kamilkoziol.github.io/2048-clone/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-start justify-center mx-auto max-w-4xl mt-16"
    >
      <h2 className="text-secondaryTextColor text-right font-bold text-2xl w-full mb-6 ">
        <span className="before:h-[1px] before:w-40 before:-translate-y-[7px] before:-translate-x-6 before:bg-primaryTextColor before:inline-block">
          Projects
        </span>
      </h2>
      <h3 className="mt-6 mb-6 text-xl">
        Simple mostly vanilla JS project I built in process of learning:
      </h3>
      <div className="max-w-full h-56">
        <Slider {...settings}>
          {simpleProjects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </Slider>
      </div>

      <h3 className="mt-6 mb-6 text-xl">
        Some more advanced projects that might be actually worth
        mentioning:
      </h3>

      <div className="max-w-full h-56">
        <Slider {...settings}>
          {advancedProjects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </Slider>
      </div>

      <h3 className="mt-6 mb-6 text-xl">Commercial projects:</h3>
      <p>Help me fill it :v</p>
    </section>
  );
};

export default Projects;
