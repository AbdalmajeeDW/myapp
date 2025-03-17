"use client";
import Card from "../components/card";
import { useEffect, useState, useRef } from "react";
import logo from "../public/logo_MrCoffe.png";
import Image from "next/image";
import { BiHomeAlt2 } from "react-icons/bi";
import { FaCandyCane } from "react-icons/fa6";
import { FaSnowflake } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { FaSun } from "react-icons/fa6";
import Footer from "../components/footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [showNav, setShowNav] = useState(false);
  const [title, setTitle] = useState();
  const productsRef = useRef(null);

  const tabs = [
    { id: "candies", title: "الحلويات", icon: <FaCandyCane size={22} /> },
    { id: "hotDrink", title: "المشروبات الساخنة", icon: <FaSun size={22} /> },
    {
      id: "iceDrink",
      title: "المشروبات الباردة",
      icon: <FaSnowflake size={22} />,
    },
    { id: "coffee", title: "اصناف القهوة", icon: <FiCoffee size={22} /> },
    { id: "home", title: "الرئيسية", icon: <BiHomeAlt2 size={27} /> },
  ];

  const [categoie, setCategoie] = useState<string>("home");
  const [splash, setSplash] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 5000);

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProducts = () => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-[#2E2E2E] to-fontHero font-[Poppins]">
      {splash === false ? (
        <>
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="relative w-52 h-52 bg-white/10 backdrop-blur-lg p-2 rounded-3xl shadow-inner flex items-center justify-center border border-white/20">
              <Image
                alt="Mr.Coffee Logo"
                width={140}
                height={140}
                src="/logo.png"
                className="rounded-lg object-contain animate-pulse w-40 h-40 md:w-60 md:h-60"
                style={{
                  filter: "drop-shadow(0px 4px 10px rgba(255, 255, 255, 0.2))",
                }}
              />
            </div>

            <h1 className="text-white text-3xl font-bold mt-6 font-[Poppins]">
              مرحبًا بك في Mr. Coffee
            </h1>
            <p className="text-gray-300 mt-2 text-lg text-center text-white">
              استكشف أصنافنا المميزة وتمتع بأفضل تجربة قهوة 🍂
            </p>
          <div id="title"></div>

            <button
              onClick={scrollToProducts}
              className="mt-6 bg-secondryColor hover:bg-shadowCard text-white py-2 px-6 rounded-full text-lg font-medium shadow-lg transition-all hover:bg-opacity-90"
            >
              استكشاف القائمة ☕
            </button>

          </div>

          <div
            className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 transition-all duration-500  pb-3 ${
              showNav ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-6 px-6  backdrop-blur-md shadow-lg rounded-full p-1 border border-white/10">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setCategoie(tab.id);
                  }}
                  className={`p-3 rounded-full cursor-pointer transition-all ${
                    activeTab === tab.id
                      ? "bg-secondryColor text-white shadow-md"
                      : "text-gray hover:text-shadowCard"
                  }`}
                >
                 <a href="#title"> {tab.icon}</a>
                </div>
              ))}
            </div>
          </div>
          <div className="" >
            <h1 className="px-6 pt-10 font-bold text-3xl text-gray flex items-center gap-2">
              <div className="text-titelCard" >
                {tabs.find((tab) => tab.id === activeTab)?.title}
              </div>
              <div className="text-shadowCard pb-1">
                {tabs.find((tab) => tab.id === activeTab)?.icon}
              </div>
            </h1>
          </div>
          <div ref={productsRef} className="mt-10 mb-10">
            <Card categories={categoie} />
          </div>
          <Footer />
        </>
      ) : (
        <div className="h-full z-40 fixed w-full bg-primaryColor flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Splash Logo"
            width={140}
            height={140}
            className="animate-pulse w-40 h-40 md:w-60 md:h-60"
          />
        </div>
      )}
    </div>
  );
}
