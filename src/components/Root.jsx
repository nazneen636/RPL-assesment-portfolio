import React from "react";
import Nav from "./home/Nav";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="relative">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Root;
