"use client";
import localFont from "next/font/local";
import React, { useEffect, useRef, useState } from "react";
/* import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { cn } from "@/utils/cn"; */
import StyledImage from "./ui/styledimage";
import code from "../images/code.jpg";
import meeting from "../images/meeting.jpg";
import whiteboard from "../images/whiteboard.jpg";
import Image from "next/image";
import arrow from "../images/arrow.svg";
import arrowflipped from "../images/arrowflipped.svg";

/* const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.6], [70, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full max-w-6xl mx-auto h-full", className)}
    >
      <div className="absolute -left-4 md:-left-20 top-3">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="ml-[27px] h-4 w-4 rounded-full border border-neutral-200 shadow-sm flex items-center justify-center"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? "white" : "",
              borderColor: scrollYProgress.get() > 0 ? "white" : "",
            }}
            className="h-2 w-2 border rounded-full border-white bg-white"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight} // Set the SVG height
          className="ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="red"
            strokeOpacity="0.16"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1} // set y1 for gradient
              y2={y2} // set y2 for gradient
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="0.325" stopColor="#6344F5"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
}; */

const Engebrechtre = localFont({
  src: "../../public/assets/fonts/engebrechtre/Engebrechtre Bd.otf",
});

// Testing font
const TestFont = localFont({
  src: "../../public/assets/fonts/tabarra/TabarraPro-Light-FFP.ttf",
});

const Process = () => {
  return (
    // <TracingBeam>
    <div className="container max-w-6xl mt-36 relative">
      {/* ---------------------------------- Part 1 -------------------------------------------------------- */}

      <div className="flex flex-col items-center relative">
        <h4
          className={`text-4xl text-white uppercase ${Engebrechtre.className}`}
        >
          Our Process
        </h4>
        {/* <h6 className={`max-w-2xl text-center font-medium text-gray-200 ${TestFont.className}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore at
        repellendus beatae fugit reprehenderit quae tenetur praesentium
        harum aut maxime. Quam voluptatibus vero temporibus soluta quae
        repellendus aliquid doloremque eaque.
      </h6> */}
        <div className="absolute bg-dot-white opacity-40 w-80 h-40 translate-x-[199px] translate-y-3" />
      </div>

      {/* ---------------------------------- Part 2 -------------------------------------------------------- */}

      <div className="flex items-center justify-between my-20 h-[600px] relative">
        {/* -------------------------------- THE IMAGE ------------------------------------------------------ */}

        <div className="w-1/2 flex items-center justify-center h-full">
          <StyledImage
            src={meeting}
            alt="Discover"
            shape={0}
            className="max-h-full max-w-full"
          />
        </div>

        {/* ---------------------------------- THE TEXT -------------------------------------------------------- */}

        <div className="w-1/2 h-full flex flex-col items-center justify-center gap-8 px-16">
          <div
            className={`text-5xl font-bold text-white ${Engebrechtre.className}`}
          >
            Discover
          </div>
          <div
            className={`max-w-2xl text-center font-medium text-gray-200 ${TestFont.className}`}
          >
            Our process begins with a thorough discovery phase where we take the
            time to understand your business, goals, and target audience. We
            conduct detailed research and analysis to gather all necessary
            information, ensuring that we have a solid foundation to build upon.
            This step is crucial as it helps us align our strategies with your
            vision and objectives, setting the stage for a successful project.
          </div>
        </div>

        {/* ---------------------------------- THE ARROW ------------------------------------------------------ */}
        <Image
          className="absolute left-1/2 transform -translate-x-1/2 -bottom-44 opacity-25"
          src={arrow}
          alt="arrow"
          width="250"
        />
      </div>

      {/* ---------------------------------- Part 3 -------------------------------------------------------- */}

      <div className="flex items-center justify-between my-20 h-[600px] relative">
        {/* ---------------------------------- THE TEXT -------------------------------------------------------- */}

        <div className="w-1/2 h-full flex flex-col items-center justify-center gap-8 px-16">
          <div
            className={`text-5xl font-bold text-white ${Engebrechtre.className}`}
          >
            Build
          </div>
          <div
            className={`max-w-2xl text-center font-medium text-gray-200 ${TestFont.className}`}
          >
            During the build phase, our skilled developers and designers work
            collaboratively to create a high-quality product. We utilize
            cutting-edge technologies and best practices to ensure that your
            website or mobile application is not only visually appealing but
            also highly functional and user-friendly. Our iterative approach
            allows for continuous feedback and improvements, ensuring that the
            final product meets your expectations and standards.
          </div>
        </div>
        {/* -------------------------------- THE IMAGE ------------------------------------------------------ */}

        <div className="w-1/2 flex items-center justify-center h-full">
          <StyledImage
            src={code}
            alt="Build"
            shape={0}
            className="max-h-full max-w-full"
          />
        </div>

        {/* ---------------------------------- THE ARROW ------------------------------------------------------ */}
        <Image
          className="absolute left-1/2 transform -translate-x-1/2 -bottom-52 opacity-25"
          src={arrowflipped}
          alt="arrow"
          width={250}
        />
      </div>

      {/* ---------------------------------- Part 4 -------------------------------------------------------- */}

      <div className="flex items-center justify-between my-20 h-[600px]">
        {/* -------------------------------- THE IMAGE ------------------------------------------------------ */}

        <div className="w-1/2 flex items-center justify-center h-full">
          <StyledImage
            src={whiteboard}
            alt="Deliver"
            shape={0}
            className="max-h-full max-w-full"
          />
        </div>

        {/* ---------------------------------- THE TEXT -------------------------------------------------------- */}

        <div className="w-1/2 h-full flex flex-col items-center justify-center gap-8 px-16">
          <div
            className={`text-5xl font-bold text-white ${Engebrechtre.className}`}
          >
            Deliver
          </div>
          <div
            className={`max-w-2xl text-center font-medium text-gray-200 ${TestFont.className}`}
          >
            In the deliver phase, we thoroughly test the product to ensure it
            performs flawlessly across all devices and platforms. Once
            everything is finalized, we deploy the website or application,
            ensuring a smooth and seamless launch. Our commitment doesn't end
            there; we provide ongoing support and maintenance to ensure your
            digital solution continues to perform optimally, helping you achieve
            long-term success.
          </div>
        </div>
      </div>
    </div>

    // </TracingBeam>
  );
};

export default Process;
