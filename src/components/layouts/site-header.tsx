"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import maxima from "../../../public/maxima-logo.svg";
import localFont from "next/font/local";

const Bogart = localFont({
  src: "../../../public/assets/fonts/bogart/Bogart-SemiBold-trial.ttf",
});

export default function SiteHeader() {
  return (
    <header className="md:container md:max-w-6xl px-4">
      <nav className="md:py-8 py-4 flex w-full justify-between items-center z-50">
        {/* --------------------------------- LOGO ------------------------------------------ */}
        <h2 className="text-2xl font-semibold tracking-wide flex gap-2.5 items-center">
          <>
            <Link href={"/"}>
              <Image
                className="w-44"
                src={maxima}
                alt="Maxima communications"
              />
            </Link>
          </>
        </h2>
        {/* ------------------------------------------------------------------------------------- */}

        {/* ---------------------------------------------NavBar---------------------------------------------------- */}
        <div className="border  rounded-full px-6 py-3 bg-gray-800">
          <div className="flex justify-center items-center gap-12  ">
            <Link href="#">
              <p
                className={` border rounded-full bg-slate-500 -mx-3 -my-1 px-3 py-2 w-[130px] text-center ${Bogart.className}`}
              >
                Our Services
              </p>
            </Link>
            <Link href="#">
              <p
                className={` border rounded-full bg-slate-500 -mx-3 -my-1 px-3 py-2 w-[130px] text-center ${Bogart.className}`}
              >
                Our Process
              </p>
            </Link>
            <Link href="#">
              <p
                className={` border rounded-full bg-slate-500 -mx-3 -my-1 px-3 py-2 w-[130px] text-center ${Bogart.className}`}
              >
                About us
              </p>
            </Link>
          </div>
        </div>
        {/*-------------------------------------------------------------------------------------------------- */}
        {/* -------------------------------------------COntact Us ----------------------*/}
        <div className="w-44 ">
          <div className="flex justify-around border rounded-full bg-white text-black  px-5 py-3 text-center font-semibold ">
            <p className="mr-3">Contact Us</p>
            <ArrowRight className="w-4 h-6" />
          </div>
        </div>
        {/*------------------------------------------------------------------------------------- */}
      </nav>
    </header>
  );
}
