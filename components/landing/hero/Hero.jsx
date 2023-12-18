import React from "react";
import Video from "/images/landing/hero/Video";

const Hero = () => {
  return (
    <>
      <div className="relative h-[85vh] flex items-center content-center max-h-[85vh] overflow-hidden">
        <div className="flex items-center justify-center absolute w-full h-full">
          <Video />
        </div>
        <div className="p-6 md:p-10 lg:p-20 text-4xl sm:text-5xl md:text-7xl">
          <p className="font-bold drop-shadow-[0_35px_35px_rgba(0,0,0,1)]">
            Light <br /> Enabled <br /> Additive <br /> Manufacturing
          </p>
        </div>
      </div>
      <div className="feature-gradient w-full h-[5px] md:h-[10px] bg-red-500" />
    </>
  );
};

export default Hero;
