import React from "react";

const Imprint = () => {
  return (
    <div className="w-full min-h-[calc(100vh-150px)] h-full">
      <div className="min-h-[120px]"></div>
      <div className="mt-24 px-10 md:px-20 xl:px-40 flex justify-center">
        <div>
          <p className="font-bold text-4xl mb-4">Impressum</p>
          <p className="mb-20 text-lg max-w-[1000px]">
            LEAM Technologies GmbH
            <br />
            Cosimastraße 121
            <br />
            81925 München
            <br />
            Deutschland
            <br />
            <br />
            Tel.: 01726771335
            <br />
            E-Mail: info@leam.tech
            <br />
            <br />
            Registergericht: Amtsgericht München
            <br />
            Registernummer: HRB 289426
            <br />
            <br />
            Geschäftsführer: Benno Böckl, Patrick Consul, Ting Wang
          </p>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
