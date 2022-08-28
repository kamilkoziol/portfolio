import React from "react";
import SkillsPanel from "./SkillsPanel";

const Skills = () => {
  const webDevSkills = {
    title: "From webdev department",
    skills: [
      { name: "JavaScript", level: 7 },
      { name: "HTML5/CSS3", level: 7 },
      { name: "React 18", level: 6 },
      { name: "Tailwind CSS", level: 6 },
      { name: "REST API", level: 5 },
      { name: "Python 3.8", level: 8 },
      { name: "Flask", level: 4 },
    ],
  };

  const mlSkills = {
    title: "From ML department",
    skills: [
      { name: "Python 3.8", level: 8 },
      { name: "Numpy", level: 8 },
      { name: "TensorFlow 2", level: 6 },
      { name: "Sklearn", level: 5 },
      { name: "Matplotlib", level: 4 },
      { name: "Pandas", level: 6 },
    ],
  };

  const computerSkills = {
    title: "General computer skills",
    skills: [
      { name: "C/C++", level: 3 },
      { name: "Java", level: 5 },
      { name: "Microcontrollers", level: 5 },
      { name: "Databases/SQL", level: 6 },
      { name: "Linux/Ubuntu 20.04", level: 5 },
    ],
  };

  const languages = {
    title: "Languages",
    skills: [
      { name: "Polish", level: 10 },
      { name: "English", level: 8 },
      { name: "Germany", level: 1 },
    ],
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-start justify-center mx-auto max-w-4xl mt-16"
    >
      <h2 className=" text-secondaryTextColor font-bold text-2xl after:w-40 after:h-[1px] after:-translate-y-[18px] after:translate-x-24 after:bg-primaryTextColor after:block">
        Skills
      </h2>
      <div className="grid grid-cols-1 bg:grid-cols-2">
        <SkillsPanel
          skills={webDevSkills.skills}
          title={webDevSkills.title}
        />
        <SkillsPanel skills={mlSkills.skills} title={mlSkills.title} />
        <SkillsPanel
          skills={computerSkills.skills}
          title={computerSkills.title}
        />
        <SkillsPanel skills={languages.skills} title={languages.title} />
      </div>
    </section>
  );
};

export default Skills;
