import React from "react";
import Nav from "./home/Nav";
import { Outlet } from "react-router";
import Footer from "./common/Footer";

const Root = () => {
  return (
    <div className="relative">
      <Nav />
      <div className="">
        <Outlet />
      </div>
      <div className="pt-28">
        <Footer />
      </div>
    </div>
  );
};

export default Root;
