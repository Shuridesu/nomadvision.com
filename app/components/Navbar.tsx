import React from "react";
import NavItem from "./NavItem";
import Logo from "./Logo";
import Link from "next/link";
import SideBar from "./SideBar";

const Navbar = () => {
  return (
    <div className="z-10">
      <nav className="dark:bg-black relative flex items-center bg-transparent">
        <Link href="/">
          <div className="flex items-center">
            <span className="relative mt-4 ms-6 sm:ms-14 max-w-none text-xl sm:text-2xl md:text-3xl font-extrabold me-2 text-blue-400">
              NOMAD VISION
              <span className="absolute -top-4 ms-2">
              <Logo />
              </span>
            </span>
          </div>
        </Link>
        
        <span className="ms-auto">
          
          <SideBar/>
          
        </span>
        
        
        
    
        
        <span className="hidden xl:flex justify-center items-center mt-4 mx-auto xl:-translate-x-10 2xl:-translate-x-24 z-20">
          <NavItem />
        </span>
        
        <span className="hidden xl:btn btn-disabled btn-xs sm:btn-sm md:btn-md me-12 mt-6 justify-end">
          <p className="text-white">JOIN US</p>
        </span>
      </nav>
    </div>
    
  );
};

export default Navbar;


