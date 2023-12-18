import React from "react";

const Contact = () => {
  return (
    <div className="w-full min-h-[calc(100vh-150px)] h-full">
      <div className="absolute contact-background w-full h-full"></div>
      <div className="min-h-[120px]"></div>
      <div className="relative mt-24 px-10 md:px-20 xl:px-40 flex justify-center">
        <div className="bg-black/25 p-10 rounded-lg mb-32 lg:mb-0">
          <p className="font-bold text-2xl md:text-4xl mb-6">Get in touch</p>
          <div className="feature-gradient sm:w-[350px] md:w-[500px] lg:w-[750px] h-[2px] mb-10"></div>
          <div className="lg:flex">
            <div className="w-full">
              <form action="mailto:info@leam.tech" method="GET">
                <div>
                  <input
                    className="pb-2 pl-2 w-full text-2xl h-[50px] placeholder:text-xl md:placeholder:text-2xl placeholder:text-white
                  outline-none bg-transparent border-b-2 border-white"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <textarea
                    className="duration-200 ease-in mt-8 pb-2 pl-2 text-2xl w-full placeholder:text-xl md:placeholder:text-2xl h-[130px] focus:h-[130px] placeholder-shown:h-[50px] placeholder:text-white
                  outline-none resize-none bg-transparent border-b-2 border-white"
                    name="body"
                    placeholder="Text"
                  ></textarea>
                </div>
                <div>
                  <input
                    className="mt-8 border-2 pt-1 pb-2 px-10 text-md hover:bg-white hover:text-black transition-all ease-in"
                    type="submit"
                    value="Send"
                  />
                </div>
              </form>
            </div>
            <div className="mt-20 lg:mt-0 w-full lg:pl-20">
              <div className="text-md md:text-xl font-semibold mb-3">
                <p className="mt-2">LEAM</p>
                <p>info@leam.tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
