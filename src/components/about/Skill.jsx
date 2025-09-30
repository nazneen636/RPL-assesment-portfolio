import React from "react";
import Marquee from "react-fast-marquee";
const SkillList = [
  {
    id: 1,
    label: "HTML",
  },
  {
    id: 2,
    label: "CSS",
  },
  {
    id: 3,
    label: "JavaScript",
  },
  {
    id: 4,
    label: "React.js",
  },
  {
    id: 5,
    label: "Next.js",
  },
  {
    id: 6,
    label: "Node.js",
  },
  {
    id: 7,
    label: "Express.js",
  },
  {
    id: 8,
    label: "Git",
  },
];

const Skill = () => {
  return (
    <div className="pt-20">
      <h1 className="text-3xl text-center font-bold mb-10">Skills</h1>
      <Marquee className=" text-white">
        {SkillList?.map((item) => (
          <div className="py-4 w-[150px] text-center inline-block mx-4 bg-gray-900 rounded-md ">
            {item.label}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Skill;
