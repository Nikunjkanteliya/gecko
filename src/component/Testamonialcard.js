import React from "react";
import quotesdown from "../images/quotesdown.png";
import quotesup from "../images/quotesup.png";
import testamonialprofilePic from "../images/testamonialCardpic.png";

const Testamonialcard = () => {
  return (
    <div className="shadow-lg bg-[#fff] p-[20px] w-[502px]   rounded-xl relative">
      <div className="flex items-center gap-[10px]">
        {" "}
        <img src={testamonialprofilePic} alt="testamonialprofilePic" />{" "}
        <p className="font-Mulish font-[700] text-[18px] leading-[28px] tracking-[0.16px] text-[#000000] ">
          Josh brollins
        </p>
      </div>
      <div className="mt-[20px]">
        <p className="font-Mulish font-[400] text-[16px] leading-[32px] tracking-[0.16px] text-[#5E5E5E] ">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua
        </p>
      </div>
      <img
        src={quotesdown}
        alt="quotesdown"
        className="absolute right-[20px] bottom-[-15px]"
      />
      <img src={quotesup} alt="quotesup" className="absolute top-[-15px]" />
    </div>
  );
};

export default Testamonialcard;
