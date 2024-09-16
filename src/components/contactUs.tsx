"use client";

import React, { useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import localFont from "next/font/local";
import { MeteorDemo } from "./meteorDemo";
import { Mail, MapPin, MessagesSquare, PhoneCall } from "lucide-react";
import SparklesText from "./ui/sparkles";

const TestFont = localFont({
  src: "../../public/assets/fonts/lt_superior/LTSuperior-Light.otf",
});

const TestFont2 = localFont({
  src: "../../public/assets/fonts/heavitas/Heavitas.ttf",
});

const TestFont3 = localFont({
  src: "../../public/assets/fonts/area/AreaNormalTrial-Semibold-BF65ea75c6b547e.otf",
});

const ContactUs = () => {
  const form = useRef<any>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("service_67y2qdr", "template_3tw03b2", form.current, {
        publicKey: "INzBYV3etTXU2zl20",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    form.current.reset();
  };

  return (
    <div className="container relative flex flex-col w-screen bg-cover bg-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      <div className="absolute top-0 right-0 w-full h-full">
        <MeteorDemo />
      </div>

      <div className="flex flex-col lg:flex-row z-10">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10 my-12">
          <p
            className={`opacity-80 font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-white ${TestFont2.className} mb-4 sm:mb-6 md:mb-8 lg:mb-10`}
          >
            HAVE A{" "}
            <span className="inline-block">
              <SparklesText text="PROJECT" className="inline-block" />
            </span>{" "}
            IN MIND?
          </p>
          <div className="text-white flex flex-col space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
            <p
              className={`font-medium text-sm sm:text-base md:text-xl leading-relaxed text-stone-300 ${TestFont.className}`}
            >
              Got ideas? We've got the skills! Let's team up.
            </p>
            <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
              <div className="pt-10">
                <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6">
                <div className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-xl sm:rounded-2xl shadow-inner flex items-center justify-center bg-[#141414] hover:shadow-[#a978cc] shadow-stone-400 transition-all duration-500 ease-in-out">
                <MessagesSquare size={20} className="text-[#dee1d3] opacity-80" />
                  </div>
                  <div>
                    <p
                      className={`font-bold text-base sm:text-lg md:text-xl text-[#dee1d3] mb-1 ${TestFont.className}`}
                    >
                      Chat with us
                    </p>
                    <p
                      className={`text-sm sm:text-base md:text-lg text-stone-400 ${TestFont.className}`}
                    >
                      Our friendly team is here to help.
                    </p>
                  </div>
                </div>
                <div>
                  <p
                    className={`font-medium text-purple-200 text-opacity-75 text-xs sm:text-base md:text-lg ml-[53px] sm:ml-[70px] lg:ml-20 mt-2 ${TestFont3.className}`}
                    >
                    web.maxima.communication@gmail.com
                  </p>
                </div>
              </div>
              <div className="pt-10">
                <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6">
                <div className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-xl sm:rounded-2xl shadow-inner flex items-center justify-center bg-[#141414] hover:shadow-[#a978cc] shadow-stone-400 transition-all duration-500 ease-in-out">
                <MapPin size={20} className="text-[#dee1d3] opacity-80" />
                  </div>
                  <div>
                    <p
                      className={`font-bold text-base sm:text-lg md:text-xl text-[#dee1d3] mb-1 ${TestFont.className}`}
                    >
                      Visit us
                    </p>
                    <p
                      className={`text-sm sm:text-base md:text-lg text-stone-400 ${TestFont.className}`}
                    >
                      Come say hello at our office HQ.
                    </p>
                  </div>
                </div>
                <div>
                  <p
                    className={`font-medium text-purple-200 text-opacity-75 text-xs sm:text-base md:text-lg ml-[53px] sm:ml-[70px] lg:ml-20 mt-2 ${TestFont3.className}`}
                    >
                    54 Avenue Hassan 2, Inezgane, Morocco
                  </p>
                </div>
              </div>
              <div className="pt-10">
                <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6">
                <div className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-xl sm:rounded-2xl shadow-inner flex items-center justify-center bg-[#141414] hover:shadow-[#a978cc] shadow-stone-400 transition-all duration-500 ease-in-out">
                    <PhoneCall size={20} className="text-[#dee1d3] opacity-80" />
                  </div>
                  <div>
                    <p
                      className={`font-bold text-base sm:text-lg md:text-xl text-[#dee1d3] mb-1 ${TestFont.className}`}
                    >
                      Call us
                    </p>
                    <p
                      className={`text-xs sm:text-base md:text-lg text-stone-400 ${TestFont.className}`}
                    >
                      Monday - Friday || 8:00 - 18:00.
                    </p>
                  </div>
                </div>
                <div>
                  <p
                    className={`font-medium text-purple-200 text-opacity-75 text-sm sm:text-base md:text-lg ml-[53px] sm:ml-[70px] lg:ml-20 mt-2 ${TestFont3.className}`}
                    >
                    +212 (0) 528 335 068
                  </p>
                  <p
                    className={`font-medium text-purple-200 text-opacity-75 text-sm sm:text-base md:text-lg ml-[53px] sm:ml-[70px] lg:ml-20 mt-2 ${TestFont3.className}`}
                    >
                    +212 (0) 717 487 818
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2 */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10 sm:mb-12 sm:-mt-6 lg:my-12 z-10 bg-opacity-80 text-white">
          <p
            className={`opacity-80 text-center sm:text-start text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white ${TestFont2.className} mb-4 sm:mb-6 md:mb-8 lg:mb-10`}
          >
            CONTACT US
          </p>
          <form
            className="flex flex-col w-full"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              required
              placeholder="Your Name"
              name="user_name"
              className="bg-[#141414] mb-4 sm:mb-5 md:mb-6 lg:mb-8 border-b-2 sm:border-b-3 md:border-b-4 lg:border-b-5 border-l-2 sm:border-l-3 md:border-l-4 lg:border-l-5 border-[#5c3a78] rounded-[8px] sm:rounded-xl py-2 sm:py-3 md:py-4 lg:py-5 px-3 sm:px-4 md:px-5 lg:px-6 placeholder-gray-400 text-white text-sm sm:text-base md:text-lg focus:border-b-0 focus:border-l-0 focus:shadow-md sm:focus:shadow-lg md:focus:shadow-xl focus:shadow-[#a978cc] focus:outline-none transition-all duration-500 ease-out"
            />
            <input
              type="tel"
              required
              placeholder="Your Number"
              name="user_Number"
              className="bg-[#141414] mb-4 sm:mb-5 md:mb-6 lg:mb-8 border-b-2 sm:border-b-3 md:border-b-4 lg:border-b-5 border-l-2 sm:border-l-3 md:border-l-4 lg:border-l-5 border-[#5c3a78] rounded-[8px] sm:rounded-xl py-2 sm:py-3 md:py-4 lg:py-5 px-3 sm:px-4 md:px-5 lg:px-6 placeholder-gray-400 text-white text-sm sm:text-base md:text-lg focus:border-b-0 focus:border-l-0 focus:shadow-md sm:focus:shadow-lg md:focus:shadow-xl focus:shadow-[#a978cc] focus:outline-none transition-all duration-500 ease-out"
            />
            <input
              type="email"
              required
              placeholder="Your Email Address"
              name="user_Email"
              className="bg-[#141414] mb-4 sm:mb-5 md:mb-6 lg:mb-8 border-b-2 sm:border-b-3 md:border-b-4 lg:border-b-5 border-l-2 sm:border-l-3 md:border-l-4 lg:border-l-5 border-[#5c3a78] rounded-[8px] sm:rounded-xl py-2 sm:py-3 md:py-4 lg:py-5 px-3 sm:px-4 md:px-5 lg:px-6 placeholder-gray-400 text-white text-sm sm:text-base md:text-lg focus:border-b-0 focus:border-l-0 focus:shadow-md sm:focus:shadow-lg md:focus:shadow-xl focus:shadow-[#a978cc] focus:outline-none transition-all duration-500 ease-out"
            />
            <textarea
              id="thoughts"
              required
              placeholder="Share your thoughts"
              name="message"
              className="bg-[#141414] mb-6 sm:mb-8 md:mb-10 lg:mb-12 border-b-2 sm:border-b-3 md:border-b-4 lg:border-b-5 border-l-2 sm:border-l-3 md:border-l-4 lg:border-l-5 border-[#5c3a78] rounded-[8px] sm:rounded-xl py-2 sm:py-3 md:py-4 lg:py-5 px-3 sm:px-4 md:px-5 lg:px-6 placeholder-gray-400 text-white text-sm sm:text-base md:text-lg focus:border-b-0 focus:border-l-0 focus:shadow-md sm:focus:shadow-lg md:focus:shadow-xl focus:shadow-[#a978cc] focus:outline-none transition-all duration-500 ease-out h-20 sm:h-24 md:h-28 lg:h-32"
            />
            <button
              type="submit"
              className={`bg-black text-stone-300 border-[#5c3a78] hover:border-2 py-2 sm:py-3 md:py-4 lg:py-5 font-extrabold cursor-pointer rounded-[8px] sm:rounded-xl text-sm sm:text-base hover:bg-[#141414] hover:shadow-md sm:hover:shadow-lg md:hover:shadow-xl hover:shadow-[#a978cc] focus:outline-none mb-10 sm:mb-0 ${TestFont3.className}`}
            >SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
