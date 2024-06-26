"use client";
import React, { useRef } from "react";
import Image from "next/image";
import first from "../images/markus.jpg";
import emailjs from "@emailjs/browser";
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
          className="blur-[8.6px] z-[-1] container overflow-hidden"
        />
      </div>
      <div className="flex">
        {/* ------------------------------------ Part 1 --------------------------------------------------- */}
        <div className="w-1/2 relative  p-10">
          <div className="text-white flex flex-col space-y-20 my-10 mx-20 p-10">
            <div className="flex flex-col space-y-6">
              <p className="font-bold text-5xl leading-tight">
                Have a project in mind?
              </p>
              <p className="font-semibold text-lg leading-relaxed">
                Reach out to us. We can make something awesome together.
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div>
                <p className="font-bold text-xl mb-1">ADDRESS</p>
                <p className="text-lg">Agadir</p>
              </div>
              <div>
                <p className="font-bold text-xl mb-1">EMAIL</p>
                <p className="text-lg">maximaCom@gmail.com</p>
              </div>
              <div>
                <p className="font-bold text-xl mb-1">PHONE</p>
                <p className="text-lg">+212 661 683 415</p>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------ Part 2 --------------------------------------------------- */}
        <div className="w-1/2  border- px-6 py-16 z-50 bg--950 text-white">
          <div className="mt-8 ml-8">
            <p className="text-3xl font-bold mb-14 pl-6">Contact Us</p>
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
                className="bg-transparent mb-16 border-b border-gray-500 p-2 placeholder-gray-500 focus:border-gray-300 focus:outline-none"
              />
              <input
                type="tel"
                required
                placeholder="Your Number"
                name="user_Number"
                className="bg-transparent mb-16 border-b border-gray-500 p-2 placeholder-gray-500 focus:border-gray-300 focus:outline-none"
              />
              <input
                type="email"
                required
                placeholder="Your Email"
                name="user_Email"
                className="bg-transparent mb-16 border-b border-gray-500 p-2 placeholder-gray-500 focus:border-gray-300 focus:outline-none"
              />
              <textarea
                id="thoughts"
                required
                placeholder="Share your thoughts"
                name="message"
                className="bg-transparent mb-14 border-b border-l rounded-bl-md border-gray-500 p-2 placeholder-gray-500 focus:outline-none focus:border-gray-300 transition duration-300 h-20"
              />
              <input
                type="submit"
                value="SEND MESSAGE"
                className="bg-white text-black  py-2 px-8 font-semibold cursor-pointer hover:bg-gray-400 transition-all duration-300"
              />
            </form>
          </div>
        </div>
      </div>
      {/* ------------------------------------ Part 3 --------------------------------------------------- */}
      <div className="text-white  text-center bg-black bg-opacity-10 p-6">
        Thank you for considering us for your project. We look forward to
        collaborating with you to create something extraordinary. Feel free to
        reach out via the contact form, email, or phone. Our team is here to
        assist you and answer any questions you may have.
      </div>
    </div>
  );
};

export default ContactUs;
