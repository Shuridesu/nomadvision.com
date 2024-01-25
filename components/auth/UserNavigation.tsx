
"use client"

import { signOut } from "next-auth/react"
import { UserType } from "@/lib/nextauth"
import Link from "next/link"
import Image from "next/image"
import { use, useEffect, useState } from "react"
import { Button } from "../ui/button"

interface UserNavigationProps {
  user: UserType
}

// UserNavigation
const UserNavigation = ({ user }: UserNavigationProps) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  useEffect(() => {
    const closeMenusOnClickOutside = (event:any) => {
      
      if(show) {
        let target = event.target;
        if(!target.closest(".menu")){
          closeMenu()
        }
      }
      
    }
    document.addEventListener('mousedown', closeMenusOnClickOutside);

    return () => {
      document.removeEventListener('mousedown', closeMenusOnClickOutside);
    };

  }, [show]);
  const closeMenu = () => setShow(false);
  
  return (
    <div className="text-center">
      <div onClick={toggleShow}>
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
        className={`min-w-[250px] absolute ms-0 xl:-translate-x-36 border menu shadow-sm rounded-md mt-4 z-10 py-1 px-1 transform transition-all duration-300 ease-in-out ${
          show ? "block bg-white" : "opacity-0 hidden"
        }`}
      >
        <Link
          href={`/user/${user.uid}`}
          onClick={closeMenu}
          className="no-underline hover:bg-gray-100 py-2.5 flex flex-col"
        >
          <span className="font-semibold text-lg text-black">
              {user.name || ""}
            </span>
            <span className="text-gray-500 text-lg px-2">{user.email || ""}</span>
          
            
          
        </Link>

        <hr className="mb-1 mt-1"/>

        <Link
          href="/settings/profile"
          className="block text-center text-sm font-bold transition-all duration-300 hover:bg-gray-100 px-10 py-2.5 hover:text-blue-500 text-gray-400  no-underline mb-0 mt-0"
          onClick={closeMenu}
        >
          
            ACCOUNT SETTINGS
          
        </Link>

        <div
          onClick={async () => {
            await signOut({ callbackUrl: "/" });
          }}
          className="text-center text-sm font-bold transition-all duration-300 hover:bg-gray-100 px-8 py-2 group no-underline text-gray-400 hover:text-red-500 cursor-pointer "
        >
          
            LOGOUT
          
        </div>
      </div>
    </div>
  );
}

export default UserNavigation

