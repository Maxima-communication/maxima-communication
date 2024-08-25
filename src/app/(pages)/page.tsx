"use client";

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import localFont from "next/font/local";
import { Element } from "react-scroll";
import { useLenis } from "lenis/react";

// Disable Lenis for now to see if it's causing issues
// const Lenis = dynamic(() => import('lenis/react').then(mod => mod.Lenis), {
//   ssr: false
// });

const Ticker = dynamic(() => import("@/components/ticker"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const Process = dynamic(() => import("@/components/Process"), { ssr: false });
const Aboutus = dynamic(() => import("@/components/Aboutus"), { ssr: false });
const ContactUs = dynamic(() => import("@/components/contactUs"), { ssr: false });
const AnimatedLogoCloud = dynamic(() => import("@/components/cloud-logo").then(mod => mod.AnimatedLogoCloud), { ssr: false });
const Hero = dynamic(() => import("@/components/hero"), { ssr: false });

// Use a different font or adjust the import path
// const Relevance = localFont({
//   src: "../../../public/assets/fonts/Relevance-trial-Regular.ttf",
// });

function Page() {
  useEffect(() => {
    // Add any necessary effects here
  }, []);

  return (
    <div>
      {/* <Lenis> */}
        <Element name="hero">
          <Hero />
        </Element>
        <Element name="services">
          <Services />
        </Element>
        <Element name="process">
          <Process />
        </Element>
        <Element name="aboutus">
          <Aboutus />
        </Element>
        <Element name="contactus">
          <ContactUs />
        </Element>
        <Element name="ticker">
          <Ticker />
        </Element>
        <Element name="animated-logo-cloud">
          <AnimatedLogoCloud />
        </Element>
      {/* </Lenis> */}
    </div>
  );
}

export default Page;