import React from "react";
import { Icons } from "./icons";

const Ticker = () => {
  return (
    <div className="marquee">
      <ul className="marquee__content">
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
      <ul className="marquee__content" aria-hidden="true">
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
