import React from "react";

const Process = () => {
  return (
    <div className="container max-w-6xl my-36">
      {/* ---------------------------------- Part 1 -------------------------------------------------------- */}

      <div className="flex flex-col items-center justify-center gap-6 ">
        <div className="text-3xl font-bold">Our Process</div>
        <div className="max-w-2xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore at
          repellendus beatae fugit reprehenderit quae tenetur praesentium harum
          aut maxime. Quam voluptatibus vero temporibus soluta quae repellendus
          aliquid doloremque eaque.
        </div>
      </div>

      {/* ---------------------------------- Part 2 -------------------------------------------------------- */}

      <div className="flex items-center justify-between my-20 h-[600px]">
        {/* -------------------------------- THE IMAGE ------------------------------------------------------ */}

        <div className="w-1/2 flex items-center justify-center bg-blue-800 h-full">
          <img
            src="image-url"
            alt="Discover"
            className="max-h-full max-w-full"
          />
        </div>

        {/* ---------------------------------- THE TEXT -------------------------------------------------------- */}

        <div className="w-1/2 bg-blue-400 h-full flex flex-col items-center justify-center gap-8 px-16">
          <div className="text-4xl font-bold text-white">Discover</div>
          <div className="text-lg text-gray-100 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus explicabo quia vero neque temporibus? Corporis dolorum
            natus laudantium error enim inventore, deserunt, sed tenetur nobis
            accusamus delectus dicta eveniet voluptate.
          </div>
        </div>
      </div>
      {/* ---------------------------------- Part 3 -------------------------------------------------------- */}

      <div className="flex items-center justify-between my-20 h-[600px]">
        {/* ---------------------------------- THE TEXT -------------------------------------------------------- */}

        <div className="w-1/2 bg-blue-400 h-full flex flex-col items-center justify-center gap-8 px-16">
          <div className="text-4xl font-bold text-white">BUILD</div>
          <div className="text-lg text-gray-100 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus explicabo quia vero neque temporibus? Corporis dolorum
            natus laudantium error enim inventore, deserunt, sed tenetur nobis
            accusamus delectus dicta eveniet voluptate.
          </div>
        </div>
        {/* -------------------------------- THE IMAGE ------------------------------------------------------ */}

        <div className="w-1/2 flex items-center justify-center bg-blue-800 h-full">
          <img src="image-url" alt="Build" className="max-h-full max-w-full" />
        </div>
      </div>
      {/* ---------------------------------- Part 4 -------------------------------------------------------- */}

      <div className="flex items-center justify-between my-20 h-[600px]">
        {/* -------------------------------- THE IMAGE ------------------------------------------------------ */}

        <div className="w-1/2 flex items-center justify-center bg-blue-800 h-full">
          <img
            src="image-url"
            alt="Deliver"
            className="max-h-full max-w-full"
          />
        </div>

        {/* ---------------------------------- THE TEXT -------------------------------------------------------- */}

        <div className="w-1/2 bg-blue-400 h-full flex flex-col items-center justify-center gap-8 px-16">
          <div className="text-4xl font-bold text-white">DELIVER</div>
          <div className="text-lg text-gray-100 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus explicabo quia vero neque temporibus? Corporis dolorum
            natus laudantium error enim inventore, deserunt, sed tenetur nobis
            accusamus delectus dicta eveniet voluptate.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
