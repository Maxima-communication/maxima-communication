"use client";

import React from "react";
import { Meteors } from "./magicui/meteors";
import ShineBorder from "./magicui/shine-border";
import { useTheme } from 'next-themes';

export function MeteorDemo() {
  const { theme } = useTheme();

  return (
    <div className="relative h-full w-full overflow-hidden md:shadow-xl">
      <ShineBorder
        className={`h-full w-full overflow-hidden bg-${theme === 'dark' ? 'background' : '[#0074a1]'}`}
        color={theme === 'dark' ? ["#9d4edd", "#3c096c", "#e0aaff"] : ["#0074a1"]}
      >
        <Meteors number={20} />
      </ShineBorder>
    </div>
  );
}