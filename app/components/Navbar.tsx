import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";

function Navbar() {
  return (
    <header style={{backdropFilter:"blur(3px)"}} className="w-full sticky top-0 z-10 bg-white bg-opacity-80 backdrop:blur-md">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.png'
          alt='logo'
          width={24}
          height={24}
          className='object-contain'
        />
        <h1 className=" font-semibold pl-[6px] text-xl">Wheelz</h1>
      </Link>
      <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
      />
      </nav>
    </header>
  );
}

export default Navbar;
