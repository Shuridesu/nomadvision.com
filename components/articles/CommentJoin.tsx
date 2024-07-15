'use client'

import React, { useState } from 'react'
import { Login, Register } from '../common';
import { RxCross2 } from "react-icons/rx";

export default function CommentJoin() {
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
        <button
          className="bg-indigo-500 p-3 font-bold text-base text-white rounded-md hover:bg-indigo-400 hover:scale-90 transition-all duration-300 ease-in-out"
          onClick={toggleMenu2}
        >
          SIGN UP
        </button>
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
          className={`relative transition-all duration-300 transform ${
            isOpen ? "animate-slideUp" : "hidden"
          }  mt-32 w-[460px]`}
        >
          <Login />

          <div className="absolute top-5 -right-1 p-4">
            <div
              className="border-2 border-gray-400 rounded-md cursor-pointer duration-300 transition-all hover:bg-red-500 hover:border-white text-gray-400 hover:text-white"
              onClick={toggleMenu}
            >
              <RxCross2 className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`transform duration-300 ease-in-out ${
          isOpen2 ? "animate-slideUp" : "hidden"
        } fixed inset-0 bg-white z-50 items-center justify-center overflow-y-auto scrollbar-hide`}
      >
        <div>
          <Register />
        </div>
        <div
          className="absolute top-6 right-8 border-2 border-gray-400 rounded-md cursor-pointer duration-300 transition-all hover:bg-red-500 hover:border-white text-gray-400 hover:text-white"
          onClick={toggleMenu2}
        >
          <RxCross2 className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
