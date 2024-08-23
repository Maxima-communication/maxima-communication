import React from "react";
import { Meteors } from "./magicui/meteors";
import ShineBorder from "./magicui/shine-border";
export function MeteorDemo() {
  return (
    <div className="relative  h-full w-full  overflow-hidden     md:shadow-xl">
      <ShineBorder
        className="  h-full w-full   overflow-hidden   bg-background "
        color={["#9d4edd", "#3c096c", "#e0aaff"]}
      >
        <Meteors number={20} />
      </ShineBorder>
    </div>
  );
}
