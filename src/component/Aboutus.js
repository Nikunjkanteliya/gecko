import React from "react";
import aboutusbanner from "../images/aboutusBanner.png";
import aboutusbg from "../images/aboutusrectangel.png";

const Aboutus = () => {
  return (
    <div className="relative w-[1440px] h-[942px]" id="aboutus-view">
      <img
        src={aboutusbg}
        alt="aboutusbg"
        className="absolute top-[20px] right-[10px] w-[1440px] h-[942px]"
      />

      <div className="flex items-end justify-center z-10 absolute w-[100%] h-[100%] p-[150px]">
        <div className="w-[450px] flex flex-col gap-[20px] mb-[80px] ">
          <p className="font-Mulish text-[47px] font-[700] leading-[59px] tracking-[0.16px] text-[#232323] ">
            About us
          </p>
          <p className="font-Mulish text-[18px] font-[400] leading-[23px] tracking-[0.1px] text-[#606060]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
            sadipscing elit
          </p>
          <button className="bg-[#FF6400] py-[14px] px-[23px] rounded-[30px] text-[#fff] max-w-[250px] font-Mulish text-[20px] font-[500] hover:opacity-[0.6]">
            About us
          </button>
        </div>
        <div className="w-[643px] h-[400px]">
          <img src={aboutusbanner} alt="about-usbanner" />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
