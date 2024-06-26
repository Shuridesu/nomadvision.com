"use client";

import { Button } from "@/components/ui/button";
import { UserType } from "@/lib/nextauth";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

interface HeroProps {
  user: UserType | null;
}

export default function Hero({user}:HeroProps) {
  return (
    <Fade triggerOnce>
      <div className="relative w-full h-screen bg-[url('/a5.png')] bg-cover bg-right lg:bg-center">
        <span className="flex flex-col max-w-[600px] sm:max-w-[850px] absolute top-48 right-1/3  text-4xl font-bold text-black ms-10 md:text-6xl text-left bg-gray-200 bg-opacity-40 lg:bg-opacity-0 py-3 px-3 translate-x-14">
          <span>
            WHERE <span className="text-blue-900">AI,DATA</span> FOR BUSINESS
            AND <span className="text-blue-900">NETWORKING COMMUNITY</span>{" "}
            CONVERGE
          </span>
          {user ? (
            <Button disabled className = "mt-8 w-1/2 py-7 text-xl font-extrabold bg-sky-900 text-white">PREMIUM</Button>
          ) : (
            <Link href="/signup" className="text-white no-underline">
              <Button className="mt-8 w-1/2 py-7 text-xl font-extrabold bg-sky-900 text-white hover:bg-sky-700">
                JOIN US
              </Button>
            </Link>
          )}
        </span>
      </div>
    </Fade>
  );
}
