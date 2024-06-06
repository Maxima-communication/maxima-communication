import localFont from "next/font/local";
import Image from "next/image";
import React from "react";
import first from "../images/first.png";
import third from "../images/third.png";
import second from "../images/second.png";
import button from "../images/button.png";

const Cocogoose = localFont({
  src: "../../public/assets/fonts/cocogoose/Cocogoose-Pro-Semilight-trial.ttf",
});

const Coolvetica = localFont({
  src: "../../public/assets/fonts/coolvetica/coolvetica rg.otf",
});

const Aboutus = () => {
  return (
    <div className="container max-w-6xl flex items-center justify-center h-[550px]">
      <div className=" h-96 flex justify-center items-center">
        <p className={`tracking-wide p-20 w-4/5 text-6xl text-gray-300 ${Coolvetica.className}`}>
          A CREATIVE{" "}
          <span className="inline-block">
            
              {/* <svg
                fill="#cfc9c9"
                width="100%"
                height="45px"
                viewBox="0 0 24.00 24.00"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                transform="rotate(90) scale(1 , 1.8) "
                stroke="#cfc9c9"
                stroke-width="0.00024000000000000003"
              > */}
                {/*  */}
                {/* <g id="SVGRepo_bgCarrier" stroke-width="0">
                  <rect
                    x="0"
                    y="0"
                    width="24.00"
                    height="24.00"
                    rx="3.12"
                    fill="#7e8081" */}
                    {/* strokewidth="0" */}
                  {/* ></rect>
                </g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M22,11A4,4,0,0,0,20,7.52,3,3,0,0,0,20,7a3,3,0,0,0-3-3l-.18,0A3,3,0,0,0,12,2.78,3,3,0,0,0,7.18,4L7,4A3,3,0,0,0,4,7a3,3,0,0,0,0,.52,4,4,0,0,0-.55,6.59A4,4,0,0,0,7,20l.18,0A3,3,0,0,0,12,21.22,3,3,0,0,0,16.82,20L17,20a4,4,0,0,0,3.5-5.89A4,4,0,0,0,22,11ZM11,8.55a4.72,4.72,0,0,0-.68-.32,1,1,0,0,0-.64,1.9A2,2,0,0,1,11,12v1.55a4.72,4.72,0,0,0-.68-.32,1,1,0,0,0-.64,1.9A2,2,0,0,1,11,17v2a1,1,0,0,1-1,1,1,1,0,0,1-.91-.6,4.07,4.07,0,0,0,.48-.33,1,1,0,1,0-1.28-1.54A2,2,0,0,1,7,18a2,2,0,0,1-2-2,2,2,0,0,1,.32-1.06A3.82,3.82,0,0,0,6,15a1,1,0,0,0,0-2,1.84,1.84,0,0,1-.69-.13A2,2,0,0,1,5,9.25a3.1,3.1,0,0,0,.46.35,1,1,0,1,0,1-1.74.9.9,0,0,1-.34-.33A.92.92,0,0,1,6,7,1,1,0,0,1,7,6a.76.76,0,0,1,.21,0,3.85,3.85,0,0,0,.19.47,1,1,0,0,0,1.37.37A1,1,0,0,0,9.13,5.5,1.06,1.06,0,0,1,9,5a1,1,0,0,1,2,0Zm7.69,4.32A1.84,1.84,0,0,1,18,13a1,1,0,0,0,0,2,3.82,3.82,0,0,0,.68-.06A2,2,0,0,1,19,16a2,2,0,0,1-2,2,2,2,0,0,1-1.29-.47,1,1,0,0,0-1.28,1.54,4.07,4.07,0,0,0,.48.33A1,1,0,0,1,14,20a1,1,0,0,1-1-1V17a2,2,0,0,1,1.32-1.87,1,1,0,0,0-.64-1.9,4.72,4.72,0,0,0-.68.32V12a2,2,0,0,1,1.32-1.87,1,1,0,0,0-.64-1.9,4.72,4.72,0,0,0-.68.32V5a1,1,0,0,1,2,0,1.06,1.06,0,0,1-.13.5,1,1,0,0,0,.36,1.37A1,1,0,0,0,16.6,6.5,3.85,3.85,0,0,0,16.79,6,.76.76,0,0,1,17,6a1,1,0,0,1,1,1,1,1,0,0,1-.17.55.9.9,0,0,1-.33.31,1,1,0,0,0,1,1.74A2.66,2.66,0,0,0,19,9.25a2,2,0,0,1-.27,3.62Z"></path>
                </g>
              </svg> */}
            <Image src={first} alt="first" className="w-36 h-10 rounded-3xl grayscale" />
          </span>{" "}
          MIND KNOWS
          <span className="inline-block">
          <Image src={second} alt="second" className="w-20 h-10 rounded-3xl grayscale mx-3" />
          </span>
          <span className="inline-block">
          HOW TO DO
          </span>
          <span className="inline-block">THE</span>
          <span className="inline-block">
          <Image src={button} alt="button" className="w-14 h-10 rounded-3xl mx-3" />
          </span> 
          <span className="inline-block">
          RIGHT THING AT
          </span>
          <span className="inline-block tracking-wide">
          THE RIGHT PLACE AND
          </span>
          <span className="inline-block">
          AT THE
          <span className="inline-block">
          <Image src={third} alt="third" className="w-24 h-10 rounded-3xl grayscale mx-3" />
          </span>RIGHT TIME
          </span>
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
