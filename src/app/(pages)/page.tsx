import localFont from "next/font/local";
import Ticker from "@/components/ticker";
import Services from "@/components/Services";
import Process from "@/components/process";
import Aboutus from "@/components/aboutus";
import ContactUs from "@/components/contactUs";

const Relevance = localFont({
  src: "../../../public/assets/fonts/Relevance-trial-Regular.ttf",
});

const Hagrid = localFont({
  src: "../../../public/assets/fonts/hagrid/Hagrid-Text-Extrabold-trial.ttf",
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
  return (
    <main>
      <div className="h-[70vh] w-full my-14 justify-center items-center flex px-4 container max-w-6xl relative">
        <div className="w-4/5 -mt-28 space-y-5 text-center">
          <h1
            className={`leading-tighter text-9xl text-white opacity-95 ${TestFont.className}`}
          >
            Voice your{` `}
            <span className={`${FlippedFont.className}`}>
            vision
            </span>
          </h1>
          <h6
            className={`text-xl text-gray-200 leading-relaxed ${Relevance.className}`}
          >
            We are a digital agency that specializes in building and scaling
            cutting-edge digital products for startups and industrial giants
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
