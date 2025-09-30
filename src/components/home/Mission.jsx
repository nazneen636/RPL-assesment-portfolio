import React from "react";
import mission from "../../../public/mission.jpg";
import vision from "../../../public/vission-1.jpg";

const Mission = () => {
  return (
    <div className="container pt-20">
      <div className="grid grid-cols-2 gap-8">
        <div className="grid  grid-cols-2 gap-4">
          <img className="" src={mission} alt="" />
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Mission</h1>
            <p className="opacity-70 text-left">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
              dolores lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Itaque.
            </p>
          </div>
        </div>
        <div className="grid  grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-right">Vision</h1>
            <p className="opacity-70 text-base float-right text-right">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
              dolores lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Itaque.
            </p>
          </div>
          <img className="" src={vision} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
