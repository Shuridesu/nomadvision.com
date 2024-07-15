'use client';

import { useAppSelector } from "@/redux/hooks";
import { redirect } from "next/navigation";
import { Spinner } from "@/components/common";

interface Props {
  children: React.ReactNode;
}

export default function RequireAuth({ children }: Props) {
  const { isAuthenticated, isLoad } = useAppSelector((state) => state.auth);
  if (isLoad) {
    return (
      <div className="flex justify-center my-8">
        <Spinner lg />
      </div>
    );
  }
  if (!isAuthenticated) {
    redirect("/auth/login");
  }

  return <div>{children}</div>;
}