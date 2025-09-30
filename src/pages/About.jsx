import React from "react";
import AboutPage from "../components/about/AboutPage";
import Biography from "../components/about/Biography";
import Testimonial from "../components/home/Testimonial";
import Skill from "../components/about/Skill";

const About = () => {
  return (
    <div>
      <AboutPage />
      <Testimonial />
      <Skill />
    </div>
  );
};

export default About;
