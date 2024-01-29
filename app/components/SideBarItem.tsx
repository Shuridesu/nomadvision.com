'use client'

import React, { useEffect, useState } from "react";
import TrendsIcon from "../Icons/TrendsIcon";
import TrendsIcon2 from "../Icons/TrendsIcon2";
import AnalyticsIcon2 from "../Icons/AnalyticsIcon2";
import ToolIcon2 from "../Icons/ToolIcon2";
import LockIcon2 from "../Icons/LockIcon2";
import { set } from "react-hook-form";
import Link from "next/link";
import OtherIcon2 from "../Icons/OtherIcon2";

export default function SideBarItem() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);

    const toggleMenu = (event:any) => {
        
      setIsOpen(!isOpen);
      setIsOpen2(false);
      setIsOpen3(false);
      setIsOpen4(false);
      setIsOpen5(false);
    };
    const toggleMenu2 = () => {
        setIsOpen2(!isOpen2);
        setIsOpen(false);
        setIsOpen3(false);
        setIsOpen4(false);
        setIsOpen5(false);
    }
    const toggleMenu3 = () => {
        setIsOpen3(!isOpen3);
        setIsOpen(false);
        setIsOpen2(false);
        setIsOpen4(false);
        setIsOpen5(false);
    }
    const toggleMenu4 = () => {
        setIsOpen(false);
        setIsOpen2(false);
        setIsOpen3(false);
        setIsOpen4(!isOpen4);
        setIsOpen5(false);
    }

    const toggleMenu5 = () => {
        setIsOpen5(!isOpen5);
        setIsOpen(false);
        setIsOpen2(false);
        setIsOpen3(false);
        setIsOpen4(false);
    }
    useEffect(() => {
        const closeMenusOnClickOutside = (event: any) => {
          if (isOpen || isOpen2 || isOpen3 || isOpen4 || isOpen5) {
            let target = event.target;
            if (!target.closest(".menu")) {
              closeMenu();
            }
          }
        };
        document.addEventListener("mousedown", closeMenusOnClickOutside);
    
        return () => {
          document.removeEventListener("mousedown", closeMenusOnClickOutside);
        };
      }, [isOpen, isOpen2, isOpen3, isOpen4, isOpen5]);

    const closeMenu = () => {
        setIsOpen(false);
        setIsOpen2(false);
        setIsOpen3(false);
        setIsOpen4(false);
        setIsOpen5(false);


    }
  return (
    <div className="ms-10 space-y-2">
        
      <div
        className="flex items-center cursor-pointer w-max group menu"
        onClick={toggleMenu}
      >
        <div className="mb-2">
          <TrendsIcon2 />
        </div>
        <h2 className="ms-3 text-3xl font-bold text-white bg-gradient-to-r from-black to-black bg-[length:0px_3px] hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300">TRENDS</h2>
      </div>

      <div
        className={`menu bg-white py-auto rounded-s-md transition-all duration-500 ease-in-out transform
      ${isOpen ? "translate-x-0 h-[100px]" : "translate-x-full h-0"}
      `}
      >
        <div className="flex flex-col font-bold text-lg text-gray-400">
          <Link href="/ai-trends" className = {`block w-full h-full ps-12 py-2 my-1 mx-1 text-gray-400 no-underline hover:bg-gray-200 hover:text-blue-500 duration-500 ${isOpen?"opacity-100":"opacity-0"}`}>AI TRENDS</Link>
          <Link href="/data-trends" className = {`block w-full h-full ps-12 py-2 mb-1 mx-1 text-gray-400 no-underline hover:bg-gray-200 hover:text-blue-500 duration-500 ${isOpen?"opacity-100":"opacity-0"}`}>DATA TRENDS</Link>
        </div>
      </div>



      <div className="flex items-center cursor-pointer w-max group menu" onClick={toggleMenu2}>
        <div className="mb-2">
          <AnalyticsIcon2/>
        </div>
        <h2 className="ms-3 text-3xl font-bold text-white bg-gradient-to-r from-black to-black bg-[length:0px_3px] group-hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300">ANALYTICS</h2>
      </div>

      <div
        className={`menu bg-white py-auto rounded-s-md transition-all duration-500 ease-in-out transform
      ${isOpen2 ? "translate-x-0 h-[52px]" : "translate-x-full h-0"}
      `}
      >
        <div className="flex items-center font-bold text-lg text-gray-400">
          <Link href="/industry-analytics" className = {`block w-full h-full ps-12 py-2 mt-1  mx-1 text-gray-400 no-underline hover:bg-gray-200 hover:text-blue-500 duration-500 ${isOpen2?"opacity-100":"opacity-0"}`}>INDUSTRY ANALYTICS</Link>
        </div>
      </div>




      <div className="flex items-center cursor-pointer w-max group menu" onClick={toggleMenu3}>
        <div className="mb-2">
          <ToolIcon2 />
        </div>
        <h2 className="ms-3 text-3xl font-bold text-white bg-gradient-to-r from-black to-black bg-[length:0px_3px] group-hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300">TOOL&PAPERS</h2>
      </div>

      <div
        className={`menu bg-white rounded-s-md transition-all duration-500 ease-in-out transform
      ${isOpen3 ? "translate-x-0 h-[52px]" : "translate-x-full h-0"}
      `}
      >
        <div className="flex items-center font-bold text-lg py-auto text-gray-400">
          <Link href="/ai-software" className = {`block w-full h-full ps-12 py-2 mt-1  mx-1 text-gray-400 no-underline hover:bg-gray-200 hover:text-blue-500 duration-500 ${isOpen3?"opacity-100":"opacity-0"}`}>AI SOFTWARE</Link>
        </div>
      </div>





      <div className="flex items-center cursor-pointer w-max menu" onClick={toggleMenu4}>
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
          <p className = {`ms-12 duration-500 ${isOpen4?"opacity-100":"opacity-0"}`}>COMING SOON</p>
        </div>
      </div>

      <div className="flex items-center cursor-pointer w-max menu" onClick={toggleMenu5}>
        <div className="mb-3">
          <OtherIcon2/>
        </div>
      </div>

      <div
        className={`menu bg-white py-auto rounded-s-md transition-all duration-500 ease-in-out transform
      ${isOpen5 ? "translate-x-0 h-[200px]" : "translate-x-full h-0"}
      `}
      >
        <div className="flex flex-col font-bold text-lg text-gray-400">
          <Link href="/about-us" className = {`block w-full h-full ps-12 py-2 my-1 mx-1 text-gray-400 no-underline hover:bg-gray-200 hover:text-blue-500 duration-500 ${isOpen5?"opacity-100":"opacity-0"}`}>ABOUT US</Link>
          <Link href="/contact" className = {`block w-full h-full ps-12 py-2 mb-1 mx-1 text-gray-400 no-underline hover:bg-gray-200 hover:text-blue-500 duration-500 ${isOpen5?"opacity-100":"opacity-0"}`}>CONTACT US</Link>
          <Link href="/terms&conditions" className = {`block w-full h-full ps-12 py-2 my-1 mx-1 text-gray-400 no-underline hover:bg-gray-200 hover:text-blue-500 duration-500 ${isOpen5?"opacity-100":"opacity-0"}`}>TERMS&CONDITIONS</Link>
          <Link href="/privacy&policy" className = {`block w-full h-full ps-12 py-2 mb-1 mx-1 text-gray-400 no-underline hover:bg-gray-200 hover:text-blue-500 duration-500 ${isOpen5?"opacity-100":"opacity-0"}`}>PRIVACY&POLICY</Link>
        </div>
      </div>




    </div>
  );
}
