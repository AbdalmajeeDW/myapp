"use client";

import './globals.css'
import Header from "../components/header";
import { ReactNode } from "react";



// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });



interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {


  return (
    <html lang="ar" dir="rtl">
        <body
          className={` antialiased bg-primaryColor h-full`}
        >
          <Header />
          {children}
        </body>
    </html>
  );
}
