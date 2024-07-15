'use client';

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { usePathname } from "next/navigation";

interface Link {
  href: string;
  children: React.ReactNode;
}

interface Props {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  link? : Link[];
  [rest:string]: any;
}

export default function NavLink({ link, children, icon, ...rest }: Props) {
  const className = cn("hover:bg-black hover:bg-opacity-40 hover:text-white py-2 px-3 rounded-sm transition-color duration-300 ease-in-out", 
    rest
  );
  const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const pathName = usePathname();

    // 外側のクリックを検出するためのイベントリスナー
    useEffect(() => {
        const handleClickOutside = (event:any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        // ドキュメント全体にイベントリスナーを追加
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // コンポーネントがアンマウントされた時にイベントリスナーを削除
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    useEffect(()=>{
      setIsOpen(false)
    
    },[pathName])
  return (
    <div ref={ref} className="relative bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0px_3px] hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 z-20">
      <button onClick={()=>{setIsOpen(!isOpen)}} className="flex menu items-center group space-x-1">
        {icon && (
          <div className="fill-black transition-colors duration-300 group-hover:fill-blue-500 group-hover:scale-110">
            {icon}
          </div>
        )}
        <div className="text-gray-800 py-5 px-2 font-bold">{children}</div>
      </button>
      <div className={`${isOpen ?"flex":"hidden"}  flex-col justify-center text-center space-y-0.5 absolute top-16 left-0 bg-black border-2 shadow-md bg-opacity-50 rounded-md text-gray-300 font-semibold text-sm`}>
        {rest.isDisabled && <div className="py-2 px-3 rounded-sm">Coming Soon</div>}
        {link?.map((link)=>(
          <Link href={link.href} key={link.href} className = {className}>{link.children}</Link>
        ))}
      </div>
    </div>
  );
}
