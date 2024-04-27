import React from "react";
import Blog from "./Blog";
import Testamonialcard from "./Testamonialcard";

const Testamonial = () => {
  return (
    <div className="bg-testamonialBG" id="casestudy-view">
      <div className="p-[150px] w-[1084px]  z-10 ">
        <div>
          <p className="font-Mulish font-[700] text-[47px] leading-[59px] tracking-[0.16px] text-[#232323] ">
            Testimonials
          </p>
        </div>
        <div className="flex w-[1084px] justify-between mt-[80px]">
          <Testamonialcard />
          <Testamonialcard />
        </div>
        <Blog />
      </div>
    </div>
  );
};

export default Testamonial;
