import React from "react";
import Testimonial from "../components/home/Testimonial";
import Nav from "../components/home/Nav";
import Hero from "../components/home/Hero";
import Mission from "../components/home/Mission";
import Service from "../components/home/Service";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Mission />
      <Service />
      <Testimonial />
    </div>
  );
};

export default Home;
