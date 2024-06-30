'use client';
import localFont from "next/font/local";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
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
    <div className="relative container my-32 max-w-6xl flex items-center justify-center min-h-screen mx-auto">
      {/* Mesh Background Image */}
      <Image
        src={mesh}
        alt="Mesh Background"
        width={800}
        height={700}
        className="absolute inset-1 object-cover opacity-20 blur-[1.5px] z-[-1] translate-x-28"
      />
      {/* Content */}
      <div className="relative h-96 flex justify-center items-center z-10 text-container">
        <p 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
          className={`text-center tracking-wide p-20 w-4/5 text-6xl text-gray-200 ${Coolvetica.className}`}
        >
          A CREATIVE{" "}
          <span className="inline-block">
            <Image
              src={first}
              alt="first"
              className="w-36 h-10 rounded-3xl grayscale"
            />
          </span>{" "}
          MIND KNOWS
          <span className="inline-block">
            <Image
              src={second}
              alt="second"
              className="w-20 h-10 rounded-3xl grayscale mx-3"
            />
          </span>
          <span className="inline-block">HOW TO DO</span>
          <span className="inline-block">THE</span>
          <span className="inline-block">
            <Image
              src={button}
              alt="button"
              className="w-14 h-10 rounded-3xl mx-3"
            />
          </span>
          <span className="inline-block">RIGHT THING AT</span>
          <span className="inline-block tracking-wide">
            THE RIGHT PLACE AND
          </span>
          <span className="inline-block">AT THE</span>
          <span className="inline-block">
            <Image
              src={third}
              alt="third"
              className="w-24 h-10 rounded-3xl grayscale mx-3"
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
