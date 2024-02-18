'use client'

import React, { useEffect, useRef, useState } from "react";
import TrendsIcon from "../Icons/TrendsIcon";
import TrendsIcon2 from "../Icons/TrendsIcon2";
import AnalyticsIcon2 from "../Icons/AnalyticsIcon2";
import ToolIcon2 from "../Icons/ToolIcon2";
import LockIcon2 from "../Icons/LockIcon2";
import { set } from "react-hook-form";
import Link from "next/link";
import OtherIcon2 from "../Icons/OtherIcon2";
import { useClickAway } from "react-use";
import { UserType } from "@/lib/nextauth";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Image from "next/image";


interface SideBarItemProps {
  user:UserType | null;
}

export default function SideBarItem({user}:SideBarItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  const toggleMenu = (event: any) => {
    setIsOpen(!isOpen);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
  };
  const toggleMenu2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
  };
  const toggleMenu3 = () => {
    setIsOpen3(!isOpen3);
    setIsOpen(false);
    setIsOpen2(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
  };
  const toggleMenu4 = () => {
    setIsOpen(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(!isOpen4);
    setIsOpen5(false);
    setIsOpen6(false);
  };

  const toggleMenu5 = () => {
    setIsOpen5(!isOpen5);
    setIsOpen(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen6(false);
  };

  const toggleMenu6 = () => {
    setIsOpen5(false);
    setIsOpen(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen6(!isOpen6);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
  };

  const ref = useRef(null);
  useClickAway(ref, () => {
    setIsOpen(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
  });

  return (
    <div className="ms-10 space-y-2" ref={ref}>
      <div
        className="flex items-center cursor-pointer w-max group menu"
        onClick={toggleMenu}
      >
        <div className="mb-2">
          <TrendsIcon2 />
        </div>
        <h2 className="ms-3 text-3xl font-bold text-white bg-gradient-to-r from-black to-black bg-[length:0px_3px] hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300">
          TRENDS
        </h2>
      </div>

      <div
        className={`menu bg-white py-auto rounded-s-md transition-all duration-500 ease-in-out transform
      ${isOpen ? "translate-x-0 h-[100px]" : "translate-x-full h-0"}
      `}
      >
        <div className="flex flex-col font-bold text-lg text-gray-400">
          <Link
            href="/ai-trends"
            className={`block w-full h-full ps-12 py-2 my-1 mx-1 text-gray-400 no-underline hover:bg-gray-200 hover:text-blue-500 duration-500 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            AI TRENDS
          </Link>
          <Link
            href="/data-trends"
            className={`block w-full h-full ps-12 py-2 mb-1 mx-1 text-gray-400 no-underline hover:bg-gray-200 hover:text-blue-500 duration-500 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            DATA TRENDS
          </Link>
        </div>
      </div>

      <div
        className="flex items-center cursor-pointer w-max group menu"
        onClick={toggleMenu2}
      >
        <div className="mb-2">
          <AnalyticsIcon2 />
        </div>
        <h2 className="ms-3 text-3xl font-bold text-white bg-gradient-to-r from-black to-black bg-[length:0px_3px] group-hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300">
          ANALYTICS
        </h2>
      </div>

      <div
        className={`menu bg-white py-auto rounded-s-md transition-all duration-500 ease-in-out transform
      ${isOpen2 ? "translate-x-0 h-[52px]" : "translate-x-full h-0"}
      `}
      >
        <div className="flex items-center font-bold text-lg text-gray-400">
          <Link
            href="/industry-analytics"
            className={`block w-full h-full ps-12 py-2 mt-1  mx-1 text-gray-400 no-underline hover:bg-gray-200 hover:text-blue-500 duration-500 ${
              isOpen2 ? "opacity-100" : "opacity-0"
            }`}
          >
            INDUSTRY ANALYTICS
          </Link>
        </div>
      </div>

      <div
        className="flex items-center cursor-pointer w-max group menu"
        onClick={toggleMenu3}
      >
        <div className="mb-2">
          <ToolIcon2 />
        </div>
        <h2 className="ms-3 text-3xl font-bold text-white bg-gradient-to-r from-black to-black bg-[length:0px_3px] group-hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300">
          TOOL&PAPERS
        </h2>
      </div>

      <div
        className={`menu bg-white rounded-s-md transition-all duration-500 ease-in-out transform
      ${isOpen3 ? "translate-x-0 h-[52px]" : "translate-x-full h-0"}
      `}
      >
        <div className="flex items-center font-bold text-lg py-auto text-gray-400">
          <Link
            href="/ai-software"
            className={`block w-full h-full ps-12 py-2 mt-1  mx-1 text-gray-400 no-underline hover:bg-gray-200 hover:text-blue-500 duration-500 ${
              isOpen3 ? "opacity-100" : "opacity-0"
            }`}
          >
            AI SOFTWARE
          </Link>
        </div>
      </div>

      <div
        className="flex items-center cursor-pointer w-max menu"
        onClick={toggleMenu4}
      >
        <div className="mb-3">
          <LockIcon2 />
        </div>
        <h2 className="ms-3 text-3xl font-bold text-gray-400">PREMIUM</h2>
      </div>

      <div
        className={`menu bg-white rounded-s-md transition-all duration-500 ease-in-out transform
      ${isOpen4 ? "translate-x-0 h-14" : "translate-x-full h-0"}
      `}
      >
        <div className="font-bold text-lg py-3 space-y-3 text-gray-400">
          <p
            className={`ms-12 duration-500 ${
              isOpen4 ? "opacity-100" : "opacity-0"
            }`}
          >
            COMING SOON
          </p>
        </div>
      </div>

      <div
        className="flex items-center cursor-pointer w-max menu"
        onClick={toggleMenu5}
      >
        <div className="mb-3">
          <OtherIcon2 />
        </div>
      </div>

      <div
        className={`menu bg-white py-auto rounded-s-md transition-all duration-500 ease-in-out transform
      ${isOpen5 ? "translate-x-0 h-[200px]" : "translate-x-full h-0"}
      `}
      >
        <div className="flex flex-col font-bold text-lg text-gray-400">
          <Link
            href="/about-us"
            className={`block w-full h-full ps-12 py-2 my-1 mx-1 text-gray-400 no-underline hover:bg-gray-200 hover:text-blue-500 duration-500 ${
              isOpen5 ? "opacity-100" : "opacity-0"
            }`}
          >
            ABOUT US
          </Link>
          <Link
            href="/contact"
            className={`block w-full h-full ps-12 py-2 mb-1 mx-1 text-gray-400 no-underline hover:bg-gray-200 hover:text-blue-500 duration-500 ${
              isOpen5 ? "opacity-100" : "opacity-0"
            }`}
          >
            CONTACT US
          </Link>
          <Link
            href="/terms&conditions"
            className={`block w-full h-full ps-12 py-2 my-1 mx-1 text-gray-400 no-underline hover:bg-gray-200 hover:text-blue-500 duration-500 ${
              isOpen5 ? "opacity-100" : "opacity-0"
            }`}
          >
            TERMS&CONDITIONS
          </Link>
          <Link
            href="/privacy&policy"
            className={`block w-full h-full ps-12 py-2 mb-1 mx-1 text-gray-400 no-underline hover:bg-gray-200 hover:text-blue-500 duration-500 ${
              isOpen5 ? "opacity-100" : "opacity-0"
            }`}
          >
            PRIVACY&POLICY
          </Link>
        </div>
      </div>

      {user ? (
        <div className="mt-2 -translate-x-3">
          <div onClick={toggleMenu6} className="w-max cursor-pointer">
            <div className="relative w-14 h-14 flex-shrink-0">
              <Image
                src={user.avatar || "/default.png"}
                className="rounded-full object-cover border-3"
                alt={user.name || "avatar"}
                fill
              />
            </div>
          </div>

          <div
            className={`menu min-w-[600px] bg-white mt-4 py-auto rounded-s-md transition-all duration-500 ease-in-out transform
          ${isOpen6 ? "translate-x-0 h-[194px]" : "translate-x-full h-0"}
          `}
          >
            <div className="flex flex-col font-bold text-lg text-gray-400">
              <Link
                href={`/user/${user.uid}`}
                onClick={closeMenu}
                className={`flex flex-col  w-full h-full ps-12 py-2 my-1 mx-1 text-gray-400 no-underline hover:bg-gray-200 hover:text-blue-500 duration-500 ${
                  isOpen6 ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="font-semibold text-lg text-black me-4">
                  {user.name || ""}
                </span>
                <span className="text-gray-500 text-lg">
                  {user.email || ""}
                </span>
              </Link>

              <hr className="mb-1 mt-1" />
              <Link
                href="/settings/profile"
                className={`block w-full h-full ps-12 py-2 my-1 mx-1 text-gray-400 no-underline hover:bg-gray-200 hover:text-blue-500 duration-500 ${
                  isOpen6 ? "opacity-100" : "opacity-0"
                }`}
                onClick={closeMenu}
              >
                ACCOUNT SETTINGS
              </Link>

              <div
                onClick={async () => {
                  await signOut({ callbackUrl: "/" });
                }}
                className={`block cursor-pointer w-full h-full ps-12 py-2 my-1 mx-1 text-gray-400 no-underline hover:bg-gray-200 hover:text-red-500 duration-500 ${
                  isOpen6 ? "opacity-100" : "opacity-0"
                }`}
              >
                LOG OUT
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Link href="/signup" className="text-white no-underline">
          <Button className="bg-sky-900 py-4 font-bold text-base hover:bg-sky-700 mt-2">
            JOIN US
          </Button>
        </Link>
      )}
    </div>
  );
}
