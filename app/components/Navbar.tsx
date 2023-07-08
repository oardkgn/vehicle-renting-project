"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";
import { Switch } from "@headlessui/react";
import {CiLight,CiDark} from 'react-icons/ci'
import { useContext } from "react";
import { ThemeContext } from "../layout";

function Navbar() {
  const [enabled, setEnabled] = useState(false);
  
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  
  if (enabled) {
    setDarkTheme(true)
  }else{
    setDarkTheme(false)
  }
  

  return (
    <header
      style={{ backdropFilter: "blur(3px)" }}
      className={`w-full transition-all sticky top-0 z-40 bg-opacity-80 bg-white ${darkTheme && "!bg-slate-900 !bg-opacity-80"}`}  //// dark mode
    >
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center  sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={24}
            height={24}
            className="object-contain"
          />
          <h1 className={`font-semibold pl-[6px] text-xl  ${darkTheme && " text-slate-200 "}`}>
            Wheelz
          </h1>
        </Link>

        <div className=" flex items-center gap-8">
        <div className=" mt-1 flex items-center">
          <CiLight className={`text-[24px] text-slate-900 -mr-1 ${darkTheme && " !text-slate-200 "}`}/>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex scale-75 h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
          <CiDark className={`text-[24px] text-slate-900 -ml-1 ${darkTheme && " !text-slate-200 "}`}/>
        </div>

        <CustomButton
          title="Sign in"
          btnType="button"
          textStyles=" font-semibold"
          containerStyles="text-primary-blue border border-primary-blue rounded-full bg-white min-w-[130px]"
        />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
