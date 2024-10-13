"use client";

import React from "react";
import localFont from "next/font/local";
import { Icons } from "./icons";

const TestFont = localFont({
  src: "../../public/assets/fonts/tabarra/TabarraPro-Black-FFP.ttf",
});

const Ticker = () => {
  return (
    <div className={`marquee ${TestFont.className}`}>
      <ul className="marquee__content">
        {tickerItems.map((item, index) => (
          <li key={index} className="marquee__item flex items-center uppercase dark:text-neutral-200 text-5xl bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 bg-clip-text text-transparent">
            {item}
          </li>
        ))}
      </ul>
      <ul className="marquee__content" aria-hidden="true">
        {tickerItems.map((item, index) => (
          <li key={index} className="marquee__item flex items-center uppercase dark:text-neutral-200 text-5xl bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 bg-clip-text text-transparent">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const tickerItems = [
  "Discuss your ideas",
  <Icons.ticker1 key="icon1" />,
  "Innovate with us",
  <Icons.ticker2 key="icon2" />,
  "Elevate your brand",
  <Icons.ticker3 key="icon3" />,
  "Transform your business",
  <Icons.ticker4 key="icon4" />,
  "Design your solutions",
  <Icons.ticker5 key="icon5" />,
];

export default Ticker;