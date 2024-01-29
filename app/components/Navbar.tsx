'use client';

import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import Logo from "./Logo";
import Link from "next/link";
import SideBar from "./SideBar";
import { Button } from "@/components/ui/button";
import { UserType } from "@/lib/nextauth";
import UserNavigation from "@/components/auth/UserNavigation";
import MenuIcon from "../Icons/MenuIcon";
import { usePathname, useSearchParams } from "next/navigation";
import SideBarItem from "./SideBarItem";
import UserNavigation2 from "./UserNavigation2";



interface NavbarProps {
  user: UserType | null;
}



const Navbar = ({ user }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    setIsOpen(false); // Close the sidebar
  }, [pathname, searchParams]);
  return (
    <div className="relative z-10">
      <nav className="flex items-center h-28 bg-transparent">
        <Link href="/" className="no-underline">
          <span className="relative mt-4 ms-6 sm:ms-14 max-w-none text-xl sm:text-2xl md:text-3xl font-extrabold me-2 text-blue-400">
            NOMAD VISION
            <span className="absolute -top-4 ms-2">
              <Logo />
            </span>
          </span>
        </Link>

        <div
          className="hidden xl:flex z-20 -
        
        translate-x-4 mx-auto"
        >
          <NavItem />
        </div>
        {user ? (
          <div className="ms-20 me-16 hidden xl:flex">
            <UserNavigation user={user} />
          </div>
        ) : (
          <Button className="bg-sky-900 py-4 font-bold text-base hover:bg-sky-700 me-10 ms-10 hidden xl:flex">
            <Link href="/signup" className="text-white no-underline">
              JOIN US
            </Link>
          </Button>
        )}

        {/* sidebar */}
        <div
          className="fixed xl:hidden right-6 z-50 cursor-pointer"
          onClick={toggleMenu}
        >
          <MenuIcon />
        </div>
        <div className="absolute top-0">
          <div
            className={`h-full fixed xl:hidden right-0 w-full sm:w-2/3 md:w-1/2 bg-slate-500  bg-opacity-80 z-30 transition-transform duration-300 transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="text-2xl mt-32 ms-3">
              <SideBarItem/>

              {user ? (
                <div className="mt-2 ms-7">
                  <UserNavigation2 user={user} />
                </div>
              ) : (
                <Link href="/signup" className="text-white no-underline sm:ms-10">
                  <Button className="bg-sky-900 py-4 font-bold text-base hover:bg-sky-700 mt-5">
                    JOIN US
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


