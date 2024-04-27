import React from "react";
import logo from "../images/Bitmaplogo.png";
import bluebg from "../images/Pathbg.png";
import downbg from "../images/Pathmain-bg-bottom.png";
import banner from "../images/Asset 1@4xbanner.png";

const Landing = () => {
  return (
    <div className="relative min-h-[800px] bg-[#e7f1f2]">
      <header className=" h-[120px]  flex items-center justify-between">
        <div className="w-[180px] h-[80px] ml-5 ">
          <img src={logo} alt="logo" />
        </div>
        <div className="z-10">
          <ul className="flex items-center font-Mulish text-[20px] cursor-pointer ">
            <li
              className="p-5 hover:text-[#fff]"
              onClick={() => {
                const elem = document.querySelector("#service-view");
                elem.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
            >
              Services
            </li>
            <li
              className="p-5 hover:text-[#fff]"
              onClick={() => {
                const elem = document.querySelector("#aboutus-view");
                elem.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "nearest",
                });
              }}
            >
              About
            </li>
            <li
              className="p-5 hover:text-[#fff]"
              onClick={() => {
                const elem = document.querySelector("#blog-view");
                elem.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "nearest",
                });
              }}
            >
              Blogs
            </li>

            <li
              className="p-5 hover:text-[#fff]"
              onClick={() => {
                const elem = document.querySelector("#casestudy-view");
                elem.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
            >
              Case Studies
            </li>
            <li className="p-5 ">
              <button className="bg-[#FF6400] py-[14px] px-[23px] rounded-[30px] text-[#fff]  hover:opacity-[0.6]">
                Contact us
              </button>
            </li>
          </ul>
        </div>
      </header>

      <div className="p-[50px]">
        <div className="p-[50px]">
          <h1 className="w-[439px] h-[136px] font-Mulish text-[47px] font-[700] leading-[59px] tracking-[0.16px]">
            How much could you save?
          </h1>
          <p className="w-[485px] h-[69px] font-Mulish text-[18px] font-[400] leading-[23px] tracking-[0.16px] ">
            Answer the questions below to get a fixed price quotation for us to
            take your accountancy hassles away from you.
          </p>
        </div>

        <div className="pl-[50px] w-[612px] h-[207px]">
          <div className=" bg-[#fff] rounded-lg p-[20px] shadow-md z-[5] absolute">
            <p className="w-[538px] font-Mulish font-[600] text-[28px] leading-[35px] tracking-[0.16px] text-center ">
              Is your turnover expected to be more than £85k?
            </p>

            <div className="flex items-center justify-center p-[10px] gap-6 text-[#fff] font-Mulish font-[700] text-[20px] leading-[24px] tracking-[0.16px] ">
              {" "}
              <button className="w-[98px] h-[45px] bg-[#FF6400] rounded-[30px] hover:opacity-[0.6]">
                Yes
              </button>
              <button className="w-[98px] h-[45px] bg-[#FF6400] rounded-[30px] hover:opacity-[0.6]">
                No
              </button>
            </div>
          </div>
        </div>

        <div className="pl-[50px] font-Mulish text-[16px] font-[600] leading-[20px] tracking-[0.16px]">
          {" "}
          <p>Takes less than 30 seconds</p>
        </div>
      </div>
      <img
        src={bluebg}
        className="w-[1190px] h-[800px] absolute top-0 right-0 z-[2] "
        alt="bgblue"
      />
      <img
        src={downbg}
        alt="bottombg"
        className="w-[923px] h-[606px] absolute bottom-0 right-0"
      />
      <img
        src={banner}
        alt="banner"
        className="w-[622px] h-[560px] absolute top-[150px] right-[30px] z-[5]"
      />
    </div>
  );
};

export default Landing;
