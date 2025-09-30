import React from "react";
import about from "/about-img.jpg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

const socialMedia = [
  {
    id: 1,
    icons: <FaFacebookF />,
    path: "/",
  },
  {
    id: 2,
    icons: <FaLinkedinIn />,
    path: "/",
  },
  {
    id: 3,
    icons: <FaInstagram />,
    path: "/",
  },
];
const AboutPage = () => {
  return (
    <div className=" pt-20">
      <div className="py-10 border-b border-b-gray-200">
        <h1 className="text-3xl font-semibold opacity-90 container">
          About Page
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-8 container pt-8">
        <div className="">
          <img src={about} alt="about" />
        </div>
        <div className="col-span-2 flex flex-col gap-4">
          <h1 className="text-gray-800 text-5xl font-semibold">About Me.</h1>
          <p className="text-2xl text-gray-800">
            UI/UX Designer & Web Developer
          </p>
          <p className="text-lg text-gray-800 opacity-90">
            I'm Kalvin Doe Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to specimen book.
          </p>
          <p className="text-lg text-gray-800 opacity-90">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          {/* social media */}
          <div className="flex items-center  gap-4">
            {socialMedia?.map((item) => (
              <a
                href={item.path}
                className="h-10 w-10 bg-black text-white rounded-full flex items-center justify-center text-xl"
              >
                {item.icons}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
