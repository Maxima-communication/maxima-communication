import React from "react";

const Services = () => {
  return (
    <div className="container max-w-6xl my-20">
      {/* ---------------------------------- Part 1 -------------------------------------------------------- */}

      <div className="flex flex-col items-center justify-center gap-12 ">
        <div className="text-3xl font-bold">Services</div>
        <div className="max-w-2xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore at
          repellendus beatae fugit reprehenderit quae tenetur praesentium harum
          aut maxime. Quam voluptatibus vero temporibus soluta quae repellendus
          aliquid doloremque eaque.
        </div>
      </div>

      {/* ---------------------------------- Part 2 -------------------------------------------------------- */}

      <div className="flex items-center justify-between my-20 h-96">
        <div className="w-1/2 flex items-center justify-center bg-green-800 h-96">
          <img
            src="image-url"
            alt="Services"
            className="max-h-full max-w-full"
          />
        </div>
        <div className="w-1/2 bg-lime-800 h-96 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Services</h2>
          <ul className="text-xl font-bold text-gray-400 bg-gray-700 space-y-6 p-6">
            <li className="flex items-center justify-between">
              <span>Web Development</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10  w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span>Mobile Development</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10  w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span>UI/UX Design</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10  w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span>Web Marketing</span>
              <span className="text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10  w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
