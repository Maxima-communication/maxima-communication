import React from "react";

const ContactUs = () => {
  return (
    <div className="container max-w-6xl flex items-center my-16 justify-center h-screen bg-gray-800 text-white">
      <div className="flex justify-between  border px-10 py-24 border-gray-700 ">
        <form className="flex flex-col w-1/2 space-y-4 mr-16 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent border-b border-gray-500 p-2 placeholder-gray-500 focus:border-gray-300 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border-b border-gray-500 p-2   placeholder-gray-500 focus:border-gray-300 focus:outline-none "
          />

          <textarea
            id="thoughts"
            placeholder="Share your thoughts"
            className="bg-transparent border-b border-l border-gray-500 p-2 placeholder-gray-500 focus:outline-none focus:border-gray-300 transition duration-300 h-32"
          />

          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all duration-2000">
            SHARE YOUR FEEDBACK
          </button>
        </form>
        <div className="flex flex-col items-center justify-center w-1/2 text-center ">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <div className="border-b border-gray-500 w-16 my-4"></div>
          <p className="text-gray-400">
            It is very important for us to keep in touch with you, so we are
            always ready to answer any question that interests you. Shoot!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
