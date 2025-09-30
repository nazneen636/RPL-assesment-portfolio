import React from "react";
import Nav from "./home/Nav";
import { Outlet } from "react-router";
import Footer from "./common/Footer";

const Root = () => {
  return (
    <div className="relative">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
