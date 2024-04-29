import React, { useEffect, useState } from "react";
import logo from "../images/Bitmaplogo.png";
const Footer = () => {
  const [footerData, setfooterData] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Fetch the collection
        const collectionResponse = await fetch(
          "https://api.postman.com/collections/21192250-a50e1277-1ba5-4391-8937-80b388c049d9?access_key=PMAT-01HEAST02Z383GF562ABYFR5RX"
        );
        if (!collectionResponse.ok) {
          throw new Error("Failed to fetch collection");
        }
        const collectionData = await collectionResponse?.json();

        // Extract the environment variables
        let variables = collectionData?.collection?.variable?.reduce(
          (acc, variable) => {
            acc[variable.key] = variable?.value;
            return acc;
          },
          {}
        );

        // Find the request for "Get All Blogs"
        const getAllBlogsRequest = collectionData?.collection?.item?.find(
          (item) => item?.name === "Get Settings"
        )?.request;

        // Replace {{url}} with the actual URL from environment variables
        let apiUrl = getAllBlogsRequest.url.raw.replace(
          "{{url}}",
          variables?.url
        );

        // Fetch data from the endpoint
        const blogsResponse = await fetch(apiUrl);
        if (!blogsResponse.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const blogsData = await blogsResponse?.json();

        // Set fetched blogs data to state
        setfooterData(blogsData?.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchBlogs();
  }, []);

  return footerData.length === 0 ? null : (
    <div className="px-[150px] bg-[#E7F1F2] pb-[50px]  pt-[150px] flex flex-col gap-[100px]">
      <div className="flex items-center justify-between">
        <div className="w-[50%] font-Mulish font-[700] text-[22px] leading-[32px]">
          <p className=" text-[#232323] w-[433px]">
            Tagline will go here. Lorem ipsum d oler sit amet…
          </p>
          <p className="text-[#00D5F8] pt-[20px]">{footerData.inquiry_mail}</p>
        </div>
        <div className="flex items-start justify-evenly w-[50%] border-l border-[#90A4AE]">
          <div>
            <p className="font-Mulish font-[600] text-[13px] leading-[24px] text-[#232323]">
              Address
            </p>

            <p className="font-Mulish font-[400] text-[15px] leading-[30px] text-[#606060] max-w-[166px]">
              {footerData.address}
            </p>
          </div>
          <div>
            <p className="font-Mulish font-[600] text-[13px] leading-[24px] text-[#232323]">
              Contacs
            </p>
            <p className="font-Mulish font-[400] text-[15px] leading-[30px] text-[#606060]">
              <span> {footerData.contact_mail}</span> <br />
              <span>{footerData.contact_no}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="w-[135px] h-[60px]">
          <img src={logo} alt="footerlogo" />
        </div>
        <div>
          <ul className="w-[360px] h-[24px] flex gap-[25px] font-Mulish font-[600] text-[15px] leading-[24px] text-[#606060]">
            <li
              className="hover:text-[#FF6400] cursor-pointer"
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
              className="hover:text-[#FF6400] cursor-pointer"
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
              className="hover:text-[#FF6400] cursor-pointer"
              onClick={() => {
                const elem = document.querySelector("#form-view");
                elem.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "nearest",
                });
              }}
            >
              Contact
            </li>
            <li
              className="hover:text-[#FF6400] cursor-pointer"
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
          </ul>
        </div>

        <div className="font-Mulish font-[400] text-[12px] leading-[16px] text-[#606060]">
          <p>￼© 2022. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
