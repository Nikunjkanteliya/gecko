import React from "react";
import { servicepageData } from "../constants/constants";
import Servicecard from "./Servicecard";

const Servicepage = () => {
  return (
    <div className="px-[100px]" id="service-view">
      <div className="w-[439px] h-[136px] font-Mulish text-[47px] font-[700] leading-[59px] tracking-[0.16px]">
        {" "}
        <p> Service</p>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        {servicepageData.map((info) => {
          return <Servicecard {...info} key={Math.random()} />;
        })}
      </div>
    </div>
  );
};

export default Servicepage;
