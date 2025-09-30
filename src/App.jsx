import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Root from "./components/Root";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Service from "./components/home/Service";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Route>
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
};

export default App;
