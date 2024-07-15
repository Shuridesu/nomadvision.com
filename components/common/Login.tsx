import React from 'react'
import SocialButtons from './SocialButtons'
import Link from 'next/link'
import { LoginForm } from '../forms'
import { FaSignInAlt } from 'react-icons/fa'

export default function Login() {
  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 max-w-xl mx-auto bg-white rounded-md mt-6 border-3">
        <div className="sm:mx-auto sm:w-full sm:max-w-xl">
          <FaSignInAlt className="mx-auto h-10 w-auto text-indigo-600" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in for your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
          <LoginForm />
          <SocialButtons />
          <p className="mt-10 text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
      <div className="h-32"></div>
    </>
  )
}
