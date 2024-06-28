import React, { useState } from "react";

import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosHelpBuoy } from "react-icons/io";

import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [toogle, settoogle] = useState(false);

  const showSidemenu = () => {
    settoogle(true);
  };

  const hideSidemenu = () => {
    settoogle(false);
  };

  const link = [
    {
      image: <IoSearch />,
      name: "search",
    },
    {
      image: <BiSolidOffer />,

      name: "offer",
      sup: "new",
    },
    {
      image: <IoIosHelpBuoy />,
      name: "help",
    },
    {
      image: <FaUser />,
      name: "sign in",
    },
    {
      image: <FaShoppingCart />,
      name: "cart",
    },
  ];

  return (
    <>
      <div
        className="black-overlay z-10 h-full w-full fixed"
        onClick={hideSidemenu}
        style={{
          opacity: toogle ? 1 : 0,
          visibility: toogle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="md:w-[30dvw] w-full h-full bg-white absolute duration-[400ms] z-10"
          style={{
            left: toogle ? "0%" : "-105%",
          }}
        >
          <div className="flex flex-col p-12 gap-6">
            <RxCross2
              onClick={hideSidemenu}
              className="text-2xl cursor-pointer"
            />

            <div>
              <input
                type="text"
                placeholder="Search for area,street name..."
                className="border-[2px] p-4 md:w-[23dvw] w-64 outline-none focus:caret-[#fc8019] focus:drop-shadow-3xl"
              />
            </div>
            <div className="border-[2px] md:w-[23dvw] w-64 p-4 text">
              <FaLocationCrosshairs className="inline mr-4 " />
              <span className="font-semibold">Get current location </span>
              <br />
              <span className="pt-5 pl-8">using gps</span>
            </div>
          </div>
        </div>
      </div>
      <header className="shadow-xl p-6">
        <div className="   flex items-center">
          <div className="w-[100px]">
            <img
              src="images/swiggylogo.png"
              alt=""
              className="w-full hover:scale-110 cursor-pointer hover:duration-100"
            />
          </div>
          <div className="">
            <span className="border-b-2 border-black text-nowrap font-bold">
              Nikol{" "}
            </span>
            Ahmedabad, Gujarat, India
            <RxCaretDown
              onClick={showSidemenu}
              className="inline font-bold text-2xl text-[#fc8019] cursor-pointer duration-500"
            />
          </div>

          <div className="flex list-none gap-10 ml-auto font-semibold    text-[18px]">
            {link.map((link, index) => {
              return (
                <li
                  key={index}
                  className="md:flex text-nowrap items-center hover:text-[#fc8019] cursor-pointer hidden md:visible gap-2"
                >
                  {link.image}
                  {link.name}
                  <sup className="text-[#fc8019]"> {link.sup}</sup>
                </li>
              );
            })}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
