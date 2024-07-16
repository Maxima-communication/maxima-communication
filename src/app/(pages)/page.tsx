import localFont from "next/font/local";
import Ticker from "@/components/ticker";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Aboutus from "@/components/Aboutus";
import ContactUs from "@/components/contactUs";
import { FlipWords } from "@/components/ui/flip-words";
import {AnimatedLogoCloud} from "@/components/cloud-logo";
import Hero from "@/components/hero";

const Relevance = localFont({
  src: "../../../public/assets/fonts/Relevance-trial-Regular.ttf",
});

export default function Home() {

  return (
    <main>
      <Hero />
      <AnimatedLogoCloud />
      <div className="h-full relative w-screen flex flex-col items-center justify-center">
        <div className="relative z-20">
          <Services />
          <div className="w-screen text-gray-50 text-4xl font-semibold h-16 flex items-center pb-24 pt-36">
          <Ticker />
          </div>
          <Aboutus />
          <Process />

          {/* ------------------------------------ Contact Us ---------------------------------------------- */}
          <ContactUs />
        </div>
      </div>
    </main>
  );
}
