"use client";

import { useLenis } from "lenis/react";
import localFont from "next/font/local";
import Ticker from "@/components/ticker";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Aboutus from "@/components/Aboutus";
import ContactUs from "@/components/contactUs";
import { AnimatedLogoCloud } from "@/components/cloud-logo";
import Hero from "@/components/hero";
import { Element } from "react-scroll";

const Relevance = localFont({
  src: "../../../public/assets/fonts/Relevance-trial-Regular.ttf",
});

export default function Home() {
  if (typeof window !== 'undefined') {
    useLenis(({ scroll }) => {
      console.log("Current scroll position:", scroll);
    });
  }

  return (
    <main className="">
      <Element name="hero">
        <Hero />
      </Element>
      <AnimatedLogoCloud />
      <div className="h-full relative w-screen  flex md:flex-col md:items-center md:justify-center">
        <div className="relative z-20">
          <Element name="services">
            <Services />
          </Element>
          <div className="w-screen  text-gray-50 font-semibold h-16 flex items-center pb-36 md:pb-40 lg:pb-24 pt-24 lg:pt-36">
            <Ticker />
          </div>
          <Aboutus />
          <Element name="process">
            <Process />
          </Element>
          <ContactUs />
        </div>
      </div>
    </main>
  );
}
