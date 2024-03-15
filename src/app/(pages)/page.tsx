import localFont from "next/font/local";
import Globe from "@/components/globe";

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
      <div className="h-[70vh] w-full justify-center items-center flex px-4 container max-w-6xl relative  ">
        {/*  <div className={Bogart.className}>
        <div className="scroll-m-20 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-normal lg:text-5xl text-center space-y-3 justify-center w-2/3">
          Experience Our Modern web development {<br />}
        </div>
      </div> */}
        <div className="flex items-center  ">
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
          <div className="absolute top-0 right-0 h-full w-[800px] overflow-visible -mr-44">
            <Globe />
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-400 text-center h-16">test test</div>
    </main>
  );
}
