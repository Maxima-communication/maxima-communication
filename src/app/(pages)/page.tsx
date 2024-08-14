'use client';

import { useLenis } from 'lenis/react';
import localFont from "next/font/local";
import Ticker from "@/components/ticker";
import Services from "@/components/Services";
import Process from "@/components/process";
import Aboutus from "@/components/aboutus";
import ContactUs from "@/components/contactUs";
import {AnimatedLogoCloud} from "@/components/cloud-logo";
import Hero from "@/components/hero";

const Relevance = localFont({
  src: "../../../public/assets/fonts/Relevance-trial-Regular.ttf",
});

export default function Home() {
  useLenis(({ scroll }) => {
    // You can add any scroll-based animations or effects here
    console.log('Current scroll position:', scroll);
  });

  return (
    <main className=''>
    <Hero />
      <AnimatedLogoCloud />
      <div className="h-full relative w-screen flex flex-col items-center justify-center">
        <div className="relative z-20">
          <Services />
          <div className="w-full lg:w-screen max-w-[700px] sm:max-w-[850px] md:max-w-[900px] lg:max-w-none text-gray-50 font-semibold h-16 flex items-center pb-36 md:pb-40 lg:pb-24 pt-24 lg:pt-36">
            <Ticker />
          </div>
          <Aboutus />
          <Process />
          <ContactUs />
        </div>
      </div>
    </main>
  );
}