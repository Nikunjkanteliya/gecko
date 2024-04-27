import React from "react";

const Blogcard = ({
  image_url,
  name,
  createdAt,
  writer_name,
  short_description,
}) => {
  return (
    <div className="w-[332px] h-[385px]">
      <div className="w-[332px] h-[200px]">
        <img
          src={image_url}
          alt="sds"
          className="w-[100%] h-[100%] rounded-[1rem]"
        />
      </div>
      <div className="font-Mulish font-[400] text-[20px] leading-[28px] text-[#232323] flex flex-col gap-[10px] mt-[10px]">
        <p>{name}</p>
        <p className="font-Mulish font-[400] text-[14px] leading-[14px] ">
          <span className="text-[#232323]">
            {new Date(createdAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span> by </span>
          <span className="text-[#D0021B]"> {writer_name}</span>
        </p>

        <p className="font-Mulish font-[400] text-[16px] leading-[24px] text-[#606060]">
          {short_description}
        </p>
      </div>
    </div>
  );
};

export default Blogcard;
