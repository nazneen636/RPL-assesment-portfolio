import React from "react";
import ServiceCard from "../common/ServiceCard";

const serviceList = [
  {
    id: 1,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolore et distinctio omnis consectetur fugit.",
  },
  {
    id: 2,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolore et distinctio omnis consectetur fugit.",
  },
  {
    id: 3,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolore et distinctio omnis consectetur fugit.",
  },
  {
    id: 4,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolore et distinctio omnis consectetur fugit.",
  },
];
const Service = () => {
  return (
    <div className="text-4xl container pt-20 mb-20">
      <h1 className="text-center mb-10 font-bold"> Services</h1>
      <div className="grid gap-5 grid-cols-4">
        {serviceList?.map((item) => (
          <div key={item.id}>
            <ServiceCard title={item.title} description={item.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
