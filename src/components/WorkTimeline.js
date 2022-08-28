import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import DeloitteLogo from "../images/work/deloitte.jpg";

const WorkTimeline = () => {
  return (
    <div className="w-full m-6 mb-16 flex items-center justify-center">
      <VerticalTimeline lineColor="#7E8D85">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#7E8D85", color: "#A2E3C4" }}
          contentArrowStyle={{ borderRight: "7px solid  #7E8D85" }}
          date="&nbsp;&nbsp; 2017 - 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
          icon={
            <img
              className="rounded-full"
              src={DeloitteLogo}
              alt="deloitte-logo"
            />
          }
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Senior Consultant at Deloitte
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-sm">
            Warsaw, Poland
          </h4>
          <p>
            System integrator, Java programmer, Solution architect,
            Integration designer
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#7E8D85", color: "#A2E3C4" }}
          contentArrowStyle={{ borderRight: "7px solid  #7E8D85" }}
          date="2017 - 2018 &nbsp;&nbsp;"
          iconStyle={{ background: "#7E8D85", color: "#ff0" }}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Tutor at Foster High
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-sm">
            Warsaw, Poland
          </h4>
          <p>
            Math, Physics and Coding tutor for high school and university
            students
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default WorkTimeline;
