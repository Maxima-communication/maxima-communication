import React from "react";
import localFont from "next/font/local";
import { Icons } from "./icons";

// Testing font
const TestFont = localFont({
  src: "../../public/assets/fonts/tabarra/TabarraPro-Black-FFP.ttf",
});

const Ticker = () => {
  return (
    <div className={`marquee ${TestFont.className}`}>
      <ul className="marquee__content uppercase text-neutral-200 text-5xl">
        <li className="marquee__item">Discuss your ideas</li>
        <li className="marquee__item">
          <Icons.ticker1 />
        </li>
        <li className="marquee__item">Innovate with us</li>
        <li className="marquee__item">
          <Icons.ticker2 />
        </li>
        <li className="marquee__item">Elevate your brand</li>
        <li className="marquee__item">
          <Icons.ticker3 />
        </li>
        <li className="marquee__item">Transform your business</li>
        <li className="marquee__item">
          <Icons.ticker4 />
        </li>
        <li className="marquee__item">Design your solutions</li>
        <li className="marquee__item">
          <Icons.ticker5 />
        </li>
      </ul>
      {/* Mirrors the content above */}
      <ul className="marquee__content uppercase text-neutral-200 text-5xl" aria-hidden="true">
        <li className="marquee__item">Discuss your ideas</li>
        <li className="marquee__item">
          <Icons.ticker1 />
        </li>
        <li className="marquee__item">Innovate with us</li>
        <li className="marquee__item">
          <Icons.ticker2 />
        </li>
        <li className="marquee__item">Elevate your brand</li>
        <li className="marquee__item">
          <Icons.ticker3 />
        </li>
        <li className="marquee__item">Transform your business</li>
        <li className="marquee__item">
          <Icons.ticker4 />
        </li>
        <li className="marquee__item">Design your solutions</li>
        <li className="marquee__item">
          <Icons.ticker5 />
        </li>
      </ul>
    </div>
  );
};

export default Ticker;
