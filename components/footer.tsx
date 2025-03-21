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
import { FaCandyCane, FaSnowflake, FaSun } from "react-icons/fa6";

export default function Footer() {
  return (
    <div
      style={{ direction: "ltr" }}
      className="w-full px-7 bg-[#FAF7E9] dark:bg-darkPrimary dark:text-darkText shadow-black text-footer shadow-2xl font-[Poppins]"
    >
      <div className="py-16 flex flex-row justify-between flex-wrap gap-20 text-left">
        {/* Logo and Contact */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center text-4xl font-serif text-footer dark:text-white">
            Mr.Coffee <FiCoffee size={22} className="ml-2" />
          </div>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/share/16DbGwkWmT/">
              <FaFacebook className="text-[#1877F2] text-3xl cursor-pointer dark:text-white" />
            </a>
            <a href="https://www.instagram.com/mr.coffee.homs/">
              <FaInstagram className="text-[#E1306C] text-3xl cursor-pointer dark:text-white" />
            </a>
          </div>
          <div className="flex items-center gap-2 text-2xl text-gray dark:text-darkText">
            <MdCall size={22} className="text-footer dark:text-white" />
            0941802602
          </div>
        </div>
        
        {/* Categories */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center text-4xl font-serif text-footer dark:text-white">
            <AiFillProduct size={22} className="mr-2" /> Categories
          </div>
          <ul className="space-y-2 text-gray dark:text-darkText">
            <li className="flex items-center gap-3"><FaSnowflake size={18} /> Cold drinks</li>
            <li className="flex items-center gap-3"><FaSun size={18} /> Hot drinks</li>
            <li className="flex items-center gap-3"><FiCoffee size={18} /> Coffee</li>
            <li className="flex items-center gap-3"><FaCandyCane size={18} /> Candies</li>
          </ul>
        </div>
        
        {/* Location & Business Hours */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center text-4xl font-serif text-footer dark:text-white">
            <FaMapMarkerAlt size={22} className="mr-2" /> Location
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-footer dark:text-white" />
            <span className="text-gray dark:text-darkText">Syria, Homs, Al Ghouta Main Street</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBusinessTime className="text-footer dark:text-white" />
            <span className="text-gray dark:text-darkText">Business Hours: 9:00 AM - 1:00 AM</span>
          </div>
        </div>
      </div>
      {/* Footer Tagline */}
      <p className=" font-serif text-footer mt-6 text-center text-nowrap dark:text-white flex justify-center items-center gap-2">
        <TfiWorld  size={20}/> Best Coffee Shop In The Entire World
      </p>
    </div>
  );
}
