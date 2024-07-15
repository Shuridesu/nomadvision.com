import React from "react";
import { Metadata } from "next";
import { Register } from "@/components/common";

export const metadata: Metadata = {
  title: "Full Auth | Register",
  description: "Full Auth Register Page",
};

export default function Page() {
  return (
    <>
    <Register/>
    </>
  );
}
