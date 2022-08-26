import React, { useRef } from "react";
import { addAndRemoveClasses } from "../utils";

const ProjectCard = ({ project }) => {
  const image = require("../images/projects/" + project.img);

  const front = useRef();
  const back = useRef();

  function handleOnMouseEnter(event) {
    addAndRemoveClasses(
      ["back-card", "back-card-transition"],
      "back-card-fade",
      back.current
    );
    addAndRemoveClasses(
      ["front-card", "front-card-transition"],
      "front-card-fade",
      front.current
    );
  }

  function handleOnMouseLeave(event) {
    addAndRemoveClasses(
      "back-card-fade",
      ["back-card", "back-card-transition"],
      back.current
    );
    addAndRemoveClasses(
      "front-card-fade",
      ["front-card", "front-card-transition"],
      front.current
    );
    setTimeout(() => {
      back.current.classList.remove("front-card-fade");
    }, 1500);
    setTimeout(() => {
      front.current.classList.remove("front-card-fade");
    }, 1500);
  }

  function handleClick() {
    addAndRemoveClasses(
      null,
      [("back-card-fade", "back-card", "back-card-transition")],
      back.current
    );
    addAndRemoveClasses(
      null,
      ["front-card-fade", "front-card", "front-card-transition"],
      front.current
    );
  }

  return (
    <div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        <div className="relative pb-2 cursor-pointer">
          <div
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            ref={front}
            className="h-52 z-20 w-full shadow-card rounded-lg"
          >
            <img
              src={image}
              alt={project.title}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div
            ref={back}
            className="h-52 -z-10 w-full top-2 left-3 absolute bg-secondaryBackground shadow-sm rounded-lg text-slate-100 p-2"
          >
            <h2 className="font-bold">{project.title}</h2>
            <p>{project.description}</p>
            <div className="flex justify-start items-center font-code border-t border-t-secondaryTextColor mt-1 pt-1">
              {project.technologies.map((element) => (
                <div className="mr-4">{element}</div>
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
