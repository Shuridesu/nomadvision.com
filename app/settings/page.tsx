import React from "react";
import { UpdateProfileForm } from "@/components/forms";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: 'FullAuth | Reset Password',
  description: 'FullAuth reset password page',
}

export default function Page() {
  return (
    <div className="min-h-screen">
    <div className="flex flex-1 h-max flex-col px-6 py-16 lg:px-8 mx-auto bg-white rounded-md bg-opacity-90 mt-6 max-w-xl">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Change Your Profile
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <UpdateProfileForm />
      </div>
    </div>
    </div>
  );
}