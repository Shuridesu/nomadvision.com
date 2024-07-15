import { LogoIcon } from "@/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white h-48 relative">

        <div className="h-full grid grid-cols-2">
          <div className="h-full ms-8 pt-10">
            <Link
              href="/"
              className="flex items-center text-blue-500 font-extrabold border-2 border-white hover:border-indigo-400 hover:bg-gray-100 w-max p-4 rounded-md transition-all duration-200 ease-in-out"
            >
              NOMAD VISION
              <LogoIcon />
            </Link>
            <p className="text-gray-400 absolute bottom-6">
              The Official Innovative Source Of AI And Data For Business @ NOMAD
              VISION 2023
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 h-full text-gray-400 pb-6 lg:pb-0">
            <Link href = "/auth/register" className = "border-2 p-3 rounded-sm hover:text-indigo-500 hover:border-indigo-500 transition-colors duration-200 ease-in-out">
              Sign Up
            </Link>
            <Link href= "/contact-us" className = "border-2 p-3 rounded-sm hover:text-indigo-500 hover:border-indigo-500 transition-colors duration-200 ease-in-out">
              Contact Us
            </Link>
          </div>
        </div>

    </footer>
  );
}
