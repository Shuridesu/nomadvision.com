"use client";

import { signOut } from "next-auth/react";
import { UserType } from "@/lib/nextauth";
import Link from "next/link";
import Image from "next/image";
import { use, useEffect, useState } from "react";

interface UserNavigationProps {
  user: UserType;
}

// UserNavigation
const UserNavigation2 = ({ user }: UserNavigationProps) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  const closeMenu = ()=> setShow(false)

  useEffect(() => {
    const closeMenusOnClickOutside = (event: any) => {
      if (show) {
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
  }, [show]);
  return (
    <div className="">
      <div onClick={toggleShow} className = "menu">
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
        className={`menu bg-white mt-4 py-auto rounded-s-md transition-all duration-500 ease-in-out transform
          ${show ? "translate-x-0 h-[194px]" : "translate-x-full h-0"}
          `}
      >
        <div className="flex flex-col font-bold text-lg text-gray-400">
          <Link
            href={`/user/${user.uid}`}
            onClick={closeMenu}
            className={`flex flex-col  w-full h-full ps-12 py-2 my-1 mx-1 text-gray-400 no-underline hover:bg-gray-200 hover:text-blue-500 duration-500 ${
                show ? "opacity-100" : "opacity-0"
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
              show ? "opacity-100" : "opacity-0"
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
                show ? "opacity-100" : "opacity-0"
              }`}
          >
            LOG OUT
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNavigation2;
