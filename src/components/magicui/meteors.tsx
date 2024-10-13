"use client";

import { useEffect, useState } from "react";

import { cn } from "../../lib/utils";

interface MeteorsProps {
  number?: number;
}
export const Meteors = ({ number = 20 }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    [],
  );

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: -5,
      left: Math.floor(Math.random() * window.innerWidth) + "px",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 size-[0.5px] rotate-[215deg] animate-meteor rounded-full dark:bg-purple-800 bg-sky-800 shadow-[0_0_0_1px_#ffffff10] dark:opacity-75"
          )}
          style={style}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 dark:bg-gradient-to-r dark:from-purple-300 dark:to-transparent bg-gradient-to-r from-sky-600 to-transparent opacity-75" />
        </span>
      ))}
    </>
  );
};

export default Meteors;
