"use client";

import { useEffect, useState } from "react";
import { FiCoffee } from "react-icons/fi";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      localStorage.setItem("theme", "light");
    }
  }, []); 

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]); 

  return (
    <header className="px-28 bg-primaryColor shadow-shadowCard shadow-lg font-[Poppins] flex fixed z-20 flex-row items-center justify-between xs:px-4 h-20 w-full p-2 dark:bg-darkPrimary dark:text-darkText">
      {/* زر تبديل الوضع */}
      <div className="px-5 cursor-pointer" onClick={toggleTheme}>
        {theme === "dark" ? (
          <MdOutlineLightMode size={22} className="text-fontHero dark:text-white" />
        ) : (
          <MdOutlineDarkMode size={22} className="text-fontHero dark:text-white" />
        )}
      </div>

      {/* لوجو التطبيق */}
      <div className="px-5 flex flex-row justify-start items-center text-fontHero dark:text-white">
        <FiCoffee size={18} />
        <div className="px-1 text-2xl font-bold  font-hk">Mr.Coffee</div>
      </div>
    </header>
  );
}
