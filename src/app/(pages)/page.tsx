import localFont from "next/font/local";
import Ticker from "@/components/ticker";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Aboutus from "@/components/Aboutus";
import ContactUs from "@/components/contactUs";
// import { SparklesCore } from "@/components/ui/sparkles";

const Bogart = localFont({
  src: "../../../public/assets/fonts/bogart/Bogart-SemiBold-trial.ttf",
});

const Glockenspiel = localFont({
  src: "../../../public/assets/fonts/LT Glockenspiel Black.ttf",
});

const Relevance = localFont({
  src: "../../../public/assets/fonts/Relevance-trial-Regular.ttf",
});

const Coolvetica = localFont({
  src: "../../../public/assets/fonts/coolvetica/coolvetica rg.otf",
});

const Hagrid = localFont({
  src: "../../../public/assets/fonts/hagrid/Hagrid-Text-Extrabold-trial.ttf",
});

export default function Home() {
  return (
    <main>
        <div className="h-[70vh] w-full justify-center items-center flex px-4 container max-w-6xl relative">
            <div className="w-4/5 -mt-28 space-y-5 text-center">
              <h1
                className={`leading-tight tracking-wider text-7xl text-gray-100 ${Hagrid.className}`}
              >
                EXPERIENCE OUR EXPERT AGENCY SERVICES
              </h1>
              <h6
                className={`text-xl text-gray-300 leading-relaxed ${Relevance.className}`}
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
