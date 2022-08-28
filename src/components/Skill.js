import React from "react";

const Skill = ({ name, level }) => {
  return (
    <>
      <div className="flex justify-start items-center">{name}</div>
      <div className="w-[200px] bg:w-[15vw] xl:w-[200px] h-8 border border-primaryTextColor grid grid-cols-10 gap-1 px-0.5 py-0.5 my-0.5">
        {Array(level)
          .fill(0)
          .map(() => (
            <div className="skill-small-bar"></div>
          ))}
      </div>
    </>
  );
};

export default Skill;
