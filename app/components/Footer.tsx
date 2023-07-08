import React from "react";
import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col z-10 text-black-100  mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 max-w-[1600px] relative left-1/2 -translate-x-1/2 ">
        <div className="flex flex-col justify-start items-start gap-6">
          <div className=" flex gap-2 ">
          <Image
            src="/logo.png"
            alt="logo"
            width={24}
            height={24}
            className="object-contain"
          />
          <span className=" text-xl font-semibold text-slate-200">Wheelz</span>
          </div>
          <p className="text-base text-gray-700">
            Wheelz 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((item) => (
            <div key={item.title} className="footer__link text-slate-200">
              <h3 className="font-bold">{item.title}</h3>
              <div className="flex flex-col gap-5">
                {item.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="text-gray-500"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 ">
        <p>@2023 Wheelz. All rights reserved</p>

        <div className="footer__copyrights-link z-10">
          <Link href="/" className="text-gray-500 ">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500 ">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
