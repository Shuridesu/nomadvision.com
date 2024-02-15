"use client";

import Login from "@/components/auth/Login";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import CommentForm from "./CommentForm";
import { UserType, getAuthSession } from "@/lib/nextauth";
import CrossIcon from "@/app/Icons/CrossIcon";
import Signup from "@/components/auth/Signup";
import CrossIcon2 from "@/app/Icons/CrossIcon2";

export default function Comment() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleMenu2 = () => setIsOpen2(!isOpen2);
  return (
    <div className="relative">
      <div className="text-center font-bold mt-14 text-xl">
        JOIN THE CONVERSATION
      </div>
      <div className="text-center font-medium text-gray-500 mt-2">
        Become NomadVision&apos;s member to leave a comment
      </div>
      <div className="w-full text-center mt-6">
        <Button className="bg-sky-900 py-4 font-bold text-base hover:bg-sky-700" onClick={toggleMenu2}>
          SIGN UP
        </Button>
        <div className="flex justify-center items-center mt-4 text-normal gap-2">
          <p>Already have an account?</p>
          <div className="text-blue-500 cursor-pointer" onClick={toggleMenu}>
            Sign in
          </div>
        </div>
      </div>
      <div
        className={`transform duration-300 ease-in-out ${
          isOpen ? "flex" : "h-0"
        } fixed inset-0 bg-black bg-opacity-50 z-50 items-center justify-center`}
      >
        <div
          className={`transition-all duration-300 transform ${
            isOpen ? "animate-slideUp" : "hidden"
          } relative w-11/12 sm:w-1/2 border pb-10 shadow-lg rounded-lg bg-white`}
        >
          <Login />
          <div className="absolute top-0 right-0 p-4">
            <div
              className="border-2 rounded-sm cursor-pointer duration-300 transition-all hover:bg-red-500 hover:border-white"
              onClick={toggleMenu}
            >
              <CrossIcon />
            </div>
          </div>
        </div>
        
      </div>
      <div className={`transform duration-300 ease-in-out ${
          isOpen2 ? "animate-slideUp" : "hidden"
        } fixed inset-0 bg-white z-50 items-center justify-center`}>
            <div className = "mt-24">
            <Signup/>
            </div>
            <div className ="absolute top-6 right-8 border duration-150 transition-all ease-in-out hover:bg-red-500 hover:border-white cursor-pointer rounded-md" onClick={toggleMenu2}>
                <CrossIcon2/>
            </div>
            
      </div>
    </div>
  );
}
