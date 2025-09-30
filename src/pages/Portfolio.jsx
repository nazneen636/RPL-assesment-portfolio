import React from "react";
import PageTitle from "../components/common/PageTitle";
import Biography from "../components/about/Biography";
import Education from "../components/about/Educational";

const Portfolio = () => {
  return (
    <div>
      <PageTitle className="mt-20" text="Portfolio" />
      <Biography />
      <Education />
    </div>
  );
};

export default Portfolio;
