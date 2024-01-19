import Link from "next/link";
import React from 'react'
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <div>
      <footer className="footer p-10 bg-white text-black-content py-32 mt-24 border-t-2 -translate-x-10 sm:translate-x-0 grid grid-cols-1 sm:grid-cols-2">
        <aside className="ms-20">
          <div className="flex items-center mb-2">
            <span className="mt-3 text-2xl font-extrabold me-2 text-blue-400">
              NOMAD VISION
            </span>
            <span>
              <Logo />
            </span>
          </div>
          <p>
            THE OFFICIAL INNOVATIVE SOURCE OF AI AND DATA FOR BUSINESS
            <br />
            @ NOMAD VISION 2023
          </p>
        </aside>
        <nav>
          <div className="mt-6 text-sm xl:ms-32">
            <Link href = "/signup" className = "text-gray-600">
            <Button variant= "outline" className="py-4 font-semibold ms-14">SIGN UP</Button>
            </Link>
            
            
            <Link href="mailto:example@example.com?subject=shurikikuti@icloud.com Subject&body=Hello, this is the pre-filled body of the email." className="text-gray-600">
              <Button variant= "outline" className="py-4 font-semibold ms-4">CONTACT US</Button>
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
}
