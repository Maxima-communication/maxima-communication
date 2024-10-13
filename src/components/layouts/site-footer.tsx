"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import localFont from "next/font/local";
import Link from "next/link";
import mfooterdark from "../../../public/m-footer-dark.svg";
import mfooterlight from "../../../public/m-footer-light.svg";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "next-themes";
import { ThemeToggle } from "./theme-toggle";

// Testing font
const TestFont = localFont({
  src: "../../../public/assets/fonts/area/AreaNormalTrial-Semibold-BF65ea75c6b547e.otf",
});

export default function SiteFooter() {
  const { theme } = useTheme();

  return (
    <div className="px-32">
      <div className="flex justify-center">
        <ScrollLink to="header" spy={true} smooth={true} duration={1000} href="/">
          {/* Light Mode SVG */}
          <Image
            className="w-40 opacity-80 hover:opacity-100 dark:hidden"
            src={mfooterlight}
            alt="Maxima communications"
          />
          {/* Dark Mode SVG */}
          <Image
            className="w-40 opacity-60 hover:opacity-90 hidden dark:block"
            src={mfooterdark}
            alt="Maxima communications"
          />
        </ScrollLink>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-5 pt-8 sm:flex-row py-14">
        <p
          className={`text-sm lg:text-base dark:text-gray-300 text-[#0074a1] opacity-85 ${TestFont.className}`}
        >
          © {new Date().getFullYear()} 
        </p>
        <div className="sm:ml-12">
        <ThemeToggle />
        </div>
        <div className="flex gap-4">
          <Link
            href="https://linkedin.com/P8GXYyH3ZU"
            className="opacity-75 hover:opacity-100"
          >
            <Linkedin className="dark:text-white text-[#0074a1]" stroke="currentColor">
              Join us on Linkedin
            </Linkedin>
          </Link>
          <Link
            href="http://facebook.com/maximacommunication"
            className="opacity-75 hover:opacity-100"
          >
            <Facebook className="dark:text-white text-[#0074a1]" stroke="currentColor">
              Join us on Facebook
            </Facebook>
          </Link>
          <Link
            href="http://instagram.com/maximacommunication"
            className="opacity-75 hover:opacity-100"
          >
            <Instagram className="dark:text-white text-[#0074a1]" stroke="currentColor">
              Join us on Instagram
            </Instagram>
          </Link>
        </div>
      </div>
    </div>
  );
}