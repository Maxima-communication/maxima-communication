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
      <ul className="marquee__content text-5xl">
        <li>DISCUSS YOUR IDEAS</li>
        <li>
          <Icons.star />
        </li>
        <li>DISCUSS YOUR IDEAS</li>
        <li>
          <Icons.star />
        </li>
        <li>DISCUSS YOUR IDEAS</li>
        <li>
          <Icons.star />
        </li>
        <li>DISCUSS YOUR IDEAS</li>
        <li>
          <Icons.star />
        </li>
      </ul>
      {/* Mirrors the content above */}
      <ul className="marquee__content text-5xl" aria-hidden="true">
        <li>DISCUSS YOUR IDEAS</li>
        <li>
          <Icons.star />
        </li>
        <li>DISCUSS YOUR IDEAS</li>
        <li>
          <Icons.star />
        </li>
        <li>DISCUSS YOUR IDEAS</li>
        <li>
          <Icons.star />
        </li>
        <li>DISCUSS YOUR IDEAS</li>
        <li>
          <Icons.star />
        </li>
      </ul>
    </div>
  );
};

export default Ticker;
