"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../layout";

function Hero() {

  const { darkTheme } = useContext(ThemeContext);

  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <div className={`hero ${ darkTheme && "text-slate-200"}`}>
      <div className="flex-1 pt-28 padding-x">
        <h1 className={`hero__title ${ darkTheme && "text-slate-200"}`}>
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className={`hero__subtitle ${ darkTheme && "!text-slate-400"}`}>
          Rent your dream car and hit the road with our user-friendly car rental
          website, making your journey effortless from start to finish.
        </p>
      
      <CustomButton
        title="Explore Cars"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}
      />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill sizes="undefined" className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
}

export default Hero;
