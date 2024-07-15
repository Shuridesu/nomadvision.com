import React from "react";
import { Metadata } from 'next'
import { Login } from "@/components/common";
import { usePathname } from "next/navigation";

export const metadata:Metadata = {
  title : "Full Auth | Login",
  description : "Full Auth Login Page",
}


export default function Page() {
  
  return (
    <>
      <Login/>
    </>
  );
}