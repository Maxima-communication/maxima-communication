import localFont from "next/font/local";
import Ticker from "@/components/ticker";
import Services from "@/components/Services";
import Process from "@/components/process";
import Aboutus from "@/components/aboutus";
import ContactUs from "@/components/contactUs";
import { FlipWords } from "@/components/ui/flip-words";

const Relevance = localFont({
  src: "../../../public/assets/fonts/Relevance-trial-Regular.ttf",
});

const ParaFont = localFont({
  src: "../../../public/assets/fonts/area/AreaNormalTrial-Medium-BF65ea75c66b01c.otf",
});

// Testing font
const TestFont = localFont({
  src: "../../../public/assets/fonts/area/AreaInktrapTrial-Extrabold-BF65ea75c482e6b.otf",
});

// Flipped font
const FlippedFont = localFont({
  src: "../../../public/assets/fonts/distant_feeling/Distant Feeling-Italic.ttf",
});

export default function Home() {
  const words = [
    "Builders",
    "Architects",
    "Creators",
    "Designers",
    "Engineers",
  ];

  return (
    <main>
      <div className="h-[70vh] w-full justify-center items-center flex px-4 container max-w-6xl relative">
        <div className="w-4/5 -mt-20 space-y-5 text-center">
          <h1
            className={`leading-tighter text-9xl text-white opacity-95 ${TestFont.className}`}
          >
            Voice your{` `}
            <span className={`${FlippedFont.className}`}>vision</span>
          </h1>
          <h6
            className={`text-xl mx-auto text-neutral-100 tracking-wide ${ParaFont.className}`}
          >
            {/* Digital
            <FlipWords words={words} /> */}
            Jumpstart Your Project with a{" "}
            <span className={`font-semibold`}>
            FREE
            </span>{" "}
             Consultation
          </h6>
        </div>
      </div>
      <div className="w-full text-gray-50 text-4xl font-semibold h-16 flex items-center">
        <Ticker />
      </div>
      <div className="h-full relative w-full flex flex-col items-center justify-center">
        <div className="relative z-20">
          <Services />
          <Aboutus />
          <Process />

          {/* ------------------------------------ Contact Us ---------------------------------------------- */}
          <ContactUs />
        </div>
      </div>
    </main>
  );
}
