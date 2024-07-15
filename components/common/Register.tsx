import React from "react";
import { FaFileSignature } from "react-icons/fa6";
import { RegisterForm } from "../forms";
import SocialButtons from "./SocialButtons";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mx-auto bg-white rounded-md border-3 mt-6 max-w-xl">
        <FaFileSignature className="mx-auto h-10 w-auto text-indigo-600" />
        <div className="sm:mx-auto sm:w-full sm:max-w-xl">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up for your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
          <RegisterForm />
          <SocialButtons />
          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
      <div className="h-10"></div>
    </>
  );
}
