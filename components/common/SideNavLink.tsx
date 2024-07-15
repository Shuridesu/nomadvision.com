'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDownIcon,ChevronUpIcon } from '@heroicons/react/24/outline'
import cn from 'classnames'

interface Link {
    href: string;
    name: string;
    icon?: React.ReactNode;
}

interface Props {
    children: React.ReactNode;
    link?:Link[]
    [rest:string]:any
}

export default function SideNavLink({children,link,...rest}:Props) {
    const [show, setShow] = useState(false);
    const className = cn(
        "",
        rest.className
    )
    useEffect(()=>{
        setShow(false)
    },[rest.isOpen])
  return (
    <div className = {className}>
      <button
        className={`${
          show ? "text-blue-500" : "text-white"
        } flex items-center justify-between space-x-4  text-lg border-b w-64 md:w-72 text-start p-4`}
        onClick={() => {
          setShow(!show);
        }}
      >
        <h1>{children}</h1>
        {show ? (
          <ChevronUpIcon className="w-6 h-6" />
        ) : (
          <ChevronDownIcon className="w-6 h-6" />
        )}
      </button>
      <div>
        {show && (
          <div className="flex flex-col items-start space-y-2 text-gray-400 text-lg border-b w-64 md:w-72 text-start p-2">
            {rest.isDisabled && <p className="flex group items-center space-x-6  w-full rounded-md p-2">Coming Soon</p>}
            {link?.map((link)=>(
                <Link
                href={link.href}
                key={link.name}
                className="flex group items-center space-x-6 hover:bg-gray-500 hover:text-white hover:bg-opacity-60 w-full rounded-md p-2 transition-color duration-200 ease-in-out"
              >
                <span className = "fill-gray-400 group-hover:fill-white">{link.icon && link.icon}</span>
                <p>{link.name}</p>
              </Link>
            ))}
            
          </div>
        )}
      </div>
    </div>
  );
}
