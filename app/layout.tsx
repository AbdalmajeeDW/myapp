"use client";

import './globals.css'
import Header from "../components/header";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`antialiased bg-primaryColor dark:bg-darkPrimary dark:text-darkText h-full`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
