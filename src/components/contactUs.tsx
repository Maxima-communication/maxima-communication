"use client";

import React, { useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import localFont from "next/font/local";
import { MeteorDemo } from "./meteorDemo";

const Engebrechtre = localFont({
  src: "../../public/assets/fonts/engebrechtre/Engebrechtre Bd.otf",
});
const TestFont = localFont({
  src: "../../public/assets/fonts/tabarra/TabarraPro-Light-FFP.ttf",
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
    <div className="container relative flex flex-col w-1/2 sm:w-screen bg-cover bg-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      <div className="absolute top-0 right-0 w-full h-full">
        <MeteorDemo />
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Part 1 */}
        <div className="w-full lg:w-1/2 relative p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="text-white flex flex-col space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 my-4 sm:my-6 md:my-8 lg:my-10 mx-2 sm:mx-4 md:mx-6 lg:mx-8 p-2 sm:p-3 md:p-4 lg:p-6">
            <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
              <p className={`font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-[#dee1d3] ${Engebrechtre.className}`}>
                HAVE A PROJECT IN MIND?
              </p>
              <p className={`font-semibold text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed ${TestFont.className}`}>
                Reach out to us. We can make something awesome together.
              </p>
            </div>
            <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
              <div>
                <p className={`font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-[#dee1d3] mb-1 ${Engebrechtre.className}`}>
                  ADDRESS
                </p>
                <p className={`text-sm sm:text-base md:text-lg lg:text-xl ${TestFont.className}`}>Agadir</p>
              </div>
              <div>
                <p className={`font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-[#dee1d3] mb-1 ${Engebrechtre.className}`}>
                  EMAIL
                </p>
                <p className={`text-sm sm:text-base md:text-lg lg:text-xl ${TestFont.className}`}>
                  maximaCom@gmail.com
                </p>
              </div>
              <div>
                <p className={`font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-[#dee1d3] mb-1 ${Engebrechtre.className}`}>
                  PHONE
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl">+212 661 683 415</p>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2 */}
        <div className="w-full lg:w-1/2 px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12 z-10 bg-opacity-80 text-white">
          <div className="mt-3 sm:mt-4 md:mt-6 lg:mt-8 ml-1 sm:ml-2 md:ml-4 lg:ml-6">
            <p className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 pl-1 sm:pl-2 md:pl-4 lg:pl-6 ${Engebrechtre.className}`}>
              CONTACT US
            </p>
            <form className="flex flex-col w-full lg:w-11/12 pl-1 sm:pl-2 md:pl-4 lg:pl-6" ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                required
                placeholder="Your Name"
                name="user_name"
                className="bg-[#141414] mb-4 sm:mb-5 md:mb-6 lg:mb-8 border-b-2 sm:border-b-3 md:border-b-4 lg:border-b-5 border-l-2 sm:border-l-3 md:border-l-4 lg:border-l-5 border-[#5c3a78] rounded-lg sm:rounded-xl py-2 sm:py-3 md:py-4 lg:py-5 px-3 sm:px-4 md:px-5 lg:px-6 placeholder-gray-400 text-white text-sm sm:text-base md:text-lg lg:text-xl focus:border-b-0 focus:border-l-0 focus:shadow-md sm:focus:shadow-lg md:focus:shadow-xl focus:shadow-[#a978cc] focus:outline-none transition-all duration-500 ease-out"
              />
              <input
                type="tel"
                required
                placeholder="Your Number"
                name="user_Number"
                className="bg-[#141414] mb-4 sm:mb-5 md:mb-6 lg:mb-8 border-b-2 sm:border-b-3 md:border-b-4 lg:border-b-5 border-l-2 sm:border-l-3 md:border-l-4 lg:border-l-5 border-[#5c3a78] rounded-lg sm:rounded-xl py-2 sm:py-3 md:py-4 lg:py-5 px-3 sm:px-4 md:px-5 lg:px-6 placeholder-gray-400 text-white text-sm sm:text-base md:text-lg lg:text-xl focus:border-b-0 focus:border-l-0 focus:shadow-md sm:focus:shadow-lg md:focus:shadow-xl focus:shadow-[#a978cc] focus:outline-none transition-all duration-500 ease-out"
              />
              <input
                type="email"
                required
                placeholder="Your Email"
                name="user_Email"
                className="bg-[#141414] mb-4 sm:mb-5 md:mb-6 lg:mb-8 border-b-2 sm:border-b-3 md:border-b-4 lg:border-b-5 border-l-2 sm:border-l-3 md:border-l-4 lg:border-l-5 border-[#5c3a78] rounded-lg sm:rounded-xl py-2 sm:py-3 md:py-4 lg:py-5 px-3 sm:px-4 md:px-5 lg:px-6 placeholder-gray-400 text-white text-sm sm:text-base md:text-lg lg:text-xl focus:border-b-0 focus:border-l-0 focus:shadow-md sm:focus:shadow-lg md:focus:shadow-xl focus:shadow-[#a978cc] focus:outline-none transition-all duration-500 ease-out"
              />
              <textarea
                id="thoughts"
                required
                placeholder="Share your thoughts"
                name="message"
                className="bg-[#141414] mb-6 sm:mb-8 md:mb-10 lg:mb-12 border-b-2 sm:border-b-3 md:border-b-4 lg:border-b-5 border-l-2 sm:border-l-3 md:border-l-4 lg:border-l-5 border-[#5c3a78] rounded-lg sm:rounded-xl py-2 sm:py-3 md:py-4 lg:py-5 px-3 sm:px-4 md:px-5 lg:px-6 placeholder-gray-400 text-white text-sm sm:text-base md:text-lg lg:text-xl focus:border-b-0 focus:border-l-0 focus:shadow-md sm:focus:shadow-lg md:focus:shadow-xl focus:shadow-[#a978cc] focus:outline-none transition-all duration-500 ease-out h-20 sm:h-24 md:h-28 lg:h-32"
              />
              <input
                type="submit"
                value="SEND MESSAGE"
                className="bg-black border-[#5c3a78] py-2 sm:py-3 md:py-4 lg:py-5 font-semibold cursor-pointer rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg lg:text-xl hover:bg-[#141414] hover:shadow-md sm:hover:shadow-lg md:hover:shadow-xl hover:shadow-[#a978cc] transition-all duration-500 ease-in-out focus:outline-none"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
