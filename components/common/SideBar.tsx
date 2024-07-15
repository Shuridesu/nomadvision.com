'use client';

import cn from 'classnames'
import { CpuChipIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline'
import {SideNavLink, Spinner} from '@/components/common';
import { LuBrainCircuit } from "react-icons/lu";
import { BsClipboard2DataFill } from "react-icons/bs";
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useLogoutMutation, useRetrieveUserQuery } from '@/redux/features/authApiSlice';
import Image from 'next/image';
import { TbBusinessplan } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { logout as setLogout } from "@/redux/features/authSlice";
import { useEffect, useState } from 'react';

interface Props {
    isOpen: boolean
}

export default function SideBar({isOpen}:Props) {
  const className = cn("h-screen w-64 md:w-72 flex lg:hidden", {
    hidden: !isOpen,
  });
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        dispatch(setLogout());
      });
  };
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(false);
  }, [isOpen]);

  return (
    <div className={className}>
      <div className="flex flex-col items-start">
        <SideNavLink
          link={[
            {
              href: "/ai-trends",
              name: "AI TRENDS",
              icon: <LuBrainCircuit className="w-6 h-6" />,
            },
            {
              href: "/data-trends",
              name: "DATA TRENDS",
              icon: <BsClipboard2DataFill className="w-6 h-6" />,
            },
          ]}
          className="mt-32"
          isOpen={isOpen}
        >
          TRENDS
        </SideNavLink>
        <SideNavLink
          link={[
            {
              href: "/industry-analytics",
              name: "INDUSTRY ANALYTICS",
              icon: <PresentationChartBarIcon className="w-6 h-6" />,
            },
          ]}
          className=""
          isOpen={isOpen}
        >
          ANALYTICS
        </SideNavLink>
        <SideNavLink
          link={[
            {
              href: "/ai-softwares",
              name: "AI SOFTWARES",
              icon: <CpuChipIcon className="w-6 h-6" />,
            },
          ]}
          className=""
          isOpen={isOpen}
        >
          TOOL&PAPERS
        </SideNavLink>
        <SideNavLink
          isDisabled={true}
          className=""
          isOpen={isOpen}
        >
          PREMIUM
        </SideNavLink>
        <SideNavLink
          link={[
            {
              href: "/about-us",
              name: "ABOUT US",
            },
            {
              href: "/contact-us",
              name: "CONTACT US",
            },
            {
              href: "/terms-conditions",
              name: "TERMS & CONDITIONS",
            },
            {
              href: "/privacy-policy",
              name: "PRIVACY & POLICY",
            },
          ]}
          className=""
          isOpen={isOpen}
        >
          SITE INFO
        </SideNavLink>

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
                } flex flex-col w-11/12 mx-auto bg-white rounded-md mt-10 shadow-zinc-100 shadow border`}
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

              <div className="flex items-center justify-start w-full pb-6 mt-3">
                <button
                  className="flex justify-start items-center hover:bg-gray-500 hover:bg-opacity-60 p-2 w-full mx-2 rounded-md transition-color duration-200 ease-in-out"
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
                  <h1 className=" text-white text-base px-4">
                    {user?.name || "unknown"} 
                  </h1>
                </button>
              </div>
            </>
          )
        ) : (
          <div className="flex items-center justify-center mt-48 pb-6 w-full ">
            <Link
              href="/auth/register"
              className=" text-white text-center w-10/12 bg-indigo-600 hover:bg-indigo-500 text-lg p-3 rounded-md font-semibold"
            >
              Join us
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
