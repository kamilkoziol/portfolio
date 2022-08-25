import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
  };

  const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
      <div className="h-52 border border-red-700">
        <h3>Slide {num}</h3>
        <p>See ....</p>
        <p>Height is adaptive</p>
      </div>
    ));

  // return (
  //   <div className="max-w-full">
  //     <h2> Multiple items </h2>
  //     <Slider {...settings}>{renderSlides()}</Slider>
  //   </div>
  // );

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-start justify-center mx-auto max-w-4xl"
    >
      <h2 className="text-secondaryTextColor text-right font-bold text-2xl w-full ">
        <span className="before:h-[1px] before:w-40 before:-translate-y-[8px] before:-translate-x-6 before:bg-primaryTextColor before:inline-block">
          Projects
        </span>
      </h2>
      <h3 className="mt-6 mb-6">
        Simple mostly vanilla JS project I built in process of learning:
      </h3>
      <div className="max-w-full h-56">
        <Slider {...settings}>{renderSlides()}</Slider>
      </div>
    </section>
  );
};

export default Projects;
