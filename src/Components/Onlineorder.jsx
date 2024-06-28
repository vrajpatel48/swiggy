import React from "react";
import Categorydata from "./Categorydata";
import Card from "./Card";

export default function Onlineorder() {
  return (
    <div className="md:px-24 px-4 mx-auto">
      <div className=" my-8 ">
        <div className="md:text-3xl text-xl font-bold py-5">
          Restaurants with online food delivery in Ahmedabad
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4  sm:grid-cols-3 grid-cols-1 gap-9 ">
          {Categorydata.map((Categorydata, i) => {
            return (
              <div className="  ">
                <Card {...Categorydata} key={i} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
