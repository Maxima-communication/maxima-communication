"use client";

import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import mheaderdark from "../../../public/m-header-dark.svg";
import mfooterdark from "../../../public/m-footer-dark.svg";
import mheaderlight from "../../../public/m-header-light.svg";
import mfooterlight from "../../../public/m-footer-light.svg";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
// import { ThemeToggle } from "./theme-toggle";
import { useTheme } from "next-themes";

// Testing font
const TestFont = localFont({
  src: "../../../public/assets/fonts/area/AreaNormalTrial-Semibold-BF65ea75c6b547e.otf",
});

const navigation = [
  { name: "Home", href: "header" },
  { name: "Services", href: "services" },
  { name: "Process", href: "process" },
] as const;

type NavigationItem = (typeof navigation)[number]["name"];

const originalSVGWidth = 37; // Width of the original SVG

const HamburgerButton = ({
  onClick,
  isOpen,
}: {
  onClick: () => void;
  isOpen: boolean;
}) => (
  <button
    type="button"
    className="text-sky-800 dark:text-white inline-flex h-14 w-14  items-center justify-center rounded-full transition focus:outline-none focus-visible:ring-2 lg:hidden"
    onClick={onClick}
    aria-controls="website-menu"
    aria-expanded={isOpen}
  >
    <span className="sr-only">Toggle menu</span>
    <svg
      className={`h-8 w-8 sm:h-10 sm:w-10 ${isOpen ? "hidden" : "block"}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 8H5V10H19V8ZM19 14H5V16H19V14Z"></path>
    </svg>
    <svg
      className={`h-8 w-8 sm:h-10 sm:w-10 ${isOpen ? "block" : "hidden"}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
    </svg>
  </button>
);

export default function SiteHeader() {
  const [selectedLink, setSelectedLink] = useState<NavigationItem>("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const selectedLinkRef = useRef<HTMLAnchorElement | null>(null);
  const { theme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (selectedLinkRef.current) {
      setUnderlineWidth(selectedLinkRef.current.offsetWidth);
    }
  }, [selectedLink]);

  const scaleFactor = underlineWidth / originalSVGWidth;

  return (
    <header className="transition">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-8 sm:px-6 sm:py-16 lg:py-8 lg:max-w-7xl lg:px-8">
        <div className="flex">
          <ScrollLink
            to="header"
            spy={true}
            smooth={true}
            duration={1000}
            href="/"
            className="
              focus-visible:outline-sky-500        
              dark:focus-visible:outline-purple-500
              rounded-md
              focus-visible:outline focus-visible:outline-2
            "
          >
            <span className="sr-only">Maxima</span>

            {/* Dark Mode Header Logo */}
            <Image
              className="
                h-28 w-56 dark:hidden dark:lg:inline-flex hidden
                opacity-75
                dark:opacity-75
              "
              src={mheaderdark}
              alt="Maxima communications"
            />

            {/* Light Mode Header Logo */}
            <Image
              className="
                h-28 w-56 lg:inline-flex hidden dark:hidden"
              src={mheaderlight}
              alt="Maxima communications"
            />

            {/* Dark Mode Footer Logo */}
            <Image
              className="
                h-14 w-auto sm:h-16 dark:lg:hidden dark:block hidden opacity-75"
              src={mfooterdark}
              alt="Maxima communications"
            />

            {/* Light Mode Footer Logo */}
            <Image
              className="
                h-14 w-auto sm:h-16 lg:hidden block dark:hidden"
              src={mfooterlight}
              alt="Maxima communications"
            />
          </ScrollLink>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex gap-16">
          {navigation.map((item) => {
            const isSelected = item.name === selectedLink;
            return (
              <ScrollLink
                key={item.name}
                to={item.href}
                spy={true}
                smooth={true}
                duration={1000}
                className={`relative cursor-pointer text-sm tracking-wide leading-6 uppercase no-underline ${
                  TestFont.className
                } ${
                  isSelected
                    ? "bg-gradient-to-r from-[#0074a1] via-sky-800 to-[#0074a1] bg-clip-text text-transparent dark:text-white"
                    : "bg-gradient-to-r from-[#0074a1] via-sky-600 to-[#0074a1] bg-clip-text text-transparent dark:text-purple-200"
                }`}
                onClick={() => {
                  setSelectedLink(item.name);
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
                {isSelected && (
                  <motion.div
                    className="absolute -bottom-[1px] left-0 right-0 h-[1px] flex justify-center"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: underlineWidth, opacity: 0.75 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg
                      width={underlineWidth}
                      height="8"
                      viewBox={`0 0 ${underlineWidth} 8`}
                      fill="none"
                    >
                      <g transform={`scale(${scaleFactor}, 1)`}>
                        <motion.path
                          d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                          stroke="#cfe2f3"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{
                            strokeDasharray: 84.20591735839844,
                            strokeDashoffset: 84.20591735839844,
                          }}
                          animate={{
                            strokeDashoffset: 0,
                          }}
                          transition={{
                            duration: 2.5,
                          }}
                        />
                      </g>
                    </svg>
                  </motion.div>
                )}
              </ScrollLink>
            );
          })}
        </nav>

        {/* <ThemeToggle /> */}

        {/* Get in touch button (desktop only) */}
        <ScrollLink
          to="contactus"
          spy={true}
          smooth={true}
          duration={1000}
          className="hidden lg:inline-flex relative items-center justify-start overflow-hidden group py-3 pl-4 pr-12 font-semibold dark:text-black text-white transition-all duration-150 ease-in-out rounded-3xl hover:pl-10 hover:pr-6 dark:bg-blue-200 bg-gradient-to-r from-[#0074a1] via-sky-800 to-[#0074a1] dark:bg-gradient-to-r dark:from-white dark:via-white dark:to-white hover:bg-gradient-to-r hover:from-[#0074a1]/10 hover:via-sky-800/10 hover:to-[#0074a1]/10 dark:hover:bg-gradient-to-r dark:hover:from-gray-50/10 dark:hover:via-gray-50/10 dark:hover:to-gray-50/10 dark:hover:bg-opacity-0 border border-transparent dark:hover:border-white hover:border hover:border-sky-800 hover:backdrop-blur-3xl cursor-pointer"
        >
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out group-hover:h-full"></span>
          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg
              className="w-4 h-4 md:w-5 md:h-5 dark:text-black text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg
              className="w-4 h-4 md:w-5 md:h-5 dark:text-white text-sky-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span
            className={`relative w-full text-sm md:text-base text-left transition-colors duration-200 ease-in-out dark:group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-[#0074a1] group-hover:via-sky-800 group-hover:to-[#0074a1] group-hover:bg-clip-text group-hover:text-transparent`}
          >
            Get in touch
          </span>
        </ScrollLink>

        {/* Hamburger menu (mobile/tablet only) */}
        <HamburgerButton onClick={toggleMenu} isOpen={isMenuOpen} />
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="website-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:hidden"
          >
            <div className="grid grid-cols-1 gap-16 pb-10 pt-6 lg:grid-cols-2 lg:pt-12">
              <nav className="divide-sky-400 divide-opacity-20 dark:divide-opacity-20 dark:divide-purple-400 flex flex-col gap-1 divide-y">
                {navigation.map((item) => (
                  <ScrollLink
                    key={item.name}
                    to={item.href}
                    spy={true}
                    smooth={true}
                    offset={-450}
                    duration={1000}
                    className="text-sky-800 dark:text-white group inline-flex py-6 text-3xl font-medium tracking-tight transition focus-visible:outline-none sm:py-8 sm:text-4xl cursor-pointer"
                    onClick={() => {
                      setSelectedLink(item.name);
                      setIsMenuOpen(false);
                    }}
                  >
                    <div className="group-focus-visible:outline-sky-500 dark:group-focus-visible:outline-purple-500 flex flex-1 items-center justify-between rounded-3xl group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2">
                      <div className="flex items-center gap-6">
                        <span className="text-xs text-sky-500 dark:text-purple-300">{`0${
                          navigation.indexOf(item) + 1
                        }`}</span>
                        <span className="group-hover:underline">
                          {item.name}
                        </span>
                      </div>
                      <svg
                        className="text-sky-500 dark:text-purple-300 h-6 w-6 sm:h-8 sm:w-8 mr-[14px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                      </svg>
                    </div>
                  </ScrollLink>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
