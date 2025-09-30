import React from "react";

const Education = () => {
  return (
    <div className="pt-20 container flex items-center justify-center">
      {" "}
      <div className="max-w-[800px] flex-1">
        <h1 className="text-3xl text-center font-bold mb-10">
          Education & Training
        </h1>
        <div className="mt-10! rounded-md flex justify-between gap-4  py-6 px-10 border border-gray-300">
          <div className="flex flex-col gap-10">
            <div className="flex gap-3 flex-col">
              <h1 className="text-xl font-semibold">B.A in Philosophy </h1>
              <p className="text-xl opacity-80">University of Dhaka</p>
              <p className="text-base opacity-80">Year: 2015</p>
            </div>
            <div className="flex gap-3 flex-col ">
              <h1 className="text-xl font-semibold">B.A in Philosophy </h1>
              <p className="text-xl opacity-80">University of Dhaka</p>
              <p className="text-base opacity-80">Year: 2015</p>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex gap-3 flex-col">
              <h1 className="text-xl font-semibold">MERN Stack Developer </h1>
              <p className="text-xl opacity-80">Creative IT Institute</p>
              <p className="text-base opacity-80">Year: 2015</p>
            </div>
            <div className="flex gap-3 flex-col ">
              <h1 className="text-xl font-semibold">Frontend Developer </h1>
              <p className="text-xl opacity-80">Creative IT Institute</p>
              <p className="text-base opacity-80">Year: 2015</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
