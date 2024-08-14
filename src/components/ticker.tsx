import React from "react";
import localFont from "next/font/local";
import { Icons } from "./icons";

const TestFont = localFont({
  src: "../../public/assets/fonts/tabarra/TabarraPro-Black-FFP.ttf",
});

const Ticker = () => {
  return (
    <div className={`marquee ${TestFont.className}`}>
      <ul className="marquee__content uppercase text-neutral-200 text-5xl">
        {tickerItems.map((item, index) => (
          <li key={index} className="marquee__item flex items-center">
            {item}
          </li>
        ))}
      </ul>
      <ul className="marquee__content uppercase text-neutral-200 text-5xl" aria-hidden="true">
        {tickerItems.map((item, index) => (
          <li key={index} className="marquee__item flex items-center">
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