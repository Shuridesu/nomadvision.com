import { Spinner } from "@/components/common";
import GoogleAuth from "@/components/common/GoogleAuth";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <GoogleAuth />
    </Suspense>
  );
}
