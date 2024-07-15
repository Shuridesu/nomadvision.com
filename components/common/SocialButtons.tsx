"use client";

import { ImGoogle } from "react-icons/im";
import { ContinueWithGoogle } from "@/utils";

export default function SocialButtons() {
  return (
    <>
      <div className="flex items-center justify-center mt-4">
        <div className="flex-grow border border-gray-300"></div>
        <span className="px-4 font-medium">or</span>
        <div className="flex-grow border border-gray-300"></div>
      </div>
      <div className="flex justify-between items-center gap-2 mt-5">
        <button
          onClick={ContinueWithGoogle}
          className="w-full mx-auto flex items-center justify-center bg-red-400 hover:bg-red-500 text-white p-2 rounded-md font-medium"
        >
          <ImGoogle />
          <span className="ml-3">Google Signin</span>
        </button>
      </div>
    </>
  );
}
