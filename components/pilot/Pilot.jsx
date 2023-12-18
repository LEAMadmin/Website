import React from "react";
import Combo from "/images/pilot/Combo";

const Team = () => {
  return (
    <div className="w-full min-h-[calc(100vh-150px)] h-full">
      <div className="min-h-[120px]"></div>
      <div className="flex mt-20 w-full justify-center">
        <div className="flex max-w-[1200px]">
          <div className="w-full px-10 md:px-20">
            <p className="text-3xl md:text-5xl mb-10">
              Pilot projects and validation
            </p>
            <div className="md:flex md:items-center mb-20">
              <p className="text-xl w-full xl:w-[60%] mr-10 leading-8 mb-20 md:mb-0">
                To find out whether an application would benefit from our DEMEX
                or Temperature Monitoring solution we can validate it together.
                In the context of a pilot project your application can be
                printed on our facilities using a state-of-the-art large format
                3D printer including the DEMEX or Temperature Monitoring system.
                Without risk you can test applications you are interested in,
                such as:
                <br />
                <br />
                <div className="w-full">
                  <ul className="md:w-[90%] ml-auto list-disc">
                    <li>
                      Processing of new materials, e.g. injection molding grades
                      that you could not print before
                      <br />
                      <br />
                    </li>
                    <li>
                      High performance applications that require reliable, high
                      mechanical properties of the part
                      <br />
                      <br />
                    </li>
                    <li>
                      New process combinations, e.g. functionalizing and
                      individualizing CFRP components or injection molded parts.
                      <br />
                      <br />
                    </li>
                    <li>
                      Your specific application
                      <br />
                      <br />
                    </li>
                  </ul>
                </div>
              </p>
              <div className="w-[40%] shadow-leam">
                <Combo />
              </div>
            </div>
            <div className="mb-20 w-full flex justify-center">
              <a
                href="contact"
                className="border-2 p-2 pb-3 px-10 text-lg hover:bg-white hover:text-black transition-all ease-in"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
