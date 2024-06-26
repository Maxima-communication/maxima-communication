"use client";

import React, { useState } from "react";
import localFont from "next/font/local";
// import { LampDemo } from "./Lamp";
import StyledImage from "./ui/styledimage";
import code from "../images/code.jpg";

/* 
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
]; */

const Engebrechtre = localFont({
  src: "../../public/assets/fonts/engebrechtre/Engebrechtre Bd.otf",
});

// Testing font
const TestFont = localFont({
  src: "../../public/assets/fonts/area/AreaNormalTrial-Semibold-BF65ea75c6b547e.otf",
});

const services = [
  {
    id: "service-1",
    name: "Web Development",
    description:
      "Transform your vision into reality with our comprehensive web development services. We specialize in creating custom websites that are visually appealing, highly functional, and user-friendly. Our process includes understanding your needs to deliver solutions that are optimized for performance, security, and scalability. Let us help you establish a strong online presence with a website that truly stands out.",
  },
  {
    id: "service-2",
    name: "Mobile Development",
    description:
      "Empower your business with our cutting-edge mobile development services. We create intuitive, high-performance mobile applications for iOS and Android platforms, designed to engage users and drive growth. Our experienced team focuses on delivering seamless user experiences and robust functionality, ensuring your app stands out and meets your business goals.",
  },
  {
    id: "service-3",
    name: "UI/UX Design",
    description:
      "Enhance user satisfaction and engagement with our expert UI/UX design services. We specialize in creating intuitive and visually compelling interfaces that provide seamless user experiences. Our design process focuses on understanding your users and their needs to deliver solutions that are both functional and aesthetically pleasing.",
  },
  {
    id: "service-4",
    name: "Web Marketing",
    description:
      "Boost your online presence with our expert web marketing services. We specialize in creating tailored strategies that drive traffic, increase engagement, and convert visitors into loyal customers. Our team utilizes the latest tools and techniques in SEO, social media marketing, content marketing, and PPC advertising to ensure your business stands out in the digital landscape.",
  },
];

