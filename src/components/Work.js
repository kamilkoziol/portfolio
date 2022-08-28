import React from "react";
import WorkTimeline from "./WorkTimeline";
import EducationTimeline from "./EducationTimeline";
const Work = () => {
  return (
    <section
      id="work"
      className="min-h-screen flex flex-col items-start justify-center mx-auto max-w-4xl mt-16"
    >
      <h2 className="text-secondaryTextColor text-right font-bold text-2xl w-full mb-6 ">
        <span className="before:h-[1px] before:w-40 before:-translate-y-[7px] before:-translate-x-6 before:bg-primaryTextColor before:inline-block">
          Work and education
        </span>
      </h2>
      <h3 className="mt-6 mb-6 text-xl font-bold">Work experience:</h3>
      <WorkTimeline />

      <h3 className="mt-6 mb-6 text-xl font-bold">Education:</h3>
      <EducationTimeline />
    </section>
  );
};

export default Work;
