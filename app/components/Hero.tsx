'use client'

import { Fade } from "react-awesome-reveal";

export default function Hero() {
  return (
    <Fade triggerOnce>
      <div className="relative w-full h-screen bg-[url('/a5.png')] bg-cover bg-right lg:bg-center">
        <span className="max-w-[600px] sm:max-w-[850px] absolute top-1/3 translate-y-12 left-1/4 -translate-x-20 sm:-translate-x-32 text-4xl font-bold text-black sm:text-6xl text-left bg-gray-200 bg-opacity-40 lg:bg-opacity-0">
          <h1 className="text-[68px] md:text-[100px] text-blue-900">
            AI , DATA
          </h1>
          <h1 className="text-black">AND NETWORKING COMMUNITY CONVERGE</h1>
        </span>
      </div>
    </Fade>
  );
}

