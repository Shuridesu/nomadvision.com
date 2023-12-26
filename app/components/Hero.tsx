"use client";

import { Fade } from "react-awesome-reveal";

export default function Hero() {
  return (
    <Fade triggerOnce>
      <div className="relative w-full h-screen bg-[url('/a5.png')] bg-cover bg-right lg:bg-center">
        <span className="max-w-[600px] sm:max-w-[850px] absolute top-48 right-1/3  text-4xl font-bold text-black ms-10 md:text-6xl text-left bg-gray-200 bg-opacity-40 lg:bg-opacity-0 py-3 px-3 translate-x-14">
          <h1>
            WHERE <span className="text-blue-900">AI,DATA</span> FOR BUSINESS
            AND <span className="text-blue-900">NETWORKING COMMUNITY</span>{" "}
            CONVERGE
          </h1>
          <button className = "btn btn-disabled w-3/5 h-16 text-center mt-3 text-2xl text-white">
            JOIN US
          </button>
        </span>
      </div>
    </Fade>
  );
}
