import React from "react";

const PageTitle = ({ text, className }) => {
  return (
    <div>
      {" "}
      <div className={`py-10 border-b border-b-gray-200 ${className}`}>
        <h1 className="text-3xl font-semibold opacity-90 container text-black">
          {text} Page
        </h1>
      </div>
    </div>
  );
};

export default PageTitle;
