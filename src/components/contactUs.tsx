import React from "react";
import contactUs from "@/images/contactUs.svg";
import Image from "next/image";
const ContactUs = () => {
  return (
    <div className="container max-w-6xl flex items-center my-16 justify-center h- bg--800 text-white relative border border-red-300 -z-20">
        <div className="absolute inset-0 left-0  h-full ">
            <Image
              src={contactUs}
              alt="wpw"
              layout="fill"

              className="-z-10 bg--300 object-cover"
            />
          </div>
      <div className="flex justify-between gap-10 border px-24 py-28 border-gray-700 relative z-10">
        {/* ------------------------------------------------ Part 1 ---------------------------------------------------------------- */}
        <form className="flex flex-col  w-1/2 mr-16 relative z-10 mb-28 max-h-screen ">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent border-b border-gray-500 p-2  placeholder-gray-500 focus:border-gray-300 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border-b border-gray-500 p-2 mt-16  placeholder-gray-500 focus:border-gray-300 focus:outline-none"
          />
          <textarea
            id="thoughts"
            placeholder="Share your thoughts"
            className="bg-transparent border-b border-l rounded-bl-md border-gray-500 p-2 mt-16 placeholder-gray-500 focus:outline-none focus:border-gray-300 transition duration-300 h-20"
          />
          <button className="bg-blue-500 text-white py-2 px-4 mt-20  rounded hover:bg-blue-700 transition-all duration-2000">
            SHARE YOUR FEEDBACK
          </button>
        </form>
        
        {/* ------------------------------------------------ Part 2 ---------------------------------------------------------------- */}
        <div className="flex flex-col  w-1/2 text-center  ">
          <h1 className="text-6xl font-bold text-center ">
            Contact
          </h1>
          <div className="flex items-center justify-center space-x-4 my-10 ">
            <p className="border-t-4 h-2 border-green-400 w-28 "></p>
            <h2 className="text-5xl font-bold text-center">US</h2>
          </div>
          <p className="text-lg text-center max-w-md  ">
            It is very important for us to keep in touch with you, so we are
            always ready to answer any question that interests you. Shoot!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
