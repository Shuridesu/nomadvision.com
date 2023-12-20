"use client";

import { Fade } from "react-awesome-reveal";

export default function Hero() {
  return (
    <Fade triggerOnce>
      <div className="relative w-full h-screen bg-[url('/a5.png')] bg-cover bg-right lg:bg-center">
        <span className="max-w-[600px] sm:max-w-[850px] absolute top-48 right-1/3  text-4xl font-bold text-black ms-10 md:text-6xl text-left bg-gray-200 bg-opacity-40 lg:bg-opacity-0 py-3 px-3">
          <h1>
            WHERE <span className="text-blue-900">AI,DATA</span> FOR BUSINESS
            AND <span className="text-blue-900">NETWORKING COMMUNITY</span>{" "}
            CONVERGE
          </h1>
          <div className="join">
            <input
              className="input input-bordered join-item w-40 lg:w-96 lg:h-16 lg:text-2xl"
              placeholder="  Email"
            />
            <button className="btn join-item rounded-r-full btn-disabled lg:h-16">
              Subscribe
            </button>
          </div>
        </span>
      </div>
    </Fade>
  );
}
