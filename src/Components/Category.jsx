import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Data from "./Data";

const Category = () => {
  const [slide, setslide] = useState(0);

  const nextslide = () => {
    console.log(Data.length);
    if (Data.length - 6 === slide) return false;
    setslide(slide + 2);
  };
  const prevslide = () => {
    if (Data === 0) return false;
    setslide(slide - 2);
  };
  return (
    <div className="md:px-20 px-4">
      <div className="flex justify-between p-6">
        <div className="md:text-3xl text-xl font-bold">
          What's on your mind?
        </div>
        <div className="flex gap-3">
          <div
            className="w-[35px] h-[35px] bg-[#e2e2e7] rounded-full flex justify-center items-center cursor-pointer"
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
      <div className="flex gap-3 overflow-hidden z-0">
        {Data.map((item) => (
          <div
            key={item.path}
            className="w-[170px]  shrink-0 duration-500"
            style={{ transform: `translatex(-${slide * 100}%)` }}
          >
            <img src={item.image} alt={item.path} />
          </div>
        ))}
      </div>
      <hr className="my-6 border-[1px]" />
    </div>
  );
};

export default Category;
