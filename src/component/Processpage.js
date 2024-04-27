import React from "react";
import processdesign from "../images/processdesign.png";
import { stepOne, stepTwo, stepthree } from "../constants/constants";

const Processpage = () => {
  return (
    <div className="px-[150px] py-[50px] relative">
      <div className="font-Mulish font-[700] text-[47px] leading-[59px] tracking-[0.16px]">
        <img
          src={processdesign}
          alt="processdesign"
          className="absolute left-[-50px] top-[-250px] w-[566px] "
        />
        <p> Our Process</p>
      </div>
      <div className="flex items-center gap-[100px]">
        {stepOne}
        {stepTwo}
        {stepthree}
      </div>
    </div>
  );
};

export default Processpage;
