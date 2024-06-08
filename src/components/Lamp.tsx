"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.1, y: 150 }}
        whileInView={{ opacity: 1, y: 100 }}
        transition={{
          delay: 0.3,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className=""
      >
        <div className="flex flex-col items-center justify-center gap-6 w-full">
          <div className="text-5xl font-bold mb-6 text-white">Services</div>
          <div className="max-w-6xl mx-auto text-center px-4">
            <p className="leading-relaxed text-gray-200">
              Revolutionizing the digital landscape, we offer a holistic suite
              of services spanning web development, mobile app creation,
              cutting-edge UI/UX design, and dynamic web marketing solutions. We
              excel in crafting captivating websites and mobile applications
              that marry aesthetics with functionality, ensuring impeccable user
              journeys. Leveraging our seasoned team's expertise, we elevate
              your digital footprint through strategic SEO and social media
              marketing initiatives. Entrust us with your vision, and together,
              we'll propel your business towards its zenith with our
              comprehensive digital arsenal.
            </p>
          </div>
        </div>
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-[50vh] flex-col items-center justify-center overflow-hidden w-full rounded-md z-0", // Change min-h-screen to h-[50vh]
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem", y: 40 }}
          whileInView={{ opacity: 1, width: "30rem", y:30 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-28 overflow-visible w-[15rem] bg-gradient-conic from-red-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]" // Change height and initial width
        >
          <div className="absolute w-[100%] left-0 h-20 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-20 h-[100%] left-0 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" , y:40 }}
          whileInView={{ opacity: 1, width: "30rem" , y:30}}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-28 w-[15rem] bg-gradient-conic from-transparent via-transparent to-red-500 text-white [--conic-position:from_290deg_at_center_top]" // Change height and initial width
        >
          <div className="absolute w-20 h-[100%] right-0 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 h-20 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-24 w-full translate-y-6 scale-x-150 blur-2xl"></div>{" "}
        {/* Adjusted height and translate-y */}
        <div className="absolute top-1/2 z-50 h-24 w-full bg-transparent opacity-10 backdrop-blur-md"></div>{" "}
        {/* Adjusted height */}
        <div className="absolute inset-auto z-50 h-18 w-[14rem] -translate-y-1/2 rounded-full bg-red-500 opacity-50 blur-3xl"></div>{" "}
        {/* Adjusted height and width */}
        <motion.div
          initial={{ width: "4rem" , y:40}}
          whileInView={{ width: "8rem", y:30 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-18 w-32 -translate-y-[3rem] rounded-full bg-red-400 blur-2xl" // Adjusted width and translate-y
        ></motion.div>
   
        <div className="absolute inset-auto z-40 h-22 w-full -translate-y-[6.25rem] bg-slate-950 "></div>{" "}
        {/* Adjusted height and translate-y */}
      </div>

      <div className="relative z-50 flex -translate-y-40 flex-col items-center px-5">
        {" "}
        {/* Adjusted translate-y */}
        {children}
      </div>
    </div>
  );
};
