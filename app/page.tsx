"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { BiHomeAlt2 } from "react-icons/bi";
import { FaCandyCane, FaSnowflake, FaSun } from "react-icons/fa6";
import Footer from "../components/footer";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import Card from "../components/card";
import { IoClose } from "react-icons/io5";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [showNav, setShowNav] = useState(false);
  const [categoie, setCategoie] = useState<string>("home");
  const [showSubmenu, setShowSubmenu] = useState(false);
  const productsRef = useRef<HTMLDivElement | null>(null);
  const [splash, setSplash] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  }, []);

  const tabs = [
    { id: "candies", title: "الحلويات", icon: <FaCandyCane size={20} /> },
    { id: "hotDrink", title: "المشروبات الساخنة", icon: <FaSun size={20} /> },
    {
      id: "iceDrink",
      title: "المشروبات الباردة",
      icon: <FaSnowflake size={20} />,
      subCategories: ["Coldchocolate", "Summer", "milkCheck"],
    },
    { id: "home", title: "الرئيسية", icon: <BiHomeAlt2 size={25} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen bg-gradient-to-br from-[#2E2E2E] dark:from-[#8c5c3e] to-fontHero font-[Poppins]">
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
              />
            </div>
            <h1 className="text-white text-3xl font-bold mt-6">
              مرحبًا بك في Mr. Coffee
            </h1>
            <p className="text-white mt-2 text-lg text-center">
              استكشف أصنافنا المميزة وتمتع بأفضل تجربة قهوة 🍂
            </p>
            <button
              onClick={scrollToProducts}
              className="mt-6 animate-bounce bg-secondryColor hover:bg-shadowCard text-white py-2 px-6 rounded-full text-lg font-medium shadow-lg transition-all"
            >
              استكشاف القائمة ☕
            </button>
          </div>

          {/* زر الصعود للأعلى */}
          <div
            className={`cursor-pointer w-8 h-8 right-3 bg-titelCard dark:bg-white dark:text-darkPrimaryColor flex items-center fixed bottom-44 justify-center z-50 rounded-lg shadow-lg text-white ${
              showNav ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <a href="#">
              <MdKeyboardDoubleArrowUp size={20} />
            </a>
          </div>

          {/* قائمة الأصناف */}
          <div
            className={`fixed bottom-5 left-1/2 z-50 transform -translate-x-1/2 transition-all duration-500 pb-3 ${
              showNav ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex relative items-center gap-4 px-4 dark:bg-darkPrimary bg-white shadow-lg rounded-full p-1 border border-white/10">
              {tabs.map((tab) => (
                <div key={tab.id} className="relative">
                  <div
                    onClick={() => {
                      if (tab.id === "iceDrink") {
                        setShowSubmenu(true);
                      } else {
                        setActiveTab(tab.id);
                        setCategoie(tab.id);
                        setShowSubmenu(false);
                      }
                    }}
                    className={`p-3 rounded-full cursor-pointer transition-all ${
                      activeTab === tab.id ||
                      (tab.id === "iceDrink" && tab.subCategories?.includes(categoie))
                        ? "bg-secondryColor text-white shadow-md"
                        : "text-gray dark:text-white hover:text-shadowCard"
                    }`}
                  >
                    {tab.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* قائمة الفئات الفرعية */}
          {showSubmenu && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white dark:bg-darkPrimaryColor shadow-xl p-6 rounded-lg relative w-80">
                <button
                  onClick={() => setShowSubmenu(false)}
                  className="absolute top-2 left-2 text-gray-600 dark:text-white hover:text-red-500"
                >
                  <IoClose size={24} />
                </button>
                <h3 className="text-xl font-bold text-center mb-4 dark:text-white">
                  اختر نوع المشروب البارد
                </h3>
                <div className="flex flex-col gap-2">
                  {tabs
                    .find((tab) => tab.id === "iceDrink")
                    ?.subCategories?.map((sub) => (
                      <div
                        key={sub}
                        className={`py-2 text-gray-800 dark:text-white cursor-pointer text-center px-6 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded ${
                          categoie === sub ? "bg-secondryColor text-white" : ""
                        }`}
                        onClick={() => {
                          setCategoie(sub);
                          setActiveTab("iceDrink");
                          setShowSubmenu(false);
                        }}
                      >
                        {sub === "Coldchocolate"
                          ? "قهوة باردة"
                          : sub === "milkCheck"
                          ? "ميلك شيك"
                          : "مشروب صيفي"}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {/* عنوان القسم */}
          <div className="px-6 pt-10 font-bold text-3xl dark:text-white text-gray flex items-center gap-2">
            <div className="text-titelCard dark:text-white">
              {tabs.find((tab) => tab.id === categoie)?.title || categoie === "Coldchocolate"
                          ? "قهوة باردة"
                          : categoie === "milkCheck"
                          ? "ميلك شيك"
                          : "مشروب صيفي"}
            </div>
            <div className="text-shadowCard pb-1 dark:text-white">
              {tabs.find((tab) => tab.id === activeTab)?.icon}
            </div>
          </div>

          {/* عرض الأصناف */}
          <div ref={productsRef} className="mt-10 mb-10">
            <Card categories={categoie} />
          </div>

          <Footer />
        </>
      ) : (
        <div className="h-full dark:bg-darkPrimaryColor bg-white z-40 fixed w-full flex items-center justify-center">
          <Image src="/logo.png" alt="Splash Logo" width={140} height={140} className="animate-bounce w-40 h-40 md:w-60 md:h-60" />
        </div>
      )}
    </div>
  );
}