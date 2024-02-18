'use client';

import React, { useEffect, useState } from 'react'
import UserIcon from '../Icons/UserIcon'
import CrossIcon from '../Icons/CrossIcon'
import { UserType, getAuthSession } from '@/lib/nextauth';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';


interface UserButtonProps {
    user : UserType | null
}

export default function UserButton({user}:UserButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    const pathName = usePathname();
    useEffect(()=>{
        if(isOpen){
            setIsOpen(false)
        }
    },[pathName])
  return (
    <>
      <button
        className="group font-medium px-2.5 py-2.5 border-2 bg-gray-100 hover:bg-sky-900 duration-300 text-white transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-full"
        onClick={toggleMenu}
      >
        <UserIcon />
      </button>
      <div
        className={`transform duration-300 ease-in-out ${
          isOpen ? "flex" : "h-0"
        } fixed inset-0 backdrop-blur-sm z-50 items-center justify-center`}
      >
        <div
          className={`transition-all duration-300 transform ${
            isOpen ? "animate-slideUp" : "hidden"
          } relative w-[500px] border pb-4 shadow-lg rounded-lg bg-white`}
        >
          <div className="flex flex-col justify-center items-center">
            <div className="border border-black py-2 px-2 rounded-full mt-4">
              <UserIcon />
            </div>
            <div className="mt-2 font-bold text-lg">YOUR ACCOUNT</div>
            <div className="border w-4/5 rounded-md mb-10 mt-3">
              <div className="ms-3 mt-2 mb-2 flex justify-between items-center">
                <div className="py-3">
                  <span className=" font-medium">{user?.name}</span>

                  <br />
                  <span className="text-gray-400">{user?.email}</span>
                </div>

                <Link href={`/user/${user?.uid}`} className="me-3">
                  <Button className="h-6 w-10 text-xs bg-sky-900 hover:bg-sky-800">
                    check
                  </Button>
                </Link>
              </div>
              <div className="border-t ms-3 py-4 font-semibold flex justify-between me-3">
                ACCOUNT SETTINGS
                <Link href="/settings/profile" className="">
                  <Button className="h-6 w-8 bg-sky-900 hover:bg-sky-800">
                    edit
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              className="ms-4 border-2 py-2 px-2 rounded-md font-semibold hover:text-red-500 transition-colors duration-100 ease-in-out"
              onClick={async () => {
                await signOut({ callbackUrl: "/" });
              }}
            >
              LOG OUT
            </button>
            <Link href="/contact">
              <button className="me-4 border-2 py-2 px-2 rounded-md font-semibold text-gray-900 hover:text-blue-500 transition-colors duration-100 ease-in-out">
                CONTACT
              </button>
            </Link>
          </div>

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
    </>
  );
}
