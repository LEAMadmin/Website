import React from "react";
import PilotProject from "/images/landing/products/PilotProject";
import Demex from "/images/landing/products/Demex";
import TemperatureMonitoring from "/images/landing/products/TemperatureMonitoring";
import ProductButton from "./ProductButton";

const Products = () => {
  return (
    <div>
      <div className="w-full justify-center hidden md:flex">
        <div className="xl:px-40 mb-40 md:px-14 2xl:max-w-[1500px]">
          <div className="flex items-center h-[calc(15vh-5px)] justify-between text-2xl w-full">
            <p className="w-full text-center">DEMEX</p>
            <p className="w-full text-center">Pilot projects and validation</p>
            <p className="w-full text-center">Temperature Monitoring</p>
          </div>
          <div className="flex justify-between w-full mb-14 mt-8">
            <div className="flex w-full mx-8">
              <div className="min-h-full w-[2px] bg-white mr-8"></div>
              <p className="text-xl">
                DEMEX is our solution for completely new possibilities in
                additive manufacturing. Using light to heat the material, we
                enable unprecedented mechanical performance, even with tough to
                print materials. And because it's not a laser, it's safe and
                easy to integrate.
              </p>
            </div>
            <div className="flex w-full mr-8">
              <div className="min-h-full w-[2px] bg-white mr-8"></div>
              <p className="text-xl">
                To validate applications that might profit from our technology,
                pilot projects can be carried out on our facilities. This allows
                us to demonstrate the new possibilities offered by our systems
                with zero risk for the customer.
              </p>
            </div>
            <div className="flex w-full ml-8">
              <div className="min-h-full w-[2px] bg-white mr-8"></div>
              <p className="text-xl">
                Our Temperature Monitoring solution detects the temperature at
                every position of the part and controls the parameters of your
                3D printer accordingly. Additionally, the data can be logged to
                generate a digital twin of the part.
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex justify-center items-center p-8 w-full text-center">
              <Demex />
            </div>
            <div className="flex justify-center items-center p-8 w-full text-center">
              <PilotProject />
            </div>
            <div className="flex justify-center items-center p-8 w-full text-center">
              <TemperatureMonitoring />
            </div>
          </div>
          <div className="flex justify-between mt-10">
            <div className="w-full text-center">
              <ProductButton href="demex" />
            </div>
            <div className="w-full text-center">
              <ProductButton href="pilot-project" />
            </div>
            <div className="w-full text-center">
              <ProductButton href="temperature-monitoring" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full justify-center md:hidden">
        <div className="text-center mb-16">
          <div>
            <div className="h-[calc(15vh-5px)] flex items-center">
              <p className="w-full text-center font-bold text-2xl">DEMEX</p>
            </div>
            <div className="flex px-8 mt-6">
              <div className="min-h-full w-[10px] bg-white mr-8"></div>
              <p className="text-left text-xl leading-8">
                DEMEX is our solution for completely new possibilities in
                additive manufacturing. Using light to heat the material, we
                enable unprecedented mechanical performance, even with tough to
                print materials. And because it's not a laser, it's safe and
                easy to integrate.
              </p>
              <div className="w-full min-h-[60px]"></div>
            </div>
          </div>
          <div className="mb-8 p-8 flex justify-center">
            <Demex />
          </div>
          <ProductButton href="demex" />
        </div>
        <div className="text-center mb-16">
          <div>
            <div className="h-[calc(15vh-5px)] flex items-center">
              <p className="w-full text-center font-bold text-2xl">
                Pilot projects and validation
              </p>
            </div>
            <div className="flex px-8 mt-6">
              <div className="min-h-full w-[10px] bg-white mr-8"></div>
              <p className="text-left text-xl leading-8">
                To validate applications that might profit from our technology,
                pilot projects can be carried out on our facilities. This allows
                us to demonstrate the new possibilities offered by our systems
                with zero risk for the customer.
              </p>
              <div className="w-full min-h-[60px]"></div>
            </div>
          </div>
          <div className="mb-8 p-8 flex justify-center">
            <PilotProject />
          </div>
          <ProductButton href="pilot-project" />
        </div>
        <div className="text-center mb-16">
          <div>
            <div className="h-[calc(15vh-5px)] flex items-center">
              <p className="w-full text-center font-bold text-2xl">
                Temperature Monitoring
              </p>
            </div>
            <div className="flex px-8 mt-6">
              <div className="min-h-full w-[10px] bg-white mr-8"></div>
              <p className="text-left text-xl leading-8">
                Our Temperature Monitoring solution detects the temperature at
                every position of the part and controls the parameters of your
                3D printer accordingly. Additionally, the data can be logged to
                generate a digital twin of the part.
              </p>
              <div className="w-full min-h-[60px]"></div>
            </div>
          </div>
          <div className="mb-8 p-8 flex justify-center">
            <TemperatureMonitoring />
          </div>
          <ProductButton href="temperature-monitoring" />
        </div>
      </div>
    </div>
  );
};

export default Products;
