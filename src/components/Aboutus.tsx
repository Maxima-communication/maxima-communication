'use client';
import localFont from "next/font/local";
import Image from "next/image";
import React, { useState } from "react";
import first from "../images/first.png";
import second from "../images/second.png";
import button from "../images/butt.svg";
import third from "../images/third.png";
import mesh from "../images/4.svg";
import GradientCursor from "./ui/cursor";

const Coolvetica = localFont({
  src: "../../public/assets/fonts/coolvetica/coolvetica rg.otf",
});

const Aboutus = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative container my-20 sm:my-32 sm:mb-52 md:mb-60 lg:my-32 max-w-6xl flex items-start justify-start  md:items-center md:justify-center lg:min-h-screen mx-auto">
      {/* Mesh Background Image */}
      <Image
        src={mesh}
        alt="Mesh Background"
        className="absolute w-[400px] h-[375px] sm:w-[600px] sm:h-[550px] lg:w-[800px] lg:h-[700px] inset-9 lg:inset-1 object-fill opacity-20 blur-[1.5px] z-[-1] -translate-x-11 -translate-y-32 sm:-translate-y-44 lg:-translate-y-8 lg:translate-x-28 md:translate-x-16"
      />
      {/* Content */}
      <div className="relative h-48 sm:h-72 lg:h-96 flex justify-start md:justify-center items-center z-10">
        <p 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
          className={`text-center tracking-wide py-10 w-full md:w-4/5   px-0 sm:pl-3 lg:p-20  sm:w-4/5 text-3xl sm:text-5xl lg:text-6xl text-gray-200 ${Coolvetica.className}`}
         
        >
          A CREATIVE{" "}
          <span className="inline-block">
            <Image
              src={first}
              alt="first"
              className="w-20 h-5 sm:w-32 sm:h-8 lg:w-36 lg:h-10 rounded-3xl grayscale"
            />
          </span>{" "}
          MIND KNOWS
          <span className="inline-block">
            <Image
              src={second}
              alt="second"
              className="w-10 h-5 sm:w-[70px] sm:h-8 lg:w-20 lg:h-10 rounded-3xl grayscale mx-3"
            />
          </span>
          <span className="inline-block">HOW TO DO</span>
          <span className="inline-block">THE</span>
          <span className="inline-block">
            <Image
              src={button}
              alt="button"
              className="w-7 h-6 sm:w-14 sm:h-8 lg:w-14 lg:h-10 rounded-3xl mx-3"
            />
          </span>
          <span className="inline-block">RIGHT THING AT</span>
          <span className="inline-block tracking-wider lg:tracking-wide">
            THE RIGHT PLACE AND
          </span>
          <span className="inline-block">AT THE</span>
          <span className="inline-block">
            <Image
              src={third}
              alt="third"
              className="w-12 h-5 sm:w-20 sm:h-8 lg:w-24 lg:h-10 rounded-3xl grayscale mx-3"
            />
          </span>
          RIGHT TIME
        </p>
        <GradientCursor isHovered={isHovered} />
      </div>
    </div>
  );
};

export default Aboutus;
