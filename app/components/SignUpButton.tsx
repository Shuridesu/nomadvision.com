"use client";

import React, { useEffect, useState } from "react";
import JoinIcon from "../Icons/JoinIcon";
import Signup from "@/components/auth/Signup";
import CrossIcon2 from "../Icons/CrossIcon2";
import { usePathname } from "next/navigation";

const SignUpButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

  return (
    <>
      <button
        className={`${isOpen?"hidden":"flex"}  group justify-center items-center gap-2 px-3 py-2 bg-gradient-to-r bg-[length:0%] hover:bg-[length:100%] bg-left duration-300 hover:text-white from-gray-900 to-gray-900 font-medium bg-white text-lg bg-no-repeat border border-sky-900 text-gray-900 w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-sm z-50`}
        onClick={toggleMenu}
      >
        <JoinIcon />
        <span className="font-bold no-underline">Sign up free</span>
      </button>

      <div className={`transform duration-300 ease-in-out ${
          isOpen ? "animate-slideUp" : "hidden"
        } fixed inset-0 bg-white z-50 items-center justify-center`}>
            <div className = "mt-24">
            <Signup/>
            </div>
            <div className ="absolute top-6 right-8 border duration-150 transition-all ease-in-out hover:bg-red-500 hover:border-white cursor-pointer rounded-md" onClick={toggleMenu}>
                <CrossIcon2/>
            </div>
            
      </div>
      
    </>
  );
};

export default SignUpButton;
