/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { arrow } from "../constants/constants";
import Blogcard from "./Blogcard";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [isVisible, setisvisible] = useState(false);

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
        const variables = collectionData?.collection?.variable?.reduce(
          (acc, variable) => {
            acc[variable.key] = variable?.value;
            return acc;
          },
          {}
        );

        // Find the request for "Get All Blogs"
        const getAllBlogsRequest = collectionData?.collection?.item?.find(
          (item) => item?.name === "Get All Blogs"
        )?.request;

        // Replace {{url}} with the actual URL from environment variables
        const apiUrl = getAllBlogsRequest.url.raw.replace(
          "{{url}}",
          variables?.url
        );
        apiUrl.replace("http:", "");
        // Fetch data from the endpoint
        const blogsResponse = await fetch(apiUrl);
        if (!blogsResponse.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const blogsData = await blogsResponse?.json();

        // Set fetched blogs data to state
        setBlogs(blogsData?.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div
      className="w-[1084px] h-[504px] mt-[100px] "
      id="blog-view"
      style={{ overflow: isVisible ? "auto" : "hidden" }}
    >
      <div className="flex items-center justify-between">
        <p className="font-Mulish font-[700] text-[47px] leading-[59px] tracking-[0.16px] text-[#232323]">
          Blogs
        </p>
        <div
          className="font-Mulish font-[700] text-[22px] leading-[27px] tracking-[0.07px] text-[#3D5FDD] flex items-center gap-[10px] cursor-pointer"
          onClick={() => setisvisible(!isVisible)}
        >
          {isVisible ? "Hide" : "View All"} {arrow}
        </div>
      </div>
      <div className="flex flex-wrap gap-[25px] mt-[50px]">
        {blogs.length === 0
          ? null
          : blogs.map((items) => <Blogcard {...items} key={items.id} />)}
      </div>
    </div>
  );
};

export default Blog;
