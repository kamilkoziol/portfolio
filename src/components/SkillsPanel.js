import React from "react";
import Skill from "./Skill";

const SkillsPanel = ({ title, skills }) => {
  return (
    <div className="m-6">
      <h3 className="my-4 text-xl font-bold">{title}:</h3>
      <div className="grid grid-cols-2">
        {skills.map((element) => (
          <Skill name={element.name} level={element.level} />
        ))}
      </div>
    </div>
  );
};

export default SkillsPanel;
