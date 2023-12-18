import React from "react";

const Features = () => {
  return (
    <div>
      <div className="absolute feature-background w-full h-screen"></div>
      <div className="relative z-10 px-4 lg:px-40 xl:px-60 2xl:px-96 justify-center items-center flex w-full h-screen">
        <div>
          <a className="block m-4 mb-10 lg:mb-8" href="/use-cases">
            <p className="font-black text-2xl md:text-3xl 2xl:text-4xl mb-2">
              Unprecedented part performance
            </p>
            <p className="text:xl md:text-2xl 2xl:text-2xl mb-4">
              Our DEMEX system allows the user to print parts with mechanical
              performance that has never been achieved before.
            </p>
            <div className="feature-gradient w-[50%] h-[2px]"></div>
          </a>
          <div className="lg:flex">
            <a className="block m-4 mb-10 lg:mb-4" href="/use-cases">
              <p className="font-black text-2xl md:text-3xl 2xl:text-4xl mb-2">
                New process combinations
              </p>
              <p className="text:xl md:text-2xl 2xl:text-2xl mb-4">
                Functionalize and individualize CFRP components or injection
                molded parts, segment toolpaths or interrupt the process if
                needed. Process and material combinations that seemed unfeasible
                before, are now possible.
              </p>
              <div className="feature-gradient w-[50%] h-[2px]"></div>
            </a>
            <a className="block m-4" href="/use-cases">
              <p className="font-black text-2xl md:text-3xl 2xl:text-4xl mb-2">
                Digital twin
              </p>
              <p className="text:xl md:text-2xl 2xl:text-2xl mb-4">
                Keep track of every aspect of your print. Generate a digital
                twin of every produced part and be informed about your
                production parameters.
              </p>
              <div className="feature-gradient w-[50%] h-[2px]"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
