"use client";
import React, { useRef } from "react";
import Image from "next/image";
import first from "../images/Geo Wave 15(2).svg";
import emailjs from "@emailjs/browser";
import "../styles/globals.css";
import localFont from "next/font/local";

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
    <div
      className="container relative flex flex-col bg-cover bg-center mb-28"
      /* style={{ backgroundImage: `url(${})` }} */
    >
      <div className="absolute top-0 right-0  w-full h-full">
        <Image
          src={first}
          alt="Mesh Background"
          layout="fill"
          objectFit="cover"
          className="opacity-85   mix-blend-screen z-[-1]  overflow-hidden"
        />
      </div>
      <div className="flex">
        {/* ------------------------------------ Part 1 --------------------------------------------------- */}
        <div className="w-1/2 relative  p-10">
          <div className="text-white flex flex-col space-y-20 my-10 mx-20 p-10">
            <div className="flex flex-col space-y-6 ">
              <p
                className={`font-bold text-5xl leading-tight text-[#dee1d3] ${Engebrechtre.className}`}
              >
                HAVE A PROJECT IN MIND?
              </p>
              <p
                className={`font-semibold text-lg leading-relaxed ${TestFont.className}`}
              >
                Reach out to us. We can make something awesome together.
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div>
                <p
                  className={`font-bold text-xl text-[#dee1d3] mb-1 ${Engebrechtre.className}`}
                >
                  ADDRESS
                </p>
                <p className={`text-lg ${TestFont.className}`}>Agadir</p>
              </div>
              <div>
                <p
                  className={`font-bold text-xl text-[#dee1d3] mb-1 ${Engebrechtre.className}`}
                >
                  EMAIL
                </p>
                <p className={`text-lg ${TestFont.className}`}>
                  maximaCom@gmail.com
                </p>
              </div>
              <div>
                <p
                  className={`font-bold text-xl text-[#dee1d3] mb-1 ${Engebrechtre.className}`}
                >
                  PHONE
                </p>
                <p className="text-lg">+212 661 683 415</p>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------ Part 2 --------------------------------------------------- */}
        <div className="w-1/2  border- px-6 py-16 z-50 bg--950 text-white">
          <div className="mt-8 ml-8">
            <p
              className={`text-4xl font-bold mb-14 pl-6 ${Engebrechtre.className}`}
            >
              CONTACT US
            </p>
            <form
              className="flex flex-col w-3/4 pl-6"
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                type="text"
                required
                placeholder="Your Name"
                name="user_name"
                className="bg-[#141414] mb-10 border-b-8 border-l-8 border-[#5c3a78]   rounded-xl py-4 px-6 placeholder-gray-400 text-white focus:border-b-0 focus:border-l-0 focus:shadow-xl focus:shadow-[#a978cc] focus:outline-none transition-all duration-500 ease-out"
              />
              <input
                type="tel"
                required
                placeholder="Your Number"
                name="user_Number"
                className="bg-[#141414] mb-10 border-b-8 border-l-8  border-[#5c3a78]    rounded-xl py-4 px-6 placeholder-gray-400 text-white focus:border-b-0 focus:border-l-0  focus:shadow-xl focus:shadow-[#a978cc] focus:outline-none transition-all duration-500 ease-out"
              />
              <input
                type="email"
                required
                placeholder="Your Email"
                name="user_Email"
                className="bg-[#141414] mb-10 border-b-8 border-l-8 border-[#5c3a78]   rounded-xl py-4 px-6 placeholder-gray-400 text-white focus:border-b-0 focus:border-l-0 focus:shadow-xl focus:shadow-[#a978cc] focus:outline-none transition-all duration-500 ease-out"
              />

              <input
                id="thoughts"
                required
                placeholder="Share your thoughts"
                name="message"
                className="bg-[#141414] mb-16 border-b-8 border-l-8   border-[#5c3a78]   rounded-xl pb-12 px-6 placeholder-gray-400 text-white focus:border-b-0 focus:border-l-0 focus:shadow-xl focus:shadow-[#a978cc] focus:outline-none transition-all duration-500 ease-out h-28"
              />
              <input
                type="submit"
                value="SEND MESSAGE"
                className="bg-black border-[#5c3a78]  py-3   font-semibold cursor-pointer  rounded-xl hover:bg-[#141414] hover:shadow-xl hover:shadow-[#a978cc] hover:text-[#c588f0] transition-all duration-500 ease-in-out focus:outline-none"
              />
              {/*  <a
                href="#_"
                className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black hover:text-white transition-all duration-150 ease-in-out rounded-xl hover:pl-10 hover:pr-6 bg-gray-50 hover:bg-[#141414] group border hover:border-gray-500 hover:backdrop-blur-3xl"
              >
                
                <span
                  className={`relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-white`}
                >
                  SEND YOUR MESSAGE
                </span>
              </a> */}
            </form>
          </div>
        </div>
      </div>
      {/* ------------------------------------ Part 3 --------------------------------------------------- */}
      {/* <div className="text-[#e4dfeb]  text-center bg-purple-900 bg-opacity-10 p-6">
        Thank you for considering us for your project. We look forward to
        collaborating with you to create something extraordinary. Feel free to
        reach out via the contact form, email, or phone. Our team is here to
        assist you and answer any questions you may have.
      </div> */}
    </div>
  );
};

export default ContactUs;
