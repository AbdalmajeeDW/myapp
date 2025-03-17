/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ تمكين الوضع الداكن
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primaryColor: "#f8f9e9",
      secondryColor: "#935332",
      titelCard: "#414a7e",
      shadowCard: "#cf7e35",
      transparent: "transparent",
      current: "currentColor",
      fontHero: "#bc7c4e",
      gray: "#85869f",
      white: "#ffffff",
      black: "#000000", 
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      bubbleGum: "#ff77e9",
      bermuda: "#78dcca",
      footer:'#c17f4c'
    },
    screens: {
      xs: "350px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkPrimary: "#1e1e1e", 
        darkSecondary: "#3a3a3a",
        darkText: "#f1f1f1",
      },
    },
  },
  plugins: [],
};
