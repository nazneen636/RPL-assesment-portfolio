import React from "react";

const Biography = () => {
  return (
    <div className="container mt-10! rounded-md flex flex-col gap-4  py-6 px-25 border border-gray-100'">
      <h1 className="text-3xl text-center font-bold mb-10">Biography</h1>
      <div className="flex justify-between">
        <div className="flex gap-3 flex-col ">
          <div className="">
            <span className="text-xl font-semibold">Name: </span>
            <span className="text-xl opacity-80">Nazneen Nahar</span>
          </div>
          <div className="">
            <span className="text-xl font-semibold">Profession: </span>
            <span className="text-xl opacity-80">Frontend Developer</span>
          </div>
          <div className="">
            <span className="text-xl font-semibold">Birthday: </span>
            <span className="text-xl opacity-80">31 Dec, 1993</span>
          </div>
        </div>
        <div className="flex gap-3 flex-col ml-10">
          <div className="">
            <span className="text-xl font-semibold">Name: </span>
            <span className="text-xl opacity-80">Nazneen Nahar</span>
          </div>
          <div className="">
            <span className="text-xl font-semibold">Profession: </span>
            <span className="text-xl opacity-80">Frontend Developer</span>
          </div>
          <div className="">
            <span className="text-xl font-semibold">Birthday: </span>
            <span className="text-xl opacity-80">31 Dec, 1993</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
