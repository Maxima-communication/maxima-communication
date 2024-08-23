"use client";

import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import maxima from "../../../public/m.svg";
import maximauno from "../../../public/m-footer.svg";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Testing font
const TestFont = localFont({
  src: "../../../public/assets/fonts/area/AreaNormalTrial-Semibold-BF65ea75c6b547e.otf",
});

// Testing font
const LogoFont = localFont({
  src: "../../../public/assets/fonts/area/AreaNormalTrial-Semibold-BF65ea75c6b547e.otf",
});

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Process", href: "/process" },
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
    className="text-purple-800 hover:bg-purple-100 dark:text-white dark:hover:bg-purple-900 inline-flex h-14 w-14  items-center justify-center rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 lg:hidden"
    onClick={onClick}
    aria-controls="website-menu"
    aria-expanded={isOpen}
  >
    <span className="sr-only">Toggle menu</span>
    <svg
      className={`h-8 w-8 sm:h-10 sm:w-10 ${isOpen ? 'hidden' : 'block'}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 8H5V10H19V8ZM19 14H5V16H19V14Z"></path>
    </svg>
    <svg
      className={`h-8 w-8 sm:h-10 sm:w-10 ${isOpen ? 'block' : 'hidden'}`}
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
          <Link href="/" className="focus-visible:outline-purple-500 rounded-md focus-visible:outline focus-visible:outline-2">
            <span className="sr-only">Maxima</span>
            <Image
            className="h-28 w-56 hidden lg:inline-flex opacity-75"
            src={maxima}
            alt="Maxima communications"
          />
            <Image
              className="h-14 w-auto sm:h-16 lg:hidden" // Increased logo size
              src={maximauno}
              alt="Maxima communications"
            />
          </Link>
        </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex gap-16">
            {navigation.map((item) => {
              const isSelected = item.name === selectedLink;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm tracking-wide leading-6 uppercase no-underline ${TestFont.className} ${isSelected ? 'text-purple-800 dark:text-white' : 'text-purple-600 dark:text-purple-200'}`}
                  onClick={() => setSelectedLink(item.name)}
                  ref={isSelected ? selectedLinkRef : null} 
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
                </Link>
              );
            })}
          </nav>

          {/* Get in touch button (desktop only) */}
          <a
          href="#_"
          className="hidden lg:inline-flex relative items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black hover:text-white transition-all duration-150 ease-in-out rounded-3xl hover:pl-10 hover:pr-6 bg-gray-50 hover:bg-opacity-0 group border hover:border-white hover:backdrop-blur-3xl"
        >
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out group-hover:h-full"></span>
          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg
              className="w-5 h-5 text-black hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span
            className={`relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white`}
          >
            Get in touch
          </span>
        </a>

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
            <div className="grid grid-cols-1 gap-16 pb-24 pt-6 lg:grid-cols-2 lg:pt-12">
              <nav className="divide-purple-200 dark:divide-opacity-20 dark:divide-purple-400 flex flex-col gap-1 divide-y">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-purple-800 dark:text-white group inline-flex py-6 text-3xl font-medium tracking-tight transition focus-visible:outline-none sm:py-8 sm:text-4xl"
                    onClick={() => {
                      setSelectedLink(item.name);
                      setIsMenuOpen(false);
                    }}
                  >
                    <div className="group-focus-visible:outline-purple-500 flex flex-1 items-center justify-between rounded-3xl group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2">
                      <div className="flex items-center gap-6">
                        <span className="text-xs text-purple-500 dark:text-purple-300">{`0${navigation.indexOf(item) + 1}`}</span>
                        <span className="group-hover:underline">{item.name}</span>
                      </div>
                      <svg
                        className="text-purple-500 dark:text-purple-300 h-6 w-6 sm:h-8 sm:w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}