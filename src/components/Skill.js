import React, { useEffect, useRef, useState } from "react";

const Skill = ({ name, level }) => {
  const [levelProgress, setLevelProgress] = useState(0);
  const skillBar = useRef();

  useEffect(() => {
    let progress = 0;
    function obsFn(entry) {
      let interval;
      if (entry[0].isIntersecting && progress === 0) {
        interval = setInterval(handleIncreaseLevelProgress, 500);
      }

      function handleIncreaseLevelProgress() {
        progress = progress + 1;
        setLevelProgress(progress);
        if (progress >= level) {
          clearInterval(interval);
        }
      }
    }
    const observer = new IntersectionObserver(obsFn, { threshold: 1 });
    observer.observe(skillBar.current);
  }, []);

  //   useEffect(() => {
  //     console.log(levelProgress);
  //   }, [levelProgress]);

  return (
    <>
      <div className="flex justify-start items-center">{name}</div>
      <div
        ref={skillBar}
        className="w-[200px] bg:w-[15vw] xl:w-[200px] h-8 border border-primaryTextColor grid grid-cols-10 gap-1 px-0.5 py-0.5 my-0.5"
      >
        {Array(levelProgress)
          .fill(0)
          .map(() => (
            <div className="skill-small-bar"></div>
          ))}
      </div>
    </>
  );
};

export default Skill;
