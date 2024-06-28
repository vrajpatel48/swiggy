import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "./Card";
import Categorydata from "./Categorydata";

export const Toprest = () => {
  const [slide, setslide] = useState(0);

  const nextslide = () => {
    if (Categorydata.length - 4 === slide) return false;
    setslide(slide + 1);
  };
  const prevslide = () => {
    if (Categorydata === 0) return false;
    setslide(slide - 1);
  };
  return (
    <div className="md:px-28 px-4 ">
      <div className="flex justify-between p-6">
        <div className="md:text-3xl text-xl font-bold">
          Top restaurant chains in Ahmedabad
        </div>
        <div className="flex gap-3">
          <div
            className="w-[35px] h-[35px] bg-[#e2e2e7] rounded-full flex justify-center items-center cursor-pointer  "
            onClick={prevslide}
          >
            <FaArrowLeft />
          </div>
          <div
            className="w-[35px] h-[35px] bg-[#e2e2e7] rounded-full flex justify-center items-center cursor-pointer"
            onClick={nextslide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden gap-8">
        {Categorydata.map((Categorydata, i) => {
          return (
            <div
              className="duration-500"
              style={{ transform: `translatex(-${slide * 100}%)` }}
            >
              <Card {...Categorydata} key={i} />
            </div>
          );
        })}
      </div>
      <hr className="my-6 mt-9 border-[1px]" />
    </div>
  );
};
