import React from "react";
import NavItem from "./NavItem";
import Logo from "./Logo";
import Link from "next/link";
import SideBar from "./SideBar";

const Navbar = () => {
  return (
    <div className="z-10">
      <nav className="relative flex items-center bg-transparent">
        <Link href="/">
          <div className="flex items-center">
            <span className="mt-4 ms-6 sm:ms-14 max-w-none text-xl sm:text-2xl md:text-3xl font-extrabold me-2 text-blue-400">
              NOMAD VISION
            </span>
            <span className="mt-3">
              <Logo />
            </span>
          </div>
        </Link>
        
        <span className="ms-auto">
          
          <SideBar/>
          
        </span>
        
        
        
    
        
        <span className="hidden lg:flex justify-center items-center mt-4 mx-auto xl:-translate-x-10 2xl:-translate-x-24 z-20">
          <NavItem />
        </span>
        
        <button className="hidden lg:btn btn-disabled btn-xs sm:btn-sm md:btn-md me-12 mt-6 justify-end">
          <p className="text-white">subscribe</p>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;


