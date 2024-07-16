import React from 'react';
import localFont from "next/font/local";

const ParaFont = localFont({
    src: "../../public/assets/fonts/area/AreaNormalTrial-Medium-BF65ea75c66b01c.otf",
});

const TestFont = localFont({
    src: "../../public/assets/fonts/area/AreaInktrapTrial-Extrabold-BF65ea75c482e6b.otf",
});

const FlippedFont = localFont({
    src: "../../public/assets/fonts/distant_feeling/Distant Feeling-Italic.ttf",
});

const DescFont = localFont({
  src: "../../public/assets/fonts/recoleta/Recoleta-RegularDEMO.otf",
});

const EyeShape = () => (
  <svg
      width="201"
      height="108"
      viewBox="0 0 201 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-12 -right-[6px] w-20 h-auto opacity-60"
      transform="rotate(5)"
  >
      <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M100.499 107.877C141.647 107.877 177.351 81.54 195.127 65.673C202.289 59.28 202.289 48.597 195.127 42.204C177.351 26.3371 141.647 0 100.499 0C59.3516 0 23.6479 26.3371 5.87163 42.2041C-1.29055 48.597 -1.29054 59.28 5.87164 65.673C23.6479 81.54 59.3516 107.877 100.499 107.877ZM100.499 91.57C121.283 91.57 138.131 74.722 138.131 53.9383C138.131 33.1551 121.283 16.3069 100.499 16.3069C79.7161 16.3069 62.868 33.1551 62.868 53.9383C62.868 74.722 79.7161 91.57 100.499 91.57Z"
      />
      <path
          d="M100.499 91.57C121.283 91.57 138.131 74.722 138.131 53.9383C138.131 33.1551 121.283 16.3069 100.499 16.3069C79.7161 16.3069 62.868 33.1551 62.868 53.9383C62.868 74.722 79.7161 91.57 100.499 91.57Z"
          fill="url(#eye-gradient)"
      />
      <defs>
          <linearGradient id="eye-gradient" x1="0" y1="0" x2="201" y2="108" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8B5CF6"/>
              <stop offset="1" stopColor="#EC4899"/>
          </linearGradient>
      </defs>
  </svg>
);

// const ArrowShape = () => (
//   <svg
//     width="201"
//     height="200"
//     viewBox="0 0 201 200"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     className="absolute top-[76px] -left-4 w-72 h-auto opacity-70"
//     style={{ transform: 'rotate(-20deg)' }}
//   >
//     <path
//       d="M200 0V60V200H140V130C140 168.66 108.66 200 70 200C31.34 200 0 168.66 0 130C0 91.34 31.34 60 70 60C108.66 60 140 91.34 140 130V60H70H0V0H140H200Z"
//       stroke="url(#arrow-gradient)"
//       strokeWidth="2"
//       strokeLinejoin="round"
//       fill="none"
//     />
//     <defs>
//       <linearGradient id="arrow-gradient" x1="0" y1="0" x2="201" y2="200" gradientUnits="userSpaceOnUse" className='bg-purple-950'>
//         <stop stopColor="#8B5CF6"/>
//         <stop offset="1" stopColor="#8B5CF6"/>
//       </linearGradient>
//     </defs>
//   </svg>
// );


const CircleShape = () => (
    <svg width="201" height="200" viewBox="0 0 201 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[23px] -right-[2.75px] w-[88px] h-auto opacity-60">
        <mask id="mask0_1_853" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="201" height="200">
            <path d="M200.5 0H0.5V200H200.5V0Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_1_853)">
            <path fillRule="evenodd" clipRule="evenodd" d="M188.5 100C188.5 148.601 149.101 188 100.5 188C51.8989 188 12.5 148.601 12.5 100C12.5 51.3989 51.8989 12 100.5 12C149.101 12 188.5 51.3989 188.5 100ZM200.5 100C200.5 155.228 155.728 200 100.5 200C45.2715 200 0.5 155.228 0.5 100C0.5 44.7715 45.2715 0 100.5 0C155.728 0 200.5 44.7715 200.5 100ZM100.5 111C106.575 111 111.5 106.075 111.5 100C111.5 93.9249 106.575 89 100.5 89C94.4249 89 89.5 93.9249 89.5 100C89.5 106.075 94.4249 111 100.5 111Z" fill="url(#circle-gradient)"/>
        </g>
        <defs>
            <linearGradient id="circle-gradient" x1="0" y1="0" x2="201" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8B5CF6"/>
                <stop offset="1" stopColor="#EC4899"/>
            </linearGradient>
        </defs>
    </svg>
);

export default function Hero() {
    return (
        <div className="h-[55vh] w-screen justify-center items-center flex px-4 container max-w-6xl relative">
            {/* <EyeShape /> */}
            {/* <ArrowShape /> */}
            {/* <CircleShape /> */}
            <div className="w-4/5 -mt-14 space-y-5 text-center relative z-10">
                <h1 className={`leading-tighter text-9xl text-white opacity-95 ${TestFont.className}`}>
                    Voice y<span className='relative'>o
                    <CircleShape />
                      </span>ur{` `}
                    <span className={`${FlippedFont.className}`}>visi<span className='relative'><EyeShape />o</span>n</span>
                </h1>
                <h6 className={`pt-5 text-xl mx-auto text-neutral-100 tracking-wide`}>
                <span className={`${DescFont.className}`}> Transform Your Vision Into Reality </span> {`——`} <span className={`${DescFont.className}`}> Let's Bring Your Ideas to Life with a </span>{` `} 
                <span className={`${DescFont.className} font-bold`}>
                  FREE
                </span>
                {` `}<span className={`${DescFont.className}`}>Consultation</span>
                </h6>
            </div>
        </div>
    )
}
