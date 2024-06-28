"use client";

import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import maxima from "../../../public/m.svg";
import { useState } from "react";
import { motion } from "framer-motion";

// Testing font
const TestFont = localFont({
  src: "../../../public/assets/fonts/area/AreaNormalTrial-Semibold-BF65ea75c6b547e.otf",
});

// Testing font
const LogoFont = localFont({
  src: "../../../public/assets/fonts/area/AreaNormalTrial-Semibold-BF65ea75c6b547e.otf",
});

const navigation = [
  { name: "Home" },
  { name: "Services" },
  { name: "Process" },
];

export default function SiteHeader() {
  const [selectedLink, setSelectedLink] = useState("Home");

  return (
    <header className="relative md:container md:max-w-6xl px-4">
      <nav className="md:py-8 py-4 flex w-full justify-between items-center z-50">
        <Link
          href={"/"}
          className="flex justify-center items-center opacity-75"
        >
          <Image
            className="h-28 w-56"
            src={maxima}
            alt="Maxima communications"
          />
        </Link>
        <div className="flex gap-16">
          {navigation.map((item) => {
            const isSelected = item.name === selectedLink;
            return (
              <Link
                key={item.name}
                href="#"
                className={`relative text-sm tracking-wide leading-6 uppercase no-underline ${
                  TestFont.className
                } ${isSelected ? "text-white" : "text-slate-300"}`}
                onClick={() => setSelectedLink(item.name)}
              >
                {item.name}
                {isSelected ? (
                  <motion.div className="absolute -bottom-[1px] left-0 right-0 h-[1px] flex justify-center">
                    <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
                      <motion.path
                        d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                        stroke="#cfe2f3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{
                          strokeDasharray: 84.20591735839844,
                          strokeDashoffset: 84.20591735839844,
                        }}
                        animate={{
                          strokeDashoffset: 0,
                        }}
                        transition={{
                          duration: 1.5,
                        }}
                      />
                    </svg>
                  </motion.div>
                ) : null}
              </Link>
            );
          })}
        </div>
        {/* <div className="w-44">
          <div className="flex justify-around border rounded-full bg-white text-black px-5 py-3 text-center">
            <p className="mr-3 font-semibold">Get in touch</p>
            <ArrowRight className="w-4 h-6" />
          </div>
        </div> */}
        <a
          href="#_"
          className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black hover:text-white transition-all duration-150 ease-in-out rounded-3xl hover:pl-10 hover:pr-6 bg-gray-50 hover:bg-opacity-0 group border hover:border-white hover:backdrop-blur-3xl"
          >
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out group-hover:h-full"></span>
          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg
              className="w-5 h-5 text-black hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className={`relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white`}>
            Get in touch
          </span>
        </a>
      </nav>
    </header>
  );
}
