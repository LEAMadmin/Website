import React, { useState } from "react";
import Logo from "/images/navbar/Logo";
import Link from "next/link";
import Navlink from "./Navlink";
import Menu from "/images/navbar/Menu";
import Close from "/images/navbar/Close";
import NavFooter from "./NavFooter";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const slideMenuRight = (node) => {
    node.addEventListener("click", () => {
      document.getElementById("menu-mobile").style.transform =
        "translateX(-50%)";
    });
  };

  const slideMenuLeft = (node) => {
    node.addEventListener("click", () => {
      document.getElementById("menu-mobile").style.transform = "translateX(0%)";
    });
  };

  return (
    <div className="navbar hover:bg-[rgba(0,0,0,0.8)] transition-all ease-in navbar fixed w-full h-[120px] z-[100] bg-gradient-to-b from-black to-black/[0]">
      <div className="flex p-[60px] justify-between items-center w-full h-full 2xl:px-32">
        <Link href="/">
          <div className="cursor-pointer">
            <Logo />
          </div>
        </Link>
        <div>
          <ul className="relative invisible md:flex md:visible h-[120px]">
            <Navlink hideArrow text="Home" href="/" />
            <div className="nav-products relative cursor-pointer flex px-6 lg:px-9 xl:px-12 justify-between items-center bg-white/0 hover:bg-white/20 ease-in duration-200">
              <p className="text-white lg:text-xl">Products</p>
            </div>
            <div className="products-menu h-[120px] fixed left-0 top-0 w-full flex -z-50 duration-300 ease-in opacity-0 bg-[rgba(0,0,0,0.8)] justify-end items-center px-[60px] 2xl:px-32">
              <Navlink hideArrow text="DEMEX" href="/demex" />
              <Navlink hideArrow text="Pilot project" href="/pilot-project" />
              <Navlink
                hideArrow
                text="Temperature monitoring"
                href="/temperature-monitoring"
              />
            </div>
            <Navlink hideArrow text="Use cases" href="/use-cases" />
            <Navlink hideArrow text="Team" href="/team" />
            <Navlink hideArrow text="Contact" href="/contact" />
          </ul>
          <div
            onClick={handleNav}
            onKeyDown={handleNav}
            className="md:hidden cursor-pointer fixed flex right-0 top-0 items-center justify-end h-[120px] px-[60px] ml-[100px]"
          >
            <div>
              <Menu />
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-white/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#0B0B0B] ease-in duration-500"
              : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#0B0B0B] ease-in duration-500"
          }
        >
          <div className="p-10 flex w-full items-center justify-between">
            <Link href="/">
              <div>
                <Logo />
              </div>
            </Link>
            <div onClick={handleNav} className="cursor-pointer">
              <Close />
            </div>
          </div>
          <div className="py-10 h-[calc(100%-350px)] overflow-hidden">
            <div
              id="menu-mobile"
              className="h-full w-[200%] flex duration-300 ease-in"
            >
              <ul className="flex flex-col justify-center h-full w-full">
                <div className="w-full h-full">
                  <Navlink text="Home" href="/" />
                </div>
                <div
                  className="w-full h-full"
                  ref={(node) => {
                    if (!node) return;
                    slideMenuRight(node);
                  }}
                >
                  <Navlink text="Products" href="#" />
                </div>
                <div className="w-full h-full">
                  <Navlink text="Use cases" href="/use-cases" />
                </div>
                <div className="w-full h-full">
                  <Navlink text="Team" href="/team" />
                </div>
                <div className="w-full h-full">
                  <Navlink text="Contact" href="/contact" />
                </div>
              </ul>
              <ul className="flex flex-col justify-center h-full w-full">
                <div className="w-full h-full">
                  <Navlink text="DEMEX" href="/demex" />
                </div>
                <div className="w-full h-full">
                  <Navlink text="Pilot project" href="/pilot-project" />
                </div>
                <div className="w-full h-full">
                  <Navlink
                    text="Temperature monitoring"
                    href="/temperature-monitoring"
                  />
                </div>
                <div
                  className="w-full h-full"
                  ref={(node) => {
                    if (!node) return;
                    slideMenuLeft(node);
                  }}
                >
                  <Navlink text="Back" href="#" />
                </div>
              </ul>
            </div>
            <div className="fixed bottom-0 pl-10 pb-10">
              <ul>
                <NavFooter text="imprint" href="/legal/imprint" />
                <div className="w-full h-[40px] leading-[40px] text-white text-sm mx-2">
                  <a
                    target="_blank"
                    href="https://itrk.legal/MKo.99.GrN.html"
                    rel="noopener noreferrer"
                  >
                    Privacy policy
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
