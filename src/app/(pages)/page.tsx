"use client";

import { useEffect } from 'react';
import { Element } from "react-scroll";
import dynamic from 'next/dynamic';

const Ticker = dynamic(() => import("@/components/ticker"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const Process = dynamic(() => import("@/components/Process"), { ssr: false });
const Aboutus = dynamic(() => import("@/components/Aboutus"), { ssr: false });
const ContactUs = dynamic(() => import("@/components/contactUs"), { ssr: false });
const AnimatedLogoCloud = dynamic(() => import("@/components/cloud-logo").then(mod => mod.AnimatedLogoCloud), { ssr: false });
const Hero = dynamic(() => import("@/components/hero"), { ssr: false });

function Page() {
  useEffect(() => {
    // Add any necessary effects here
  }, []);

  return (
    <main className="">
      <Element name="hero">
        <Hero />
      </Element>
      <AnimatedLogoCloud />
      <div className="h-full relative w-screen flex md:flex-col md:items-center md:justify-center">
        <div className="relative z-20">
          <Element name="services">
            <Services />
          </Element>
          <div className="w-screen text-gray-50 font-semibold h-16 flex items-center pb-36 md:pb-40 lg:pb-24 pt-24 lg:pt-36">
            <Ticker />
          </div>
          <Aboutus />
          <Element name="process">
            <Process />
          </Element>
          <Element name="contactus">
            <ContactUs />
          </Element>
        </div>
      </div>
    </main>
  );
}

export default Page;