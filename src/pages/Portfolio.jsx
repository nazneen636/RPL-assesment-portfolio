import React from "react";
import PageTitle from "../components/common/PageTitle";
import Biography from "../components/about/Biography";
import Education from "../components/about/Educational";
import Service from "../components/home/Service";
import Experience from "../components/about/Experience";

const Portfolio = () => {
  return (
    <div>
      <PageTitle className="mt-20" text="Portfolio" />
      <Biography />
      <Education />
      <Experience />
      <Service />
    </div>
  );
};

export default Portfolio;
