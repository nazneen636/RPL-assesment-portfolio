import React from "react";
import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <div class="bg-[url(/home-banner-bg.jpg)] h-screen relative">
      <div className="absolute w-full h-full left-0 top-0 bg-[#00000094] z-0"></div>
      <div className="container flex flex-col justify-center h-full z-20 relative">
        <h1 className=" text-6xl text-white font-black pt-20 pb-8">
          Hi! I'm Kalvin.
        </h1>
        <span className="block text-2xl text-white max-w-[550px] pb-28">
          Creative Designer & Developer located in New York. Specialized in{" "}
          <span className="inline-block whitespace-nowrap">
            <Typewriter
              options={{
                strings: [
                  "Creating Websites",
                  "Designing Logo",
                  "Designing UI/UX",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </span>
        </span>
      </div>
    </div>
  );
};

export default Hero;
