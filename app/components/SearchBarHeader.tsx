'use client'
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../layout";

function SearchBarHeader() {
    const{ darkTheme } = useContext(ThemeContext)
  return (
    <div className={`home__text-container ${darkTheme && "!text-slate-200"}`}>
      <h1 className={`text-4xl font-extrabold`}>Car Catalogue</h1>
      <p>Explore out cars you might like</p>
    </div>
  );
}

export default SearchBarHeader;
