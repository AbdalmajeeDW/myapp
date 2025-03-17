"use client";
import React from "react";
import {
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaBusinessTime,
} from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { FiCoffee } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { AiFillProduct } from "react-icons/ai";
import { FaCandyCane } from "react-icons/fa6";
import { FaSnowflake } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
export default function Footer() {
  return (
    <div style={{direction:'ltr'}} className="bg-[#FAF7E9] shadow-black direction  text-footer  px-5  shadow-2xl  font-[Poppins]">
      <div className=" md:grid  pt-16 pb-16 md:grid-cols-2  xl:grid xl:grid-cols-3 lg:grid  lg:grid-cols-3 sm:grid sm:grid-cols-1 sm:gap-14  xs:grid xs:justify-items-center md:justify-items-start xs:grid-cols-1 lg:gap-32 px-10 ">
        <div className="flex flex-col justify-start items-start lg:items-start md:items-start xs:items-center  gap-2">
          <div className="flex items-center justify-start gap-2 text-4xl font-extrabold text-footer">
            Mr.Coffee<FiCoffee size={22} /> 
          </div>
          <div className="flex gap-3 mt-2">
            <FaFacebook className="text-[#1877F2] text-3xl cursor-pointer" />
            <FaInstagram className="text-[#E1306C] text-3xl cursor-pointer" />
          </div>
          <div className="flex text-2xl items-center mt-2 gap-2 text-gray">
            <MdCall size={22} className="text-footer" /> 0941802602
          </div>
        </div>
        <div className="flex flex-col xs:mt-8 md:mt-0 sm:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 items-start lg:items-start xs:items-center gap-2 text-lg font-semibold">
          <div className="flex items-center gap-2 text-4xl font-extrabold text-footer">
            <AiFillProduct size={22} className="text-footer" /> Categories
          </div>
          <div className="flex items-center justify-center">
            <ul className="flex flex-col items-start justify-center text-gray">
              <li className="flex items-center gap-3"> <FaSnowflake size={18} className="text-footer" />Cold drinks </li>
              <li className="flex items-center gap-3"><FaSun size={18} className="text-footer" />Hot drinks</li>
              <li className="flex items-center gap-3"><FiCoffee size={18} className="text-footer" />Coffee</li>
              <li className="flex items-center gap-3"><FaCandyCane size={18} className="text-footer" />Candies</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-fit xs:mt-8 md:mt-0 sm:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 items-start justify-start lg:items-start xs:items-center md:items-start gap-2 text-lg font-semibold">
          <div className="flex items-center  gap-2 text-4xl font-extrabold text-footer">
            <FaMapMarkerAlt size={22} className="text-footer" /> Location
          </div>
          <div className="flex items-center  gap-2">
            <FaMapMarkerAlt className="text-footer" />
            <div className="text-gray">Syria, Homs, Al Ghouta Main Street</div>
          </div>
          <div className="flex items-center gap-2">
            <FaBusinessTime className="text-footer" />
            <div className="text-gray">Business Hours: 9:00 AM - 1:00 AM</div>
          </div>
        </div>
      </div>
      <p className="text-footer mt-2 flex items-center font-extrabold justify-center gap-2 text-lg text-center  ">
        <TfiWorld /> Best Coffee Shop In The Entire World
      </p>
    </div>
  );
}
