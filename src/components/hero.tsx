import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import localFont from "next/font/local";
import Splitting from "splitting";
import { Link as ScrollLink } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

const TestFont = localFont({
  src: "../../public/assets/fonts/area/AreaInktrapTrial-Extrabold-BF65ea75c482e6b.otf",
});

const FlippedFont = localFont({
  src: "../../public/assets/fonts/distant_feeling/Distant Feeling-Italic.ttf",
});

const DescFont = localFont({
  src: "../../public/assets/fonts/lt_superior/LTSuperior-Light.otf",
});

const BoldFont = localFont({
  src: "../../public/assets/fonts/lt_superior/LTSuperior-SemiBold.otf",
});


const EyeShape = () => (
  <svg
    width="201"
    height="108"
    viewBox="0 0 201 108"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-[30px] -right-[5.525px] w-16 sm:top-12 sm:-right-[6px] sm:w-20 h-auto opacity-60"
    transform="rotate(5)"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M100.499 107.877C141.647 107.877 177.351 81.54 195.127 65.673C202.289 59.28 202.289 48.597 195.127 42.204C177.351 26.3371 141.647 0 100.499 0C59.3516 0 23.6479 26.3371 5.87163 42.2041C-1.29055 48.597 -1.29054 59.28 5.87164 65.673C23.6479 81.54 59.3516 107.877 100.499 107.877ZM100.499 91.57C121.283 91.57 138.131 74.722 138.131 53.9383C138.131 33.1551 121.283 16.3069 100.499 16.3069C79.7161 16.3069 62.868 33.1551 62.868 53.9383C62.868 74.722 79.7161 91.57 100.499 91.57Z"
    />
    <path
      d="M100.499 91.57C121.283 91.57 138.131 74.722 138.131 53.9383C138.131 33.1551 121.283 16.3069 100.499 16.3069C79.7161 16.3069 62.868 33.1551 62.868 53.9383C62.868 74.722 79.7161 91.57 100.499 91.57Z"
      fill="url(#eye-gradient)"
    />
    <defs>
      <linearGradient
        id="eye-gradient"
        x1="0"
        y1="0"
        x2="201"
        y2="108"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8B5CF6" />
        <stop offset="1" stopColor="#EC4899" />
      </linearGradient>
    </defs>
  </svg>
);

const CircleShape = () => (
  <svg
    width="201"
    height="200"
    viewBox="0 0 201 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-[19px] -right-[0.75px] w-[63px] sm:top-[23px] sm:-right-[2.75px] sm:w-[88px] h-auto opacity-60"
  >
    <mask
      id="mask0_1_853"
      style={{ maskType: "luminance" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="201"
      height="200"
    >
      <path d="M200.5 0H0.5V200H200.5V0Z" fill="white" />
    </mask>
    <g mask="url(#mask0_1_853)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M188.5 100C188.5 148.601 149.101 188 100.5 188C51.8989 188 12.5 148.601 12.5 100C12.5 51.3989 51.8989 12 100.5 12C149.101 12 188.5 51.3989 188.5 100ZM200.5 100C200.5 155.228 155.728 200 100.5 200C45.2715 200 0.5 155.228 0.5 100C0.5 44.7715 45.2715 0 100.5 0C155.728 0 200.5 44.7715 200.5 100ZM100.5 111C106.575 111 111.5 106.075 111.5 100C111.5 93.9249 106.575 89 100.5 89C94.4249 89 89.5 93.9249 89.5 100C89.5 106.075 94.4249 111 100.5 111Z"
        fill="url(#circle-gradient)"
      />
    </g>
    <defs>
      <linearGradient
        id="circle-gradient"
        x1="0"
        y1="0"
        x2="201"
        y2="200"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8B5CF6" />
        <stop offset="1" stopColor="#EC4899" />
      </linearGradient>
    </defs>
  </svg>
);

export default function Hero() {

  return (
    <div className="h-[55vh] w-screen justify-center items-center mt-10 sm:mt-0 md:mt-0 lg:mt-0 flex px-4 container max-w-6xl relative">
      {/* <EyeShape /> */}
      {/* <ArrowShape /> */}
      {/* <CircleShape /> */}
      <div className="w-4/5 -mt-14 space-y-5 text-center relative z-10">
        <h1
          className={`leading-tighter text-center text-8xl sm:text-9xl -ml-2 sm:ml-0 md:ml-0 lg:ml-0 text-white opacity-95 ${TestFont.className}`} 
        >
          Voice y
          <span className="relative">
            o
            <CircleShape />
          </span>
          ur{` `}
          <span className={`${FlippedFont.className}`}>
            visi
            <span className="relative">
              <EyeShape />o
            </span>
            n
          </span>
        </h1>
        <h6 className={`pt-5 text-lg sm:text-xl mx-auto text-neutral-100 tracking-wide`}>
          {/* <span className={`${DescFont.className}`}>
            {" "}
            Transform Your Vision Into Reality{" "}
          </span>{" "}
          {`——`}{" "}
          <span className={`${DescFont.className}`}>
            {" "}
            Let's Bring Your Ideas to Life with a{" "}
          </span> */}
          <span className={`${DescFont.className}`}>
            {" "}
            Bring Your Ideas to Life with a{" "}
          </span>
          {` `}
          <span className={`${BoldFont.className} tracking-wider`}>FREE</span>
          {` `}
          <span className={`${DescFont.className}`}>Consultation</span>
        </h6>
        <ScrollLink
        to="contactus"
        spy={true}
        smooth={true}
        duration={1000}
          className="inline-flex lg:hidden relative items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black hover:text-white transition-all duration-150 ease-in-out rounded-3xl hover:pl-10 hover:pr-6 bg-gray-50 hover:bg-opacity-0 group border hover:border-white hover:backdrop-blur-3xl"
        >
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out group-hover:h-full"></span>
          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg
              className="w-4 h-4 md:w-5 md:h-5 text-black hover:text-white"
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
              className="w-4 h-4 md:w-5 md:h-5 text-white"
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
          <span
            className={`relative w-full text-sm md:text-base text-left transition-colors duration-200 ease-in-out group-hover:text-white`}
          >
            Get in touch
          </span>
        </ScrollLink>
      </div>
    </div>
  );
}
