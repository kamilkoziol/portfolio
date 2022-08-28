import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const EducationTimeline = () => {
  return (
    <div className="w-full m-6 flex items-center justify-center">
      <VerticalTimeline lineColor="#7E8D85">
        <VerticalTimelineElement
          className="vertical-timeline-element--work hover:scale-105 transition duration-300"
          contentStyle={{ background: "#7E8D85", color: "#A2E3C4" }}
          contentArrowStyle={{ borderRight: "7px solid  #7E8D85" }}
          date="&nbsp;&nbsp; 2018 - present"
          iconStyle={{ background: "#7E8D85", color: "#ff0" }}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Warsaw University of Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-sm">
            Master's degree in Robotics and Control Engineering
          </h4>
          <p>
            Building system to scan and recognize facial features in order
            to determine scanned person age, ethnicity and gender based on
            deep learning artificial neural networks
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work hover:scale-105 transition duration-300"
          contentStyle={{ background: "#7E8D85", color: "#A2E3C4" }}
          contentArrowStyle={{ borderRight: "7px solid  #7E8D85" }}
          date="2014 - 2018 &nbsp;&nbsp;"
          iconStyle={{ background: "#7E8D85", color: "#ff0" }}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Warsaw University of Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-sm">
            Bachelor's degree in Robotics and Control Engineering
          </h4>
          <p>
            Focused on elaborating steering algorithm for autonomous cars
            basing on Neural Networks and Genetic Algorithms
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default EducationTimeline;
