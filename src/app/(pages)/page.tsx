import localFont from "next/font/local";
import Globe from "@/components/globe";
import Ticker from "@/components/ticker";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Aboutus from "@/components/Aboutus";
import { SparklesCore } from "@/components/ui/sparkles";

const Bogart = localFont({
  src: "../../../public/assets/fonts/bogart/Bogart-SemiBold-trial.ttf",
});

const Glockenspiel = localFont({
  src: "../../../public/assets/fonts/LT Glockenspiel Black.ttf",
});

const Relevance = localFont({
  src: "../../../public/assets/fonts/Relevance-trial-Regular.ttf",
});

export default function Home() {
  return (
    <main>
      <div className="mb-24">
        <div className="h-[70vh] w-full justify-center items-center flex px-4 container max-w-6xl relative   ">
          {/*  <div className={Bogart.className}>
        <div className="scroll-m-20 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-normal lg:text-5xl text-center space-y-3 justify-center w-2/3">
          Experience Our Modern web development {<br />}
        </div>
      </div> */}
          <div className="flex items-center  ">
            {/* ----------------------------------- HERO SECTION ---------------------------------------------------- */}

            <div className="w-3/5 -mt-28 space-y-5">
              <div
                className={`leading-tight tracking-wide text-5xl text-gray-50 ${Glockenspiel.className}`}
              >
                EXPERIENCE OUR EXPERT AGENCY SERVICES
              </div>
              <div
                className={`text-xl text-gray-300 leading-relaxed ${Relevance.className}`}
              >
                We are a digital agency that specializes in building and scaling
                cutting-edge digital products for startups and industrial giants
              </div>
            </div>
            {/* ----------------------------------- THE GLOBE ---------------------------------------------------- */}

            <div className="absolute top-0 right-0 h-full w-[800px] overflow-visible -mr-44">
              <Globe />
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------- Ticker ---------------------------------------------------- */}

      <div className="w-full text-gray-50 text-4xl font-semibold h-16 -mt-10  flex items-center">
        <Ticker />
      </div>
      <div className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 ">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={60}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="relative z-20">
          {/* ------------------------------------ Services ------------------------------------------------- */}
          <Services />

          {/* ------------------------------------ About US ------------------------------------------------- */}
          <Aboutus />

          {/* ------------------------------------ OUR PROCESS ---------------------------------------------- */}
          <Process />
        </div>
      </div>

      
    </main>
  );
}
