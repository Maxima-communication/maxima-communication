"use client";

import React, { useState } from "react";
import { LampDemo } from "./Lamp";
import StyledImage from "./ui/styledimage";
import code from '../images/code.jpg'

interface Service {
  title: string;
  details: string;
}

const services: Service[] = [
  {
    title: "Web Development",
    details:
      "Transform your vision into reality with our comprehensive web development services. We specialize in creating custom websites that are not only visually appealing but also highly functional and user-friendly. ",
  },
  {
    title: "Mobile Development",
    details:
      "Empower your business with our cutting-edge mobile development services. We create intuitive, high-performance mobile applications for iOS and Android platforms, designed to engage users and drive growth.",
  },
  {
    title: "UI/UX Design",
    details:
      "Enhance user satisfaction and engagement with our expert UI/UX design services. We specialize in creating intuitive and visually compelling interfaces that provide seamless user experiences. Our design process focuses on understanding your users and their needs to deliver solutions that are both functional and aesthetically pleasing.",
  },
  {
    title: "Web Marketing",
    details:
      "Boost your online presence with our expert web marketing services. We specialize in creating tailored strategies that drive traffic, increase engagement, and convert visitors into loyal customers. Our team utilizes the latest tools and techniques in SEO, social media marketing, content marketing, and PPC advertising to ensure your business stands out in the digital landscape.",
  },
];

const Services = () => {
  const [openService, setOpenService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setOpenService(openService === index ? null : index);
  };

  return (
    <div className="container my-16">
      {/* ---------------------------------- Part 1 -------------------------------------------------------- */}
        <LampDemo/>
      {/* <div className="flex flex-col items-center justify-center gap-6 w-full">
        <div className="text-3xl font-bold">Services</div>
        <div className="max-w-6xl mx-auto text-center px-4">
          <p className="leading-relaxed text-gray-200">
            Revolutionizing the digital landscape, we offer a holistic suite of
            services spanning web development, mobile app creation, cutting-edge
            UI/UX design, and dynamic web marketing solutions. We excel in
            crafting captivating websites and mobile applications that marry
            aesthetics with functionality, ensuring impeccable user journeys.
            Leveraging our seasoned team's expertise, we elevate your digital
            footprint through strategic SEO and social media marketing
            initiatives. Entrust us with your vision, and together, we'll propel
            your business towards its zenith with our comprehensive digital
            arsenal.
          </p>
        </div>
      </div>
 */}
      {/* ---------------------------------- Part 2 -------------------------------------------------------- */}

      <div className="flex items-center justify-between mt-10 h-[650px]">
        {/* -------------------------------- THE IMAGE ------------------------------------------------------ */}

        <div className="w-1/2 flex items-center justify-center h-full">
        <StyledImage
            src={code}
            alt="Discover"
            shape={0}
            className="max-h-full max-w-full"
          />
        </div>

        {/* -------------------------------- THE TEXT ------------------------------------------------------- */}

        <div className="w-1/2 flex flex-col relative h-full">
          <div className=" absolute top-0 right-0 left-0">
            <h2 className="text-4xl font-bold mb-4 mt-4 text-center text-white">
              Our Services
            </h2>
          </div>
          <div className=" w-full h-full flex flex-col justify-center">
            <ul className="text-xl font-bold text-gray-400  space-y-10 p-6  shadow-lg">
              {services.map((service, index) => (
                <div key={index} >
                  <li
                    className="flex items-center justify-between cursor-pointer  "
                    onClick={() => toggleService(index)}
                  >
                    <span className="text-white">{service.title}</span>
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
                    <p className="text-gray-200 bg-gradient-to-r from-gray-500 to-gray-900 text-base p-6 rounded-lg mt-4 shadow-lg border border-gray-600 text-justify">
                      {service.details}
                    </p>
                  )}
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
