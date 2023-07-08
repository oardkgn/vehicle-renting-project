'use client'
import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Footer, Navbar } from "./components";
import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

interface ThemeContextType {
  darkTheme: boolean;
  // this is the type for state setters
  setDarkTheme: Dispatch<SetStateAction<boolean>>; 
}

export const ThemeContext = createContext<ThemeContextType>({
  darkTheme: false,
  setDarkTheme: () => {}, // no-op default setter
});


export const metadata: Metadata = {
  title: "Wheelz",
  description: "Discover world's best car rental application",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [darkTheme, setDarkTheme] = useState(false)


  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className=" relative">
        <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
          <Navbar />
          <div className="w-full absolute top-0 bg-slate-900 h-full"></div>
          {children}
          <Footer />
        </ThemeContext.Provider>
      </body>
    </html>
  );
}


