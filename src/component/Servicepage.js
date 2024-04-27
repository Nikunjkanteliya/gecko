import React, { useState } from "react";
import audit from "../images/audit.png";
import budget from "../images/001-budget.png";
import payroll from "../images/payroll.png";
import softtrain from "../images/softtraining.png";
import tax from "../images/tax.png";
import managment from "../images/manage.png";
import Servicecard from "./Servicecard";

const Servicepage = () => {
   const [servicepageData] = useState([
    {
      img: audit,
      head: "Audit & Account",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      img: budget,
      head: "Budget & Projections",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      img: payroll,
      head: "Payroll & Bookkeeping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      img: softtrain,
      head: "Software Training & IT",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      img: tax,
      head: "Tax planning & Returns",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      img: managment,
      head: "Management Information",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
  ]);

  return (
    <div className="px-[100px]" id="service-view">
      <div className="w-[439px] h-[136px] font-Mulish text-[47px] font-[700] leading-[59px] tracking-[0.16px]">
        {" "}
        <p> Service</p>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        {servicepageData.map((info) => {
          return (
           <Servicecard {...info} key={Math.random()}/>
          );
        })}
      </div>
    </div>
  );
};

export default Servicepage;
