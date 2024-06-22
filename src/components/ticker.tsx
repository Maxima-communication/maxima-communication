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
        <li className="ml-4">Discuss your ideas</li>
        <li>
          <Icons.ticker1/>
        </li>
        <li>Innovate with us</li>
        <li>
          <Icons.ticker2/>
        </li>
        <li>Elevate your brand</li>
        <li>
          <Icons.ticker3/>
        </li>
        <li>Transform your business</li>
        <li>
          <Icons.ticker4/>
        </li>
        <li>Design your solutions</li>
        <li>
          <Icons.ticker5/>
        </li>
      </ul>
      {/* Mirrors the content above */}
      <ul className="marquee__content uppercase text-neutral-200 text-5xl" aria-hidden="true">
      <li className="ml-4">Discuss your ideas</li>
        <li>
          <Icons.ticker1/>
        </li>
        <li>Innovate with us</li>
        <li>
          <Icons.ticker2/>
        </li>
        <li>Elevate your brand</li>
        <li>
          <Icons.ticker3/>
        </li>
        <li>Transform your business</li>
        <li>
          <Icons.ticker4/>
        </li>
        <li>Design your solutions</li>
        <li>
          <Icons.ticker5/>
        </li>
      </ul>
    </div>
  );
};

export default Ticker;
