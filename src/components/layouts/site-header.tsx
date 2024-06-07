"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import maxima from "../../../public/maxima-logo.svg";
import { useState } from "react";
import { motion } from "framer-motion";

const navigation = [{ name: "Home" }, { name: "About" }, { name: "Services" }, { name: "Process" }];

export default function SiteHeader() {
  const [selectedLink, setSelectedLink] = useState("Home");

  return (
    <header className="relative md:container md:max-w-6xl px-4">
      <nav className="md:py-8 py-4 flex w-full justify-between items-center z-50">
        <h2 className="text-2xl font-semibold tracking-wide flex gap-2.5 items-center">
          <Link href={"/"}>
            <Image
              className="w-44"
              src={maxima}
              alt="Maxima communications"
            />
          </Link>
        </h2>
        <div className="flex gap-16">
          {navigation.map((item) => {
            const isSelected = item.name === selectedLink;
            return (
              <Link
                key={item.name}
                href="#"
                className={`relative text-base leading-6 no-underline ${
                  isSelected ? "font-semibold text-white" : "text-gray-300"
                }`}
                onClick={() => setSelectedLink(item.name)}
              >
                {item.name}
                {isSelected ? (
                  <motion.div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
                    <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
                      <motion.path
                        d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                        stroke="#b20000"
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
                          duration: 1,
                        }}
                      />
                    </svg>
                  </motion.div>
                ) : null}
              </Link>
            );
          })}
        </div>
        <div className="w-44">
          <div className="flex justify-around border rounded-full bg-white text-black px-5 py-3 text-center">
            <p className="mr-3 font-semibold">Contact Us</p>
            <ArrowRight className="w-4 h-6" />
          </div>
        </div>
      </nav>
    </header>
  );
}
