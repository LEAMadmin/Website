import React from "react";
import Benno from "../../images/team/Benno";
import Patrick from "../../images/team/Patrick";
import Ting from "../../images/team/Ting";

const Team = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-[calc(100vh-150px)] h-full">
      <div className="min-h-[120px]"></div>
      <div className="px-20 xl:px-40 flex justify-center max-w-[1500px]">
        <div>
          <div className="mt-10">
            <p className="text-3xl md:text-5xl mb-8">
              Light Enabled Additive Manufacturing
            </p>
            <p className="max-w-prose mb-3 text-xl">
              LEAM is a spin-out of the Technical University of Munich, one of
              the leading technical universities in Europe. Here the founders
              worked together as researchers and spent the last years developing
              the technology that uses Light to Enable Additive Manufacturing
              for the most challenging applications.
              <br />
              <br /> After 15 cumulative years of research into LFAM and AFP, we
              are now starting up to transition additive manufacturing from a
              tool for prototypes and aesthetic parts to a cornerstone
              technology for end-use applications in the most challenging
              industries. Our vision is to empower additive manufacturing to
              drive, swim, and fly. Even in safety-critical use cases across
              industries that rely on polymers, through industrial-grade process
              stability and material excellence.
            </p>
            <div className="feature-gradient w-[250px] md:w-[500px] h-[2px] mr-4 mb-10"></div>
          </div>
          <div className="md:flex w-full items-center justify-between mb-20">
            <div className="md:mr-2 mb-20 md:mb-0 p-4 text-center">
              <Patrick />
              <p className="mt-4 font-bold text-lg">Patrick Consul</p>
              <p className="text-sm">CEO</p>
              <a
                className="text-sm text-blue-400 underline"
                href="https://www.linkedin.com/in/patrick-consul/"
              >
                LinkedIn
              </a>
            </div>
            <div className="md:mx-2 mb-20 md:mb-0 p-4 text-center">
              <Benno />
              <p className="mt-4 font-bold text-lg">Benno Böckl</p>
              <p className="text-sm">COO</p>
              <a
                className="text-sm text-blue-400 underline"
                href="https://www.linkedin.com/in/bennoboeckl/"
              >
                LinkedIn
              </a>
            </div>
            <div className="md:ml-2 mb-20 md:mb-0 p-4 text-center">
              <Ting />
              <p className="mt-4 font-bold text-lg">Ting Wang</p>
              <p className="text-sm">CTO</p>
              <a
                className="text-sm text-blue-400 underline"
                href="https://www.linkedin.com/in/ting-wang1/"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
