'use client'

import React, { useState } from 'react';
import MenuIcon from '../Icons/MenuIcon';
import AnalyticsIcon from '../Icons/AnalyticsIcon';
import ToolIcon from '../Icons/ToolIcon';
import TrendsIcon2 from '../Icons/TrendsIcon2';
import AnalyticsIcon2 from '../Icons/AnalyticsIcon2';
import ToolIcon2 from '../Icons/ToolIcon2';
import Link from 'next/link';
import OtherIcon2 from '../Icons/OtherIcon2';
import LockIcon2 from '../Icons/LockIcon2';

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu1, setShowMenu1] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const [showMenu3, setShowMenu3] = useState(false);
  const [showMenu4, setShowMenu4] = useState(false);
  const [showMenu5, setShowMenu5] = useState(false);

  const toggleMenu1 = () => {
    setShowMenu1(!showMenu1);
    setShowMenu2(false); // 他のメニューを閉じる
    setShowMenu3(false);
    setShowMenu4(false);
    setShowMenu5(false);
  };
  const toggleMenu2 = () => {
    setShowMenu1(false);
    setShowMenu2(!showMenu2);
    setShowMenu3(false);
    setShowMenu4(false);
    setShowMenu5(false);
  };
  const toggleMenu3 = () => {
    setShowMenu1(false);
    setShowMenu2(false);
    setShowMenu3(!showMenu3);
    setShowMenu4(false);
    setShowMenu5(false);
  };
  const toggleMenu4 = () => {
    setShowMenu1(false);
    setShowMenu2(false);
    setShowMenu3(false);
    setShowMenu4(!showMenu4);
    setShowMenu5(false);
  };
  const toggleMenu5 = () => {
    setShowMenu1(false);
    setShowMenu2(false);
    setShowMenu3(false);
    setShowMenu4(false);
    setShowMenu5(!showMenu5);
  };
  

  const closeAllMenus = () => {
    setShowMenu1(false);
    setShowMenu2(false);
    setShowMenu3(false);
    setShowMenu4(false);
    setShowMenu5(false);
    setIsOpen(false);
  };
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative xl:hidden mt-3 me-3 z-20"
      >
        <MenuIcon /> {/* ハンバーガーメニューアイコン */}
      </button>
      <div
        className={`absolute right-0 h-max pb-14 rounded-xl transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "translate-x-full hidden"
        } w-2/3 sm:w-1/3 bg-blue-500 bg-opacity-80 shadow-md z-1 xl:hidden`}
      >
        <div>
          <ul className="mt-20 text-xl sm:text-2xl font-bold">
            <li onClick = {toggleMenu1} className="flex ms-4 group">
              <span className="me-4 ">
                <TrendsIcon2 />
              </span>
              <button className="text-white bg-gradient-to-r from-black to-black bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300">
                TRENDS
              </button>
            </li>
            <ul className={`mt-4 mb-4 py-3 border-y-2 text-gray-300 font-bold ${showMenu1
            ? "pointer-events-auto"
            : "opacity-0 pointer-events-none hidden"}`}>
              <li className="text-lg sm:xl ms-20 mb-3 hover:underline hover:text-black transition-all duration-300">
                <Link href="/ai-trends" onClick={closeAllMenus}>AI TRENDS</Link>
              </li>
              <hr/>
              <li className="text-lg sm:xl mt-3 ms-20 hover:underline hover:text-black transition-all duration-300">
                <Link href="/data-trends" onClick={closeAllMenus}>DATA TRENDS</Link>
              </li>
            </ul>

            <li onClick = {toggleMenu2} className="flex ms-4 mt-4 group">
              <span className="me-4">
                <AnalyticsIcon2 />
              </span>
              <button className="text-white bg-gradient-to-r from-black to-black bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300">
                ANALYTICS
              </button>
            </li>
            <ul className={`mt-4 mb-4 py-3 border-y-2 text-gray-300 font-bold ${showMenu2
            ? "pointer-events-auto"
            : "opacity-0 pointer-events-none hidden"}`}>
              <li className="text-lg sm:xl ms-20  hover:underline hover:text-black transition-all duration-300">
                <Link href="/industry-analytics" onClick={closeAllMenus}>INDUSTRY ANALYTICS</Link>
              </li>
            </ul>


            <li onClick = {toggleMenu3} className="flex ms-4 mt-4 group">
              <span className="me-4">
                <ToolIcon2 />
              </span>
              <button className="text-white bg-gradient-to-r from-black to-black bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 overflow-wrap break-words">
                TOOL&PAPERS
              </button>
            </li>
            <ul className={`mt-4 mb-4 py-3 border-y-2 text-gray-300 font-bold ${showMenu3
            ? "pointer-events-auto"
            : "opacity-0 pointer-events-none hidden"}`}>
              <li className="text-lg sm:xl ms-20  hover:underline hover:text-black transition-all duration-300">
                <Link href="/ai-software" onClick={closeAllMenus}>AI SOFTWARE</Link>
              </li>
            </ul>

            <li onClick = {toggleMenu4} className="flex ms-4 mt-4 group">
              <span className="me-4 pb-1">
                <LockIcon2 />
              </span>
              <button className="text-gray-300">
                PREMIUM
              </button>
            </li>
            <ul className={`mt-4 mb-4 py-3 border-y-2 text-gray-300 font-bold ${showMenu4
            ? "pointer-events-auto"
            : "opacity-0 pointer-events-none hidden"}`}>
              <li className="text-lg sm:xl ms-20 text-gray-300">
                <p>*Coming Soon</p>
              </li>
            </ul>

            <li onClick = {toggleMenu5} className="flex ms-4 mt-4 group">
              <span className="me-4">
                <OtherIcon2/>
              </span>
            </li>
            <ul className={`mt-4 mb-4 py-3 border-y-2 text-gray-300 font-bold ${showMenu5
            ? "pointer-events-auto"
            : "opacity-0 pointer-events-none hidden"}`}>
              <li className="text-lg sm:xl ms-14  hover:underline hover:text-black transition-all duration-300 mb-3">
                <Link href="/about-us" onClick={closeAllMenus}>ABOUT US</Link>
              </li>
              <hr/>
              <li className="text-lg sm:xl ms-14  hover:underline hover:text-black transition-all duration-300 mt-3 mb-3">
                <Link href="mailto:example@example.com?subject=Your Email Subject&body=Hello, this is the pre-filled body of the email." onClick={closeAllMenus}>CONTACT US</Link>
              </li>
              <hr/>
              <li className="text-lg sm:xl ms-14  hover:underline hover:text-black transition-all duration-300 mt-3 mb-3">
                <Link href="/terms&conditions" onClick={closeAllMenus}>TERMS&CONDITION</Link>
              </li>
              <hr/>
              <li className="text-lg sm:xl ms-14  hover:underline hover:text-black transition-all duration-300 mt-3">
                <Link href="/privacy&policy" onClick={closeAllMenus}>PRIVACY&POLICY</Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}


