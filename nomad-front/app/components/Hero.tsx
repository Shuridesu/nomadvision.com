'use client'

import { Fade } from "react-awesome-reveal";

export default function Hero() {
  return (
    <Fade triggerOnce>
      <div className="relative w-full h-screen bg-[url('/a.png')] bg-cover bg-right lg:bg-center">
          <span className="max-w-[300px] sm:max-w-[500px] absolute top-1/3 translate-y-12 left-1/4 -translate-x-20 sm:-translate-x-46 text-4xl font-bold text-black sm:text-6xl text-left bg-gray-200 bg-opacity-20 lg:bg-opacity-0">
            EVERYTHING OF <h1 className="text-[130px] text-blue-900">AI</h1> AND DATA FOR BUSINESS
          </span>
      </div>
      </Fade>
  );
}


