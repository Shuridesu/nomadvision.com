"use client";

import Link from "next/link";
import { NavLink, Spinner } from "@/components/common";
import {
  ToolIcon,
  TrendsIcon,
  AnalyticsIcon,
  LogoIcon,
  OtherIcon,
  PremiumIcon,
} from "@/icons";
import cn from "classnames";
import Hamburger from "hamburger-react";
import {SideBar} from "@/components/common";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useLogoutMutation, useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { logout as setLogout } from "@/redux/features/authSlice";
import Image from "next/image";
import { TbBusinessplan } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { SearchForm } from "../forms";


interface Props {
  props?: string;
}

export default function Navbar({ props }: Props) {
  const className = cn(
    "flex justify-between items-center h-16 px-4 lg:shadow-md lg:bg-gray-200 lg:bg-opacity-40 text-xs xl:text-sm",
    props
  );
  const [isOpen, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const pathName = usePathname();

  useEffect(() => {
    setOpen(false);
    setShow(false);
  },[pathName])


  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const [logout] = useLogoutMutation();
  const { data:user, isLoading,isFetching } = useRetrieveUserQuery();
  const [show, setShow] = useState(false);

  const handleLogout = () => {
    logout(undefined)
       .unwrap()
       .then(()=>{
        dispatch(setLogout());
       })
  }

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);


  return (
    <nav className={className}>
      <Link href="/" className="flex items-center text-blue-500 font-extrabold">
        NOMAD VISION
        <LogoIcon />
      </Link>
      <div className="hidden lg:flex justify-center space-x-6 ">
        <NavLink
          icon={<TrendsIcon />}
          link={[
            { href: "/ai-trends", children: "AITRENDS" },
            { href: "/data-trends", children: "DATATRENDS" },
          ]}
        >
          TRENDS
        </NavLink>
        <NavLink
          icon={<AnalyticsIcon />}
          link={[
            { href: "/industry-analytics", children: "INDUSTRY ANALYTICS" },
          ]}
        >
          ANALYTICS
        </NavLink>
        <NavLink
          icon={<ToolIcon />}
          link={[{ href: "/ai-softwares", children: "AI SOFTWARE" }]}
          rest="w-36"
        >
          TOOL&PAPERS
        </NavLink>
        <NavLink icon={<PremiumIcon />} isDisabled={true}>
          PREMIUM
        </NavLink>
        <NavLink
          link={[
            { href: "/about-us", children: "ABOUT US" },
            { href: "/contact-us", children: "CONTACT US" },
            { href: "/terms&conditions", children: "TERMS&CONDITIONS" },
            { href: "/privacy&policy", children: "PRIVACY&POLICY" },
          ]}
        >
          <OtherIcon />
        </NavLink>
      </div>
      
     
      <div className="flex items-center space-x-8">
        <button
          className={`${
            isOpen ? "fixed flex top-1 right-4" : " flex fixed top-1 right-4"
          } z-20 lg:hidden items-center justify-center w-14 h-14 rounded-2xl border-2 bg-gray-800 bg-opacity-90 text-white`}
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </button>

        <div ref={ref} className="hidden lg:block">
          {isAuthenticated ? (
            isLoading || isFetching ? (
              <div className="flex items-center justify-center mt-48 pb-6 w-full ">
                <Spinner md />
              </div>
            ) : (
              <>
                <div
                  className={`${
                    show ? " opacity-100" : "opacity-0 pointer-events-none"
                  } bg-opacity-0 absolute right-2 top-10 flex flex-col max-w-3xl mx-auto bg-white rounded-md mt-10 shadow-zinc-100 shadow border`}
                >
                  <h1 className="text-gray-400 flex items-center justify-center p-2 border-b-2 text-sm">
                    {user?.email}
                  </h1>
                  <Link
                    href="/"
                    className="flex items-center flex-grow gap-2 p-2 hover:bg-gray-300 m-0.5 rounded-md text-base font-medium transition-color duration-200 ease-in-out"
                  >
                    <TbBusinessplan className="h-6 w-6" />
                    My Plan
                  </Link>
                  <Link
                    href="/settings"
                    className="flex items-center flex-grow gap-2 p-2 hover:bg-gray-300 m-0.5 rounded-md text-base font-medium transition-color duration-200 ease-in-out"
                  >
                    <IoIosSettings className="h-6 w-6" />
                    Settings
                  </Link>
                  <hr className="border border-gray-300" />
                  <button
                    className="flex items-center flex-grow gap-2 p-2 hover:bg-gray-300 hover:text-red-500 m-0.5 rounded-md text-base font-medium transition-color duration-200 ease-in-out"
                    onClick={handleLogout}
                  >
                    <MdLogout className="h-6 w-6" />
                    Logout
                  </button>
                </div>

                <div className="flex items-center justify-start w-full">
                  <button
                    className="flex items-center justify-center"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    <Image
                      src={user?.avatar || "/default.png"}
                      alt="avatar"
                      width={40}
                      height={40}
                      className="w-12 h-12 rounded-full"
                    />
                  </button>
                </div>
              </>
            )
          ) : (
            <Link
              href="/auth/register"
              className="hidden lg:block bg-indigo-600 px-4 py-3 rounded-md text-gray-200 font-semibold"
            >
              Join us
            </Link>
          )}
        </div>
        <div className="fixed bg-fixed bg-black bg-opacity-80 top-0 right-0  overflow-y-auto scrollbar-hide z-10">
          <SideBar isOpen={isOpen} />
        </div>
      </div>
      <div className="absolute top-4 right-24">
      <SearchForm />
      </div>
    </nav>
  );
}
