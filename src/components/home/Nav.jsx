import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const menuItems = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: "About",
    path: "/about",
  },
  {
    id: 3,
    label: "Services",
    path: "/services",
  },
  {
    id: 4,
    label: "Portfolio",
    path: "/portfolio",
  },
  {
    id: 5,
    label: "Contact",
    path: "/contact",
  },
];
const Nav = () => {
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // ${scrolled ? "bg-white text-black" : "bg-transparent text-white"}
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-white text-black border-b border-b-gray-200 shadow-md
        `}
    >
      <div className="flex items-center justify-between container py-5">
        {/* logo */}
        <div className="uppercase text-3xl font-bold">
          <span className="">naz</span>
          <span className="">neen</span>
        </div>
        {/* manu */}
        <div className="flex items-center gap-5 ">
          {menuItems?.map((item, index) => (
            <a
              href={item.path}
              key={index}
              className="text-base hover:text-yellow-400 transition-all duration-300 "
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
