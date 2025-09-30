import React from "react";

const Experience = () => {
  return (
    <div className="pt-20 container flex items-center justify-center">
      {" "}
      <div className="">
        <h1 className="text-3xl text-center font-bold mb-10">Experience</h1>
        <div className="mt-10! rounded-md grid grid-cols-2 gap-4  py-6 px-10 border border-gray-300">
          <div className="flex flex-col gap-10">
            <div className="flex gap-3 flex-col">
              <h1 className="text-xl font-semibold">
                Intern Frontend Developer
              </h1>
              <p className="text-xl opacity-80">Apexify Technology</p>
              <p className="text-base opacity-80">Year: 2025</p>
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt dolorum facere dolor assumenda sapiente dolores.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex gap-3 flex-col ">
              <h1 className="text-xl font-semibold">
                Junior Frontend Developer
              </h1>
              <p className="text-xl opacity-80">SM Technology</p>
              <p className="text-base opacity-80">Year: 2025</p>
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt dolorum facere dolor assumenda sapiente dolores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
