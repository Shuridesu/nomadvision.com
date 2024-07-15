import React from "react";
import { ConfirmResetPasswordForm } from "@/components/forms";
import { Metadata } from "next";
import { RiLockPasswordFill } from "react-icons/ri";

export const metadata:Metadata = {
  title: 'FullAuth | Reset Password Confirm',
  description: 'FullAuth reset password confirm page',
}

interface Props {
  params:{
    uid: string;
    token: string;
  }
}

export default function Page({ params: { uid, token } }: Props) {
  return (
    <div className="min-h-screen">
      <div className="flex flex-1 h-max flex-col px-6 py-16 lg:px-8 mx-auto bg-white rounded-md bg-opacity-90 mt-6 max-w-xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <RiLockPasswordFill className="mx-auto h-10 w-auto text-indigo-600" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Reset your password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <ConfirmResetPasswordForm uid={uid} token={token} />
        </div>
      </div>
    </div>
  );
}

