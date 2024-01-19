import React from "react";
import NavItem from "./NavItem";
import Logo from "./Logo";
import Link from "next/link";
import SideBar from "./SideBar";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="z-10">
      <nav className="flex items-center h-28 bg-transparent">
        <Link href="/" className="no-underline">
          <span className="relative mt-4 ms-6 sm:ms-14 max-w-none text-xl sm:text-2xl md:text-3xl font-extrabold me-2 text-blue-400">
            NOMAD VISION
            <span className="absolute -top-4 ms-2">
              <Logo />
            </span>
          </span>
        </Link>

        <span className="ms-auto">
          <SideBar />
        </span>

        <span className="hidden xl:flex z-20 -
        
        translate-x-4 mx-auto">
          <NavItem />
        </span>

        <Button className="bg-sky-900 py-4 font-bold text-base hover:bg-sky-700 me-10 ms-10 hidden xl:flex">
          JOIN US
        </Button>
      </nav>
    </div>
  );
};

export default Navbar;


