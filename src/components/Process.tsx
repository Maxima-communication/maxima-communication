"use client";
import localFont from "next/font/local";
import React, { useEffect, useRef, useState } from "react";
import StyledImage from "./ui/styledimage";
import code from "../images/code.jpg";
import meeting from "../images/meeting.jpg";
import whiteboard from "../images/whiteboard.jpg";
import Image from "next/image";
import arrow from "../images/arrow.svg";
import arrowflipped from "../images/arrowflipped.svg";
import AnimatedText from "./ui/paragraph";

const Engebrechtre = localFont({
  src: "../../public/assets/fonts/engebrechtre/Engebrechtre Bd.otf",
});

// Testing font
const TestFont = localFont({
  src: "../../public/assets/fonts/area/AreaNormalTrial-Light-BF65ea75c6c87b9.otf",
});

const Process = () => {
  return (
    <div className="container w-screen max-w-6xl mt-48 sm:mt-36 relative">
      {/* ---------------------------------- Part 1 -------------------------------------------------------- */}

      <div className="flex flex-col items-center relative px-4 sm:px-6 md:px-8">
        <h4
          className={`text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-[#0074a1] via-sky-800 to-[#0074a1] bg-clip-text text-transparent dark:text-white uppercase ${Engebrechtre.className} text-center`}
        >
          Our Process
        </h4>
        <div className="absolute bg-dot-white opacity-40 w-40 h-20 sm:w-60 sm:h-30 md:w-72 md:h-32 lg:w-80 lg:h-36 translate-x-[98px] sm:translate-x-[150px] md:translate-x-[170px] lg:translate-x-[199px] translate-y-2 sm:translate-y-3" />
      </div>

      {/* ---------------------------------- Part 2 -------------------------------------------------------- */}

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between my-20 mt-20 sm:mt-32 md:mt-48 lg:mt-10 min-h-[600px] relative">
        <div className="w-[75%] sm:w-[50%] md:w-[50%] lg:w-[40%] flex items-center justify-center h-full mb-8 mt-10 lg:mt-10 lg:mb-0">
          <StyledImage
            src={whiteboard}
            alt="Discover"
            shape={0}
            className="max-h-full max-w-full"
          />
        </div>
        <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center gap-8 px-4 lg:px-16">
          <div
            className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#0074a1] via-sky-800 to-[#0074a1] bg-clip-text text-transparent dark:text-white text-center lg:text-left ${Engebrechtre.className}`}
          >
            <AnimatedText text="Discover" />
          </div>
          <div
            className={`max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl mt-2 sm:mt-0 text-center font-medium bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent dark:text-gray-200 text-sm sm:text-base lg:text-base ${TestFont.className}`}
          >
            <p>
              Our process begins with a thorough discovery phase where we take
              the time to understand your business, goals, and target audience.
              We conduct detailed research and analysis to gather all necessary
              information, ensuring that we have a solid foundation to build
              upon. This step is crucial as it helps us align our strategies
              with your vision and objectives, setting the stage for a
              successful project.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute invert dark:invert-0 left-1/2 sm:left-[675px] lg:left-1/2 w-2/5 sm:w-1/3 md:w-3/12 top-[710px] sm:top-[860px] lg:top-[600px] transform -translate-x-1/2 md:-translate-x-96 lg:-translate-x-1/2 -bottom-44 opacity-15 dark:opacity-25">
        <Image src={arrow} alt="arrow" width="250" />
      </div>
      {/* ---------------------------------- Part 3 -------------------------------------------------------- */}

      <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between my-20 mt-52 sm:mt-56 md:mt-60 lg:mt-10  min-h-[600px] relative">
        <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center gap-8 px-4 lg:px-16 order-2 lg:order-1 mb-8 lg:mb-0">
          <div
            className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#0074a1] via-sky-800 to-[#0074a1] bg-clip-text text-transparent dark:text-white text-center lg:text-left ${Engebrechtre.className}`}
            >
            <AnimatedText text="Build" />
          </div>
          <div
            className={`max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl mt-2 sm:mt-0 text-center font-medium bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent dark:text-gray-200 text-sm sm:text-base lg:text-base ${TestFont.className}`}
            >
            <p>
              During the build phase, our skilled developers and designers work
              collaboratively to create a high-quality product. We utilize
              cutting-edge technologies and best practices to ensure that your
              website or mobile application is not only visually appealing but
              also highly functional and user-friendly. Our iterative approach
              allows for continuous feedback and improvements, ensuring that the
              final product meets your expectations and standards.
            </p>
          </div>
        </div>
        <div className="w-[75%] sm:w-[50%] md:w-[50%] lg:w-[40%] flex items-center justify-center h-full mb-8 mt-10 lg:mt-10 lg:mb-0">
          <StyledImage
            src={code}
            alt="Build"
            shape={0}
            className="max-h-full max-w-full"
          />
        </div>
      </div>
      <div className="absolute invert dark:invert-0 left-1/2 w-2/5 sm:w-full  md:w-3/12 top-[1575px] md:top-[1800px] lg:top-[1320px] transform -translate-x-1/2 md:-translate-x-32 lg:-translate-x-1/2 -bottom-52 opacity-15 dark:opacity-25">
        <Image src={arrowflipped} alt="arrow" width={250} />
      </div>
      {/* ---------------------------------- Part 4 -------------------------------------------------------- */}

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between my-20 mt-52 sm:mt-56 md:mt-60 lg:mt-10  min-h-[600px] relative">
      <div className="w-[75%] sm:w-[50%] md:w-[50%] lg:w-[40%] flex items-center justify-center h-full mb-8 mt-10 lg:mt-10 lg:mb-0">
      <StyledImage
            src={meeting}
            alt="Deliver" 
            shape={0}
            className="max-h-full max-w-full"
          />
        </div>

        <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center gap-8 px-4 lg:px-16 order-2 lg:order-1 mb-8 lg:mb-0">
          <div
            className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#0074a1] via-sky-800 to-[#0074a1] bg-clip-text text-transparent dark:text-white text-center lg:text-left ${Engebrechtre.className}`}
            >
            <AnimatedText text="Deliver" />
          </div>
          <div
            className={`max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl mt-2 sm:mt-0 text-center font-medium bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent dark:text-gray-200 text-sm sm:text-base lg:text-base ${TestFont.className}`}
            >
            <p>
              In the deliver phase, we thoroughly test the product to ensure it
              performs flawlessly across all devices and platforms. Once
              everything is finalized, we deploy the website or application,
              ensuring a smooth and seamless launch. Our commitment doesn't end
              there; we provide ongoing support and maintenance to ensure your
              digital solution continues to perform optimally, helping you
              achieve your goals and long-term success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
