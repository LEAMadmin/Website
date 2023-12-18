import React from "react";
import Link from "next/link";
import Arrow from "/images/navbar/Arrow";

const Navlink = (props) => {
  if (props.hideArrow) {
    return (
      <Link href={props.href}>
        <div className="h-full flex px-6 lg:px-9 xl:px-12 justify-between items-center bg-white/0 hover:bg-white/20 ease-in duration-200">
          <li className="text-white lg:text-xl">{props.text}</li>
        </div>
      </Link>
    );
  } else {
    return (
      <Link href={props.href}>
        <div className="flex h-full px-9 xl:px-12 justify-between items-center bg-white/0 hover:bg-white/20 ease-in duration-200">
          <li className="text-white text-xl">{props.text}</li>
          <div>
            <Arrow />
          </div>
        </div>
      </Link>
    );
  }
};

export default Navlink;
