import React from "react";
import Hero from "./components/home/Hero";
import Nav from "./components/home/Nav";
import About from "./components/home/About";
import Mission from "./components/home/Mission";

const App = () => {
  return (
    <div className="relative">
      <Nav />
      <Hero />
      <Mission />
      <About />
    </div>
  );
};

export default App;
