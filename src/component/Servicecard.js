import React from "react";

const Servicecard = ({ img, head, desc }) => {
  return (
    <div className="w-[332px] h-[340px] flex items-center justify-center flex-col p-[25px] gap-[15px]">
      <div className="w-[80px]">
        {" "}
        <img src={img} alt="img1" />
      </div>

      <div className="font-Mulish text-[22px] font-[700] leading-[28px] tracking-[0.13px] text-[#232323]">
        {" "}
        {head}{" "}
      </div>

      <div className="font-Mulish text-[16px] font-[400] leading-[24px] tracking-[0.09px] text-[#606060] text-center">
        {" "}
        {desc}
      </div>
    </div>
  );
};

export default Servicecard;
