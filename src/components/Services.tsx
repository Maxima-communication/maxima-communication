"use client";
import React, { useState } from "react";

interface Service {
  title: string;
  details: string;
}

const services: Service[] = [
  {
    title: "Web Development",
    details: "Details about web development service.",
  },
  {
    title: "Mobile Development",
    details: "Details about mobile development service.",
  },
  { title: "UI/UX Design", details: "Details about UI/UX design service." },
  { title: "Web Marketing", details: "Details about web marketing service." },
];

const Services = () => {
  const [openService, setOpenService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setOpenService(openService === index ? null : index);
  };

  return (
    <div className="container max-w-6xl my-16">
      {/* ---------------------------------- Part 1 -------------------------------------------------------- */}

      <div className="flex flex-col items-center justify-center gap-6 ">
        <div className="text-3xl font-bold">Services</div>
        <div className="max-w-2xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore at
          repellendus beatae fugit reprehenderit quae tenetur praesentium harum
          aut maxime. Quam voluptatibus vero temporibus soluta quae repellendus
          aliquid doloremque eaque.
        </div>
      </div>

      {/* ---------------------------------- Part 2 -------------------------------------------------------- */}

      <div className="flex items-center justify-between mt-10 h-[550px]">
        {/* -------------------------------- THE IMAGE ------------------------------------------------------ */}

        <div className="w-1/2 flex items-center justify-center bg-green-800 h-full">
          <img
            src="image-url"
            alt="Services"
            className="max-h-full max-w-full"
          />
        </div>

        {/* -------------------------------- THE TEXT ------------------------------------------------------- */}

        <div className="w-1/2 bg-lime-800 h-full flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Services</h2>
          <ul className="text-xl font-bold text-gray-400 bg-gray-700 space-y-6 p-6 ">
            {services.map((service, index) => (
              <div>
                <li
                  key={index}
                  className="flex items-center justify-between cursor-pointer  "
                  onClick={() => toggleService(index)}
                >
                  <span>{service.title}</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-10 w-6 transform transition-transform ${
                        openService === index ? "rotate-90" : "rotate-0"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </li>
                {openService === index && (
                  <p className="text-gray-600 bg-red-400 ">{service.details}</p>
                )}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
