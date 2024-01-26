"use client"

import { UserDetailType } from "@/actions/user"
import Image from "next/image"

interface UserDetailProps {
  user: UserDetailType
}

// 投稿者詳細
const UserDetail = ({ user }: UserDetailProps) => {
  return (
    <div className = "border-4 w-11/12 sm:w-1/2 mx-auto shadow-md mt-10">
        <div className = "text-center text-2xl font-bold text-gray-500 mt-6">
            PROFILE
        </div>
      <div className="flex justify-center mb-5 mt-10">
        <div className="relative w-40 h-40 flex-shrink-0">
          <Image
            src={user.avatar || "/default.png"}
            className="rounded-full object-cover border-3"
            alt={user.name || "avatar"}
            fill
          />
        </div>
      </div>
      <div className="space-y-5 break-words whitespace-pre-wrap mb-5">
        <div className="font-bold text-3xl text-center">{user.name}</div>
            {
                user.introduction?(
                    <div className="leading-relaxed w-4/5 mx-auto">{user.introduction}</div>
                ):(
                    <div className = "text-center text-gray-500">
                        there are no introduction
                    </div>
                )

            }
      </div>
    </div>
  )
}

export default UserDetail