'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import TrendsIcon from '../Icons/TrendsIcon';
import AnalyticsIcon from '../Icons/AnalyticsIcon';
import ToolIcon from '../Icons/ToolIcon';
import OtherIcon from '../Icons/OtherIcon';
import LockedIcon from '../Icons/LockedIcon';



export default function NavItem() {
  const [showMenu1, setShowMenu1] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const [showMenu3, setShowMenu3] = useState(false);
  const [showMenu4, setShowMenu4] = useState(false);
  const [showMenu5, setShowMenu5] = useState(false);
  useEffect(() => {
    // 画面のどこかをクリックした時にメニューを閉じる関数
    const closeMenusOnClickOutside = (event:any) => {
      // ここで、メニューが開いているかどうか、そしてクリックがメニューの外側で発生したかどうかをチェックします
      if (showMenu1 || showMenu2 || showMenu3 || showMenu4 || showMenu5) {
        let targetElement = event.target; // クリックされた要素を取得
        // 各メニューのrefを確認し、targetElementがその中に含まれていないかチェック
        // ここでは例としてshowMenu1のみを示します
        // この部分は各メニュー要素のrefに応じて調整する必要があります
        if (
          !targetElement.closest(".menu1") &&
          !targetElement.closest(".menu2") &&
          !targetElement.closest(".menu3") &&
          !targetElement.closest(".menu4") &&
          !targetElement.closest(".menu5") &&
          !targetElement.closest(".menu6") &&
          !targetElement.closest(".menu7") &&
          !targetElement.closest(".menu8")
        ) {
          closeAllMenus();
        }
      }
    };

    // mousedownイベントリスナーを追加
    document.addEventListener('mousedown', closeMenusOnClickOutside);

    // クリーンアップ関数でイベントリスナーを削除
    return () => {
      document.removeEventListener('mousedown', closeMenusOnClickOutside);
    };
  }, [showMenu1, showMenu2, showMenu3, showMenu4, showMenu5]);



  const toggleMenu1 = () => {
    setShowMenu1(!showMenu1);
  };

  const toggleMenu2 = () => {
    setShowMenu2(!showMenu2);
  };

  const toggleMenu3 = () => {
    setShowMenu3(!showMenu3);
  };

  const toggleMenu4 = () => {
    setShowMenu4(!showMenu4);
  };

  const toggleMenu5 = () => {
    setShowMenu5(!showMenu5);
  };


  const closeAllMenus = () => {
    setShowMenu1(false);
    setShowMenu2(false);
    setShowMenu3(false);
    setShowMenu4(false);
    setShowMenu5(false);
  };
  
  return (
    
      <ul className="flex">
        
          <button className="group relative" onClick={toggleMenu1}>
            <li className="mx-4 flex">
              <span className="transition-transform duration-300 group-hover:scale-110">
                <TrendsIcon />
              </span>

              <span className="font-bold bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0px_3px] hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 ms-2 text-black">
                TRENDS
              </span>
            </li>
          </button>

          <ul
            className={`absolute border shadow-sm rounded-md mt-10 z-10 py-1 px-1 ms-4 transform transition-all duration-300 ease-in-out ${
              showMenu1
                ? "opacity-100"
                : "opacity-0 hidden"
            }`}
          >
            <li className="text-center text-sm py-2 font-bold transition-all duration-300 hover:bg-gray-100 px-2 group">
              <Link href="/ai-trends" onClick={closeAllMenus} className = "menu1 block text-gray-400 no-underline transition-all duration-300 group-hover:text-blue-500">
                AI TRENDS 
              </Link>
            </li>
            <li className="text-center text-sm py-2 font-bold transition-all duration-300 hover:bg-gray-100 px-2 group">
              <Link href="/data-trends" onClick={closeAllMenus} className = "menu2 block text-gray-400 no-underline transition-all duration-300 group-hover:text-blue-500">
                DATA TRENDS
              </Link>
            </li>
          </ul>
        
        <span className="flex flex-col">
          <button className="group relative" onClick={toggleMenu2}>
            <li className="mx-4 flex">
              <span className="transition-transform duration-300 group-hover:scale-110">
                <AnalyticsIcon />
              </span>

              <span className="font-bold bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0px_3px] hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 ms-2 text-black">
                ANALYTICS
              </span>
            </li>
          </button>
          <ul
            className={`absolute border shadow-sm rounded-md mt-10 z-10 py-1 px-1 ms-0 transform transition-all duration-300 ease-in-out ${
              showMenu2
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none hidden"
            }`}
          >
            <li className="text-center text-sm py-2 font-bold transition-all duration-300 hover:bg-gray-100 px-2 group">
              <Link href="/industry-analytics" onClick={closeAllMenus} className='menu3 block text-gray-400 no-underline transition-all duration-300 group-hover:text-blue-500'>
                INDUSTRY ANALYTICS
              </Link>
            </li>
          </ul>
        </span>
        <span className="flex flex-col">
          <button className="group relative" onClick={toggleMenu3}>
            <li className="mx-4 flex">
              <span className="transition-transform duration-300 group-hover:scale-110">
                <ToolIcon />
              </span>

              <span className="font-bold bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0px_3px] hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 ms-2 text-black">
                TOOL&PAPERS
              </span>
            </li>
          </button>
          <ul
            className={`absolute border shadow-sm rounded-md mt-10 z-10 py-1 px-1 ms-4 transform transition-all duration-300 ease-in-out ${
              showMenu3
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none hidden"
            }`}
          >
            <li className="text-center text-sm py-2 font-bold transition-all duration-300 hover:bg-gray-100 px-4 group">
              <Link href="/ai-software" onClick={closeAllMenus} className='menu4 block text-gray-400 no-underline transition-all duration-300 group-hover:text-blue-500'>
                AI SOFTWARE
              </Link>
            </li>
          </ul>
        </span>
        <span className="flex flex-col">
          <button className="group relative" onClick={toggleMenu4}>
            <li className="mx-4 flex">
              <span className="transition-transform duration-300 group-hover:scale-110">
                <LockedIcon />
              </span>

              <span className="font-bold ms-2 text-gray-300">
                PREMIUM
              </span>
            </li>
          </button>
          <ul
            className={`absolute border shadow-sm rounded-md mt-10 z-10 py-1 px-1 ms-3 transform transition-all duration-300 ease-in-out ${
              showMenu4
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none hidden"
            }`}
          >
            <li className="text-start text-sm py-2 font-bold text-gray-400 max-w-[120px]">
              <p>
                *COMING SOON
              </p>
            </li>
          </ul>
        </span>
        <span className="flex flex-col">
          <button className="group relative" onClick={toggleMenu5}>
            <li className="mx-4 flex">
              <span className="transition-transform duration-300 group-hover:scale-110">
                <OtherIcon/>
              </span>
            </li>
          </button>
          <ul
            className={`absolute border bg-white shadow-sm rounded-md mt-10 z-10 py-1 px-1 -ms-12 transform transition-all duration-300 ease-in-out ${
              showMenu5
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none hidden"
            }`}
          >
            <li className="text-center text-sm py-2 font-bold transition-all duration-300 hover:bg-gray-100 px-2 group">
              <Link href="/about-us" onClick={closeAllMenus} className='menu6 block text-gray-400 no-underline transition-all duration-300 group-hover:text-blue-500'>
                ABOUT US
              </Link>
            </li>
            <li className="text-center text-sm py-2 font-bold transition-all duration-300 hover:bg-gray-100 px-2 group">
              <Link href="mailto:example@example.com?subject=Your Email Subject&body=Hello, this is the pre-filled body of the email." onClick={closeAllMenus} className='menu6 text-gray-400 no-underline transition-all duration-300 group-hover:text-blue-500'>
                CONTACT US
              </Link>
            </li>
            <li className="text-center text-sm py-2 font-bold transition-all duration-300 hover:bg-gray-100 px-2 group">
              <Link href="/terms&conditions" onClick={closeAllMenus} className='menu7 block text-gray-400 no-underline transition-all duration-300 group-hover:text-blue-500'>
                TERMS&CONDITIONS
              </Link>
              
            </li>
            <li className="text-center text-sm py-2 font-bold transition-all duration-300 hover:bg-gray-100 px-2 group">
              <Link href="/privacy&policy" onClick={closeAllMenus} className='menu8 block text-gray-400 no-underline transition-all duration-300 group-hover:text-blue-500'>
                PRIVACY&POLICY
              </Link>
            </li>
          </ul>
        </span>

      </ul>
      
    
  );
}
