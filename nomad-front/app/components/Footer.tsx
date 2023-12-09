import Link from "next/link";
import React from 'react'
import Logo from "./Logo";

export default function Footer() {
  return (
    <div>
      <footer className="footer p-10 bg-white text-black-content py-32 mt-24 border-t-2">
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
            THE OFFICIAL INNOVATIVE SOURCE OF AI AND FOR BUSINESS
            <br />
            @ NOMAD VISION 2023
          </p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4 mt-6 ms-20">
            
            <button className="btn btn-disabled">SIGN UP</button>
            
            <Link href="mailto:example@example.com?subject=shurikikuti@icloud.com Subject&body=Hello, this is the pre-filled body of the email.">
              <button className="btn btn-outline">CONTACT US</button>
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
}