const Services = () => {
  /* const [openService, setOpenService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setOpenService(openService === index ? null : index);
  }; */

  const [selected, setSelected] = useState(null);

  const toggle = (value: any) => {
    setSelected(selected === value ? null : value);
  };

  return (
    <div className="container mt-32 my-16">
      <div className="flex flex-col items-center relative">
        <h4
          className={`text-4xl mt-16 mb-20 text-center text-white uppercase ${Engebrechtre.className}`}
        >
          Our Services
        </h4>
        {/* <div className="absolute bg-dot-white opacity-40 w-80 h-40 translate-x-[199px] translate-y-20" /> */}
      </div>
      {/* ---------------------------------- Part 1 -------------------------------------------------------- */}
      {/* <LampDemo/> */}
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

      {/* <div className="flex items-center justify-between h-[650px]"> */}
      {/* -------------------------------- THE IMAGE ------------------------------------------------------ */}

      {/* <div className="w-1/2 flex items-center justify-center">
          <StyledImage
            src={code}
            alt="Discover"
            shape={0}
            className="h-[450px] justify-center"
          />
        </div> */}

      {/* -------------------------------- THE TEXT ------------------------------------------------------- */}

      {/* <div className="w-1/2 flex flex-col relative h-full">
          <div className=" w-full h-full flex flex-col justify-center">
            <ul
              className={`text-xl font-bold text-gray-400 space-y-10 p-6 shadow-lg ${TestFont.className}`}
            >
              {services.map((service, index) => (
                <div key={index}>
                  <li
                    className="flex items-center justify-between cursor-pointer"
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
      </div> */}
      <div className="max-w-5xl translate-x-28">
        <dl className="mt-3">
          {services.map((service, index) => {
            const isOpen = selected === index;
            const isNextOpen = selected === index + 1;

            return (
              <div
                key={service.id}
                className={`rounded-3xl px-4 transition ${
                  isOpen ? "bg-gray-400/10" : ""
                }`}
              >
                <dt
                  className={`border-b py-4 text-lg transition ${
                    isOpen || isNextOpen
                      ? "border-transparent"
                      : "border-gray-700 border-opacity-50"
                  }`}
                >
                  <button
                    type="button"
                    className="group block w-full py-6 text-left transition focus-visible:outline-none"
                    aria-controls={service.id}
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                  >
                    <div className="group-focus-visible:outline-gray-200 flex items-center justify-between rounded-3xl group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2">
                      <span
                        className={`text-6xl text-gray-200 ${TestFont.className}`}
                      >
                        {service.name}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <svg
                          className={`transform transition duration-200 ease-in-out ${
                            isOpen ? "rotate-90" : "rotate-0"
                          }`}
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <rect
                            x="63.5"
                            y="63.5"
                            width="63"
                            height="63"
                            rx="31.5"
                            transform="rotate(-180 63.5 63.5)"
                            stroke="white"
                          />
                          <path
                            d="M19 31.5003H18.5V32.5003H19V31.5003ZM45 32.5003C45.2761 32.5003 45.5 32.2764 45.5 32.0003C45.5 31.7241 45.2761 31.5003 45 31.5003V32.5003ZM35.5 22V21.5H34.5V22H35.5ZM44.6601 32.3387C44.9025 32.4709 45.2062 32.3816 45.3384 32.1392C45.4707 31.8967 45.3813 31.593 45.1389 31.4608L44.6601 32.3387ZM34.4999 41.9L34.4999 42.4L35.4999 42.4L35.4999 41.9L34.4999 41.9ZM19 32.5003H44.8994V31.5003H19V32.5003ZM44.8994 32.5003H45V31.5003H44.8994V32.5003ZM34.5 22C34.5 23.2987 35.207 24.5925 36.1592 25.7612C37.1213 26.942 38.392 28.0656 39.644 29.0331C40.899 30.0028 42.1515 30.8282 43.0889 31.4105C43.558 31.7019 43.9493 31.9331 44.2239 32.0918C44.3613 32.1712 44.4695 32.2325 44.5438 32.2741C44.581 32.295 44.6096 32.3109 44.6292 32.3217C44.639 32.3271 44.6465 32.3313 44.6517 32.3341C44.6543 32.3355 44.6563 32.3366 44.6577 32.3374C44.6584 32.3378 44.6589 32.3381 44.6593 32.3383C44.6595 32.3384 44.6597 32.3385 44.6598 32.3386C44.66 32.3386 44.6601 32.3387 44.8995 31.8997C45.1389 31.4608 45.139 31.4608 45.139 31.4608C45.1389 31.4608 45.1389 31.4608 45.1388 31.4607C45.1386 31.4606 45.1382 31.4604 45.1377 31.4601C45.1367 31.4596 45.1351 31.4587 45.133 31.4575C45.1286 31.4551 45.1219 31.4515 45.113 31.4465C45.0951 31.4366 45.0682 31.4217 45.0328 31.4019C44.9621 31.3622 44.8577 31.3031 44.7243 31.226C44.4576 31.0719 44.0755 30.8461 43.6165 30.561C42.6977 29.9902 41.4754 29.1844 40.2555 28.2418C39.0326 27.2969 37.8284 26.2267 36.9344 25.1295C36.0304 24.02 35.5 22.9513 35.5 22H34.5ZM44.8994 32.0003C44.7121 31.5367 44.7119 31.5367 44.7117 31.5368C44.7116 31.5369 44.7114 31.5369 44.7112 31.537C44.7107 31.5372 44.7101 31.5375 44.7094 31.5378C44.7078 31.5384 44.7057 31.5393 44.703 31.5404C44.6976 31.5426 44.6899 31.5457 44.6799 31.5499C44.6598 31.5582 44.6307 31.5703 44.5931 31.5863C44.5178 31.6182 44.4086 31.6653 44.2701 31.7271C43.9934 31.8507 43.5996 32.0333 43.1278 32.2708C42.1854 32.7452 40.9255 33.4418 39.6624 34.3285C38.4018 35.2135 37.1206 36.3 36.1506 37.5591C35.1801 38.8189 34.4999 40.2799 34.4999 41.9L35.4999 41.9C35.4999 40.5703 36.0572 39.3189 36.9428 38.1694C37.8289 37.0192 39.0226 35.9995 40.237 35.147C41.4487 34.2963 42.6637 33.6241 43.5774 33.1641C44.0337 32.9344 44.4133 32.7584 44.678 32.6402C44.8102 32.5811 44.9136 32.5365 44.9834 32.507C45.0183 32.4922 45.0447 32.4811 45.0621 32.4739C45.0709 32.4703 45.0773 32.4677 45.0814 32.466C45.0835 32.4652 45.085 32.4646 45.0859 32.4642C45.0863 32.464 45.0866 32.4639 45.0867 32.4638C45.0868 32.4638 45.0868 32.4638 45.0869 32.4638C45.0868 32.4638 45.0867 32.4638 44.8994 32.0003Z"
                            stroke="white"
                          />
                        </svg>
                      </span>
                    </div>
                  </button>
                </dt>
                {isOpen && (
                  <dd className="pb-10 pr-6" id={service.id}>
                    <p
                      className={`text-gray-300 text-lg ${TestFont.className}`}
                    >
                      {service.description}
                    </p>
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
};

export default Services;
