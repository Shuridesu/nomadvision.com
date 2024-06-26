'use client'

import Link from "next/link";
import React from 'react'
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { UserType } from "@/lib/nextauth";
import { signOut } from "next-auth/react";

interface FooterProps {
  user : UserType | null
}

export default function Footer({user}:FooterProps) {
  return (
    <div>
      <footer className="h-96 footer p-10 bg-white text-black-content py-32 mt-24 border-t-2 -translate-x-10 sm:translate-x-0 grid grid-cols-1 sm:grid-cols-2">
        <aside className="ms-20">
          <Link href = "/" className="flex items-center mb-2 no-underline">
            <span className="mt-3 text-2xl font-extrabold me-2 text-blue-400">
              NOMAD VISION
            </span>
            <span>
              <Logo />
            </span>
          </Link>
          <p className = "pt-20 font-semibold">
            THE OFFICIAL INNOVATIVE SOURCE OF AI AND DATA FOR BUSINESS
            <br />@ NOMAD VISION 2023
          </p>
        </aside>
        <nav>
          <div className="mt-6 xl:ms-32 mb-10">
            {user ? (
              <Button
                onClick={async () => {
                  await signOut({ callbackUrl: "/" });
                }}
                variant="outline"
                className="font-semibold ms-20 max-w-[20px] px-8 text-xs hover:text-red-500  lg:max-w-none lg:text-lg lg:h-14"
              >
                LOG OUT
              </Button>
            ) : (
              <Link href="/signup" className="text-gray-600">
                <Button variant="outline" className="font-semibold ms-20 max-w-[20px] px-9 text-xs lg:max-w-none lg:text-lg lg:h-14">
                  SIGN UP
                </Button>
              </Link>
            )}

            <Link
              href="/contact"
              className="text-gray-600"
            >
              <Button variant="outline" className="font-semibold ms-2 max-w-[20px] text-xs px-12 lg:max-w-none lg:text-lg lg:h-14">
                CONTACT US
              </Button>
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
}
