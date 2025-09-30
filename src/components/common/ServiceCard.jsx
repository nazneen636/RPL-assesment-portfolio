import React from "react";

const ServiceCard = (title, description) => {
  return (
    <div className="rounded-md border border-gray-200">
      <h1 className="">{title}</h1>
      <p className="">{description}</p>
    </div>
  );
};

export default ServiceCard;
