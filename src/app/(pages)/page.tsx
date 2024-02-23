import localFont from "next/font/local";

const Bogart = localFont({
  src: "../../../public/assets/fonts/bogart/Bogart-SemiBold-trial.ttf",
});

export default function Home() {
  return (
    <main>
      <div className="h-[70vh] w-full justify-center items-center flex px-4  container max-w-6xl">
        {/*  <div className={Bogart.className}>
        <div className="scroll-m-20 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-normal lg:text-5xl text-center space-y-3 justify-center w-2/3">
          Experience Our Modern web development {<br />}
        </div>
      </div> */}
        <div className="w-3/5 text-center text-2xl font-extrabold ">
          Experience Our Modern web development
        </div>
        <div className="h-full w-2/5 flex items-center justify-center bg-slate-700 ">
          The GLOBE
        </div>
      </div>
      <div className="w-full bg-slate-400 text-center h-16">wow</div>
    </main>
  );
}
