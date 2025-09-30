import React from "react";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="rounded-md border border-gray-200 py-4 px-6">
      <h1 className="text-2xl font-semibold mb-4">{title}</h1>
      <p className="text-base opacity-70">{description}</p>
    </div>
  );
};

export default ServiceCard;
