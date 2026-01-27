"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"

export default function Footer() {
  return (
    <>
      <div className="
      text-[#d4af37]
      xsm:max-md:m-auto xsm:max-md:h-21.5 xsm:max-md:flex xsm:max-md:flex-col xsm:max-md:items-center xsm:max-md:justify-evenly 
      md:max-2xl:m-auto md:max-2xl:h-21.5 md:max-2xl:flex md:max-2xl:flex-row md:max-2xl:items-center md:max-2xl:justify-evenly">
        <div>&copy; Magyar Wesnoth Közösség 2005-2021, 2024-2026</div>
        <div className="flex flex-row items-center justify-center">
          Támogatók:{" "}
          <Link href="https://react.dev" target="_blank">
            <Image
              src="logo-react.svg"
              width={18}
              height={18}
              alt="ReactJS Logo"
            />
          </Link>
          <Link href="https://nextjs.org" target="_blank">
            <Image src="logo-next.svg" width={18} height={18} alt="NextJS Logo" />
          </Link>
          <Link href="https://pictogrammers.com" target="_blank">
            <Image src="/picto.png" width={18} height={18} alt="PictoGrammers Icon" unoptimized />
          </Link>
        </div>
        {/*
          <div className="flex flex-row items-center justify-center gap-1">
            <span>Festive Decoration by</span>
            <Link
              href="https://www.freepik.com/free-vector/banner-ribbon-decoration-christmas-season_2920691.htm#fromView=search&page=1&position=14&uuid=5ed26483-71bc-4988-9845-6cf1e98fd517&new_detail=true"
              target="_blank"
              className="decoration-none text-[#efbf04]"
            >
              rawpixel.com on Freepik
            </Link>
          </div>
        */}
      </div>
    </>
  );
}
