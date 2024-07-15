'use client';

import React from "react";
import { List, Spinner } from "@/components/common";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";



export default function Page() { 
  const { data:user, isLoading,isFetching } = useRetrieveUserQuery();
  if (isLoading || isFetching || !user) {
    return (
      <div className="flex justify-center my-8">
        <Spinner lg />
      </div>
    );
  }
  
  return (
    <div className = "flex flex-col items-center justify-center">
      <div className = "py-10">
        <img src={user.avatar} alt={user.name} className = "w-40 h-40 rounded-full"/>
      </div>
      <div className = "bg-white shadow-lg w-2/3 max-w-xl py-5 text-center rounded-md mb-6 text-gray-900 bg-opacity-80">
        <h1 className = "text-3xl">{user.name}</h1>
        <p className = "text-gray-500">{user.email}</p>
      </div>
      <div className = "bg-white shadow-lg w-2/3 max-w-xl py-10 rounded-md mb-10 text-gray-900 bg-opacity-80">
        <h1 className = "text-gray-500 text-xl font-semibold pb-2 text-center">BIO</h1>
        <p className = "w-4/5 mx-auto">{user.introduction}</p>
      </div>
    </div>
  );
}
