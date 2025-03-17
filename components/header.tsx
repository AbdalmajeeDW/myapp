"use client";
import { FiCoffee } from "react-icons/fi";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
// import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  // const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
// console.log(theme);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  return (
    <header className="px-28 bg-primaryColor font-[Poppins] dark:bg-darkPrimary flex fixed z-20 flex-row items-center justify-between xs:px-4 h-20 w-full p-2">
      <div className="px-5 cursor-pointer" >
       
          <MdOutlineDarkMode size={22} className="text-fontHero" />
        
      </div>
      <div className="px-5 flex flex-row justify-start items-center text-fontHero">
        <FiCoffee size={18} />
        <div className="px-1 text-lg">Mr.Coffee</div>
      </div>
    </header>
  );
}
