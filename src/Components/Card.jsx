import React from "react";
import { IoMdStar } from "react-icons/io";

export default function Card(Categorydata) {
  return (
    <div className="hover:scale-95 group cursor-pointer duration-200 mt-2">
      <div className="md:w-[270px] w-[200px] shrink-0 grow ">
        <div className="h-[182px] rounded-[15px] overflow-hidden relative">
          <img
            src={Categorydata.image}
            alt=""
            className="object-cover w-full h-full "
          />
          <div className="image-overlay absolute h-full w-full top-0 flex items-end text-[25px] font-bold text-white p-2 tracking-tighter">
            {Categorydata.offer}
          </div>
        </div>
        <div className="text-nowrap overflow-hidden flex flex-col gap-[2.5px] ">
          <span className="text-xl font-semibold">{Categorydata.title}</span>
          <div className="flex gap-1 font-semibold text-xl">
            <IoMdStar className="text-green-600 mt-1 " />
            {Categorydata.rating}
            <span className="pl-1">
              {" "}
              {Categorydata.minTime + "-" + Categorydata.maxTime + "mins"}
            </span>
          </div>
          <div className="flex flex-col  ">
            <span>{Categorydata.name}</span>
            <span> {Categorydata.place}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
