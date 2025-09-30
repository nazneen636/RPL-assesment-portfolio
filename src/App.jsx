import React from "react";
import Hero from "./components/home/Hero";
import Nav from "./components/home/Nav";
import About from "./components/home/About";

const App = () => {
  return (
    <div className="relative">
      <Nav />
      <Hero />
      <About />
    </div>
  );
};

export default App;
